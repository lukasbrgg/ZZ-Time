import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { UserImage, UserImageI } from "../model/user_image.model";
import path from "path";

export class UserImageController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        error.message ||
        "Some error occurred while performing operation on user image",
    });
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.user_id) {
      UserImage.findByUserId(request.query.user_id as string)
        .then((result: SQLError | UserImageI) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }
          response.status(StatusCodes.OK).send(result[0]);
          return;
        })
        .catch((error: any) => {
          UserImageController.handleError(response, error);
          return;
        });
      return;
    }

    UserImage.findAll()
      .then((result: SQLError | UserImageI[]) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.OK).send(result);
        return;
      })
      .catch((error: any) => {
        UserImageController.handleError(response, error);
        return;
      });
    return;
  };

  public create = async (request: Request, response: Response) => {
    // Validate request
    if (!request.body.user_id) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "User id is required!",
      });
      return;
    }

    if (!request.file) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Image not found!",
      });
      return;
    }

    const userImage: UserImageI = {
      user_id: request.body.user_id,
      path: "/static/" + request.file.filename,
      originalName: request.file.originalname,
      uploaded: new Date(),
    };

    const userImageObject = new UserImage(userImage);
    userImageObject
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
        UserImageController.handleError(response, error);
      });
  };

  public delete = async (request: Request, response: Response) => {
    //TODO: implement this
    response.status(StatusCodes.NOT_IMPLEMENTED).send();
    return;
  };
}
