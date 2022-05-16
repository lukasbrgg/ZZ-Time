import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { AssignedUser, AssignedUserI } from "../model/assigned_user.model";

export class AssignedUserController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(error.status).send({
      message:
        error.message ||
        "Some error occurred while performing operation on assigned users",
    });
    return;
  }

  private static async handleResult(
    response: Response,
    result: SQLError | AssignedUserI | AssignedUserI[]
  ) {
    //handle SQLErrors
    if (result instanceof SQLError) {
      console.log(result);
      response.status(result.status).send(result);
      return;
    }

    //multiple assigned users
    if (Array.isArray(result)) {
      const assigned_users: AssignedUserI[] = result as AssignedUserI[];
      response.status(StatusCodes.OK).send(assigned_users);
      return;
    }

    //single assigned_user
    const assigned_user: AssignedUserI = result as AssignedUserI;
    response.status(StatusCodes.OK).send(assigned_user);
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.user_id) {
      AssignedUser.findByUserId(request.query.user_id as string)
        .then((result: SQLError | AssignedUserI | AssignedUserI[]) =>
          AssignedUserController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          AssignedUserController.handleError(response, error)
        );
      return;
    }

    if (request.query.project_id) {
      AssignedUser.findByProjectId(request.query.project_id as string)
        .then((result: SQLError | AssignedUserI | AssignedUserI[]) =>
          AssignedUserController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          AssignedUserController.handleError(response, error)
        );
      return;
    }

    AssignedUser.getAll()
      .then((result: SQLError | AssignedUserI | AssignedUserI[]) =>
        AssignedUserController.handleResult(response, result)
      )
      .catch((error: SQLError) =>
        AssignedUserController.handleError(response, error)
      );
  };

  public create = async (request: Request, response: Response) => {
    // Validate request
    if (!request.body) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Body can not be empty!",
      });
      return;
    }

    // Create a AssignedUser instance
    const assignedUser: AssignedUserI = {
      user_id: request.body.user_id.trim(),
      project_id: request.body.project_id.trim(),
      created: new Date(),
      updated: new Date(),
    };
    const assignedUserObject = new AssignedUser(assignedUser);

    // Save AssignedUser in the database
    assignedUserObject
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
        AssignedUserController.handleError(response, error)
      );
  };

  public delete = async (request: Request, response: Response) => {
    if (request.query.user_id && request.query.project_id) {
      AssignedUser.removeByUserIdAndProjectId(
        request.query.user_id as string,
        request.query.project_id as string
      )
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          AssignedUserController.handleError(response, error);
          return;
        });
      return;
    }

    if (request.body.key === "fd0f89ae-d84e-42eb-91b0-7ab4fc942a8c") {
      AssignedUser.removeAll()
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          AssignedUserController.handleError(response, error);
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
