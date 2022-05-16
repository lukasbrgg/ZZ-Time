import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { InvestedHours, InvestedHoursI } from "../model/invested_hours.model";
import { v4 as uuidv4 } from "uuid";

export class InvestedHoursController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(error.status).send({
      message:
        error.message ||
        "Some error occurred while performing operation on invested hours",
    });
    return;
  }

  private static async handleResult(
    response: Response,
    result: SQLError | InvestedHoursI | InvestedHoursI[]
  ) {
    //handle SQLErrors
    if (result instanceof SQLError) {
      console.log(result);
      response.status(result.status).send(result);
      return;
    }

    //multiple invested hours
    if (Array.isArray(result)) {
      const invested_hours: InvestedHoursI[] = result as InvestedHoursI[];
      response.status(StatusCodes.OK).send(invested_hours);
      return;
    }

    //single invested_hours
    const invested_hours: InvestedHoursI = result as InvestedHoursI;
    response.status(StatusCodes.OK).send(invested_hours);
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.id) {
      InvestedHours.findById(request.query.id as string)
        .then((result: SQLError | InvestedHoursI | InvestedHoursI[]) =>
          InvestedHoursController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          InvestedHoursController.handleError(response, error)
        );
      return;
    }

    if (request.query.user_id) {
      InvestedHours.findByUserId(request.query.user_id as string)
        .then((result: SQLError | InvestedHoursI | InvestedHoursI[]) =>
          InvestedHoursController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          InvestedHoursController.handleError(response, error)
        );
      return;
    }

    if (request.query.project_id) {
      InvestedHours.findByProjectId(request.query.project_id as string)
        .then((result: SQLError | InvestedHoursI | InvestedHoursI[]) =>
          InvestedHoursController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          InvestedHoursController.handleError(response, error)
        );
      return;
    }

    InvestedHours.getAll()
      .then((result: SQLError | InvestedHoursI | InvestedHoursI[]) =>
        InvestedHoursController.handleResult(response, result)
      )
      .catch((error: SQLError) =>
        InvestedHoursController.handleError(response, error)
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

    // Create a InvestedHours instance
    const investedHours: InvestedHoursI = {
      id: uuidv4(),
      user_id: request.body.user_id.trim(),
      project_id: request.body.project_id.trim(),
      start_time: request.body.start_time.trim(),
      end_time: request.body.end_time.trim(),
      created: new Date(),
      updated: new Date(),
    };
    const investedHoursObject = new InvestedHours(investedHours);

    // Save InvestedHours in the database
    investedHoursObject
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
        InvestedHoursController.handleError(response, error)
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

    const investedHours: InvestedHoursI = {
      id: id as string,
      user_id: request.body.user_id.trim(),
      project_id: request.body.project_id.trim(),
      start_time: request.body.start_time,
      end_time: request.body.end_time,
    };
    InvestedHours.updateById(investedHours)
      .then((result: any) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }
        response.status(StatusCodes.OK).send(result);
        return;
      })
      .catch((error: SQLError) =>
        InvestedHoursController.handleError(response, error)
      );
  };

  public delete = async (request: Request, response: Response) => {
    if (request.query.id) {
      InvestedHours.removeById(request.query.id as string)
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          InvestedHoursController.handleError(response, error);
          return;
        });
      return;
    }

    if (request.body.key === "fd0f89ae-d84e-42eb-91b0-7ab4fc942a8c") {
      InvestedHours.removeAll()
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          InvestedHoursController.handleError(response, error);
          return;
        });
      return;
    }

    response.status(StatusCodes.BAD_REQUEST).send({
      message: "ID or Developer Key is needed.",
    });
    return;
  };
}
