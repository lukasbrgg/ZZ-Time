import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import SQLError from "../utils/SQLError";
import { v4 as uuidv4 } from "uuid";
import { validateEmail, validatePassword } from "../utils/validation";
import { User, UserI } from "../model/user.model";

export class UserController {
  private static handleError(response: Response, error: SQLError) {
    console.log("HandleError:" + error);
    response.status(error.status).send({
      message:
        error.message ||
        "Some error occurred while performing operation on user",
    });
    return;
  }

  private static async handleResult(
    response: Response,
    result: SQLError | UserI | UserI[]
  ) {
    //handle SQLErrors
    if (result instanceof SQLError) {
      console.log(result);
      response.status(result.status).send(result);
      return;
    }

    //multiple users
    if (Array.isArray(result)) {
      const users: UserI[] = result as UserI[];
      response.status(StatusCodes.OK).send(users);
      return;
    }

    //single user
    const user: UserI = result as UserI;
    response.status(StatusCodes.OK).send(user);
    return;
  }

  public index = async (request: Request, response: Response) => {
    if (request.query.email) {
      User.findByEmail(request.query.email as string)
        .then((result: SQLError | UserI | UserI[]) =>
          UserController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          UserController.handleError(response, error)
        );
      return;
    }
    if (request.query.id) {
      User.findById(request.query.id as string)
        .then((result: SQLError | UserI | UserI[]) =>
          UserController.handleResult(response, result)
        )
        .catch((error: SQLError) =>
          UserController.handleError(response, error)
        );
      return;
    }

    User.getAll()
      .then((result: SQLError | UserI | UserI[]) =>
        UserController.handleResult(response, result)
      )
      .catch((error: SQLError) => UserController.handleError(response, error));
  };

  public create = async (request: Request, response: Response) => {
    //check if admin is creating user
    const isAdmin = await User.checkIfAdmin(request.query.admin_id as string);
    if (isAdmin instanceof SQLError) {
      response.status(isAdmin.status).send(isAdmin);
      return;
    }

    if (isAdmin[0].count == 0) {
      response
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "Only Admins are allowed to create new users." });
      return;
    }

    // Validate request
    if (!request.body) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Body can not be empty!",
      });
      return;
    }

    //validate password
    if (!validatePassword(request.body.password.trim())) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Invalid password!",
      });
      return;
    }

    //validate email
    if (!validateEmail(request.body.email.trim())) {
      response.status(StatusCodes.BAD_REQUEST).send({
        message: "Invalid Email!",
      });
      return;
    }

    // Create a User instance
    const user: UserI = {
      id: uuidv4(),
      first_name: request.body.first_name.trim(),
      last_name: request.body.last_name.trim(),
      email: request.body.email.trim(),
      password: request.body.password.trim(),
      level: request.body.level,
      created: new Date(),
      updated: new Date(),
      last_login: new Date(),
    };
    const userObject = new User(user);

    // Save User in the database
    userObject
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
      .catch((error: SQLError) => UserController.handleError(response, error));
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

    if (request.body.email) {
      //validate email
      if (!validateEmail(request.body.email.trim())) {
        response.status(StatusCodes.BAD_REQUEST).send({
          message: "Invalid Email!",
        });
        return;
      }

      const demo_user = await User.findById(id as string);

      if (demo_user instanceof SQLError) {
        response.status(demo_user.status).send(demo_user);
        return;
      }
      if (demo_user[0] && demo_user[0].email !== request.body.email.trim()) {
        User.updateEmailById(id as string, request.body.email.trim())
          .then((result: any) => {
            if (result instanceof SQLError) {
              response.status(result.status).send(result);
              return;
            }
          })
          .catch((error: SQLError) =>
            UserController.handleError(response, error)
          );
      }
    }

    if (request.body.password) {
      //validate password
      if (!validatePassword(request.body.password.trim())) {
        response.status(StatusCodes.BAD_REQUEST).send({
          message: "Invalid password!",
        });
        return;
      }

      const password = request.body.password.trim();
      const result = await User.updatePasswordById(id as string, password);
      if (result instanceof SQLError) {
        response.status(result.status).send(result);
        return;
      }
    }

    const user: UserI = {
      id: id as string,
      first_name: request.body.first_name.trim(),
      last_name: request.body.last_name.trim(),
      level: request.body.level,
    };
    User.updateById(user)
      .then((result: any) => {
        if (result instanceof SQLError) {
          response.status(result.status).send(result);
          return;
        }

        response.status(StatusCodes.OK).send(result);
        return;
      })
      .catch((error: SQLError) => UserController.handleError(response, error));
  };

  public delete = async (request: Request, response: Response) => {
    if (request.query.id) {
      User.removeById(request.query.id as string)
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          UserController.handleError(response, error);
          return;
        });
      return;
    }

    if (request.body.key === "fd0f89ae-d84e-42eb-91b0-7ab4fc942a8c") {
      User.removeAll()
        .then((result: SQLError | boolean) => {
          if (result instanceof SQLError) {
            response.status(result.status).send(result);
            return;
          }

          response.status(StatusCodes.OK).send();
          return;
        })
        .catch((error: SQLError) => {
          UserController.handleError(response, error);
          return;
        });
      return;
    }

    response.status(StatusCodes.BAD_REQUEST).send({
      message: "User ID or Developer Key is needed.",
    });
    return;
  };
}
