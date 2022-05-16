import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { v4 as uuidv4 } from "uuid";
import { Project, ProjectI } from "../model/project.model";
import { User } from "../model/user.model";

export class ProjectController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(error.status).send({
      message:
        error.message ||
        "Some error occurred while performing operation on project",
    });
    return;
  }

  private static async handleResult(
    response: Response,
    result: SQLError | ProjectI | ProjectI[]
  ) {
    //handle SQLErrors
    if (result instanceof SQLError) {
      console.log(result);
      response.status(result.status).send(result);
      return;
    }

    //multiple projects
    if (Array.isArray(result)) {
      const projects: ProjectI[] = result as ProjectI[];
      response.status(StatusCodes.OK).send(projects);
      return;
    }

    //single project
    const project: ProjectI = result as ProjectI;
    response.status(StatusCodes.OK).send(project);
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.id) {
      Project.findById(request.query.id as string)
        .then((result: SQLError | ProjectI | ProjectI[]) =>
          ProjectController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          ProjectController.handleError(response, error)
        );
      return;
    }

    Project.getAll()
      .then((result: SQLError | ProjectI | ProjectI[]) =>
        ProjectController.handleResult(response, result)
      )
      .catch((error: SQLError) =>
        ProjectController.handleError(response, error)
      );
  };

  public create = async (request: Request, response: Response) => {
    //check if admin is creating project
    const isAdmin = await User.checkIfAdmin(request.query.admin_id as string);
    if (isAdmin instanceof SQLError) {
      response.status(isAdmin.status).send(isAdmin);
      return;
    }

    if (isAdmin[0].count == 0) {
      response
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "Only Admins are allowed to create new projects." });
      return;
    }

    // Validate request
    if (!request.body) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Body can not be empty!",
      });
      return;
    }

    // Create a Project instance
    const project: ProjectI = {
      id: uuidv4(),
      name: request.body.name.trim(),
      estimated_hours: request.body.estimated_hours,
      created: new Date(),
      updated: new Date(),
    };
    const projectObject = new Project(project);

    // Save Project in the database
    projectObject
      .create()
      .then((result: SQLError | []) => {
        //handle MySQL errors

        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.CREATED).send(result);
        return;
      })
      .catch((error: SQLError) =>
        ProjectController.handleError(response, error)
      );
  };

  public update = async (request: Request, response: Response) => {
    const id = request.query.id;

    if (id === undefined) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "ID is required to update.",
      });
      return;
    }

    // Validate request
    if (!request.body) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Body can not be empty!",
      });
      return;
    }

    const project: ProjectI = {
      id: id as string,
      name: request.body.name.trim(),
      estimated_hours: request.body.estimated_hours,
    };
    Project.updateById(project)
      .then((result: any) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.OK).send(result);
        return;
      })
      .catch((error: SQLError) =>
        ProjectController.handleError(response, error)
      );
  };

  public delete = async (request: Request, response: Response) => {
    if (request.query.id) {
      Project.removeById(request.query.id as string)
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          ProjectController.handleError(response, error);
          return;
        });
      return;
    }

    if (request.body.key === "fd0f89ae-d84e-42eb-91b0-7ab4fc942a8c") {
      Project.removeAll()
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          ProjectController.handleError(response, error);
          return;
        });
      return;
    }

    response.status(StatusCodes.BAD_REQUEST).send({
      message: "Project ID or Developer Key is needed.",
    });
    return;
  };
}
