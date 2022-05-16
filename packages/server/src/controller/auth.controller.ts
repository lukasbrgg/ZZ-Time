import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { comparePassword } from "../utils/tools";
import { User, UserI } from "../model/user.model";

export class AuthController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(error.status).send({
      message:
        error.message ||
        "Some error occurred while performing operation on auth",
    });
    return;
  }

  public index = async (request: Request, response: Response) => {
    const { email, password } = request.query;
    if (!email || !password) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Email or Password cannot be empty!",
      });
      return;
    }
    User.findByEmailForAuth(email as string)
      .then(async (result: SQLError | UserI) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        const customer = result[0];
        if (!customer) {
          response.status(StatusCodes.NOT_FOUND).send({
            message: "User not found!",
          });
          return;
        }
        if (await comparePassword(password as string, customer.password)) {
          delete customer.password;

          await User.updateLastLogin(customer.id);

          response.status(StatusCodes.OK).send(customer);
          return;
        }

        response.status(StatusCodes.UNAUTHORIZED).send({
          message: "Email and password do not match",
        });
        return;
      })
      .catch((error: SQLError) => {
        AuthController.handleError(response, error);
      });
  };
}
