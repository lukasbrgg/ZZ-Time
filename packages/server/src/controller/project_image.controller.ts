import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProjectImage, ProjectImageI } from "../model/project_image.model";
import SQLError from "../utils/SQLError";
import path from "path";

export class ProjectImageController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        error.message ||
        "Some error occurred while performing operation on project image",
    });
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.project_id) {
      ProjectImage.findByProjectId(request.query.project_id as string)
        .then((result: SQLError | ProjectImageI) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response
            .status(StatusCodes.OK)
            .send(result[0].path);
          return;
        })
        .catch((error: any) => {
          ProjectImageController.handleError(response, error);
          return;
        });
      return;
    }

    ProjectImage.findAll()
      .then((result: SQLError | ProjectImageI[]) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.OK).send(result);
        return;
      })
      .catch((error: any) => {
        ProjectImageController.handleError(response, error);
        return;
      });
    return;
  };

  public create = async (request: Request, response: Response) => {
    // Validate request
    if (!request.body.project_id) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Project id is required!",
      });
      return;
    }

    if (!request.file) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Image not found or wrong mimetype!",
      });
      return;
    }

    const projectImage: ProjectImageI = {
      project_id: request.body.project_id,
      path: "/static/" + request.file.filename,
      originalName: request.file.originalname,
      uploaded: new Date(),
    };

    const projectImageObject = new ProjectImage(projectImage);
    projectImageObject
      .create()
      .then((result: any) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.CREATED).send(result);
        return;
      })
      .catch((error: any) => {
        ProjectImageController.handleError(response, error);
      });
  };

  public delete = async (request: Request, response: Response) => {
    //TODO: implement this
    response.status(StatusCodes.NOT_IMPLEMENTED).send();
    return;
  };
}
