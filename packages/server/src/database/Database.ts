import { Pool } from "pg";
import SQLError, { SQLErrorI } from "../utils/SQLError";
import { StatusCodes } from "http-status-codes";

require("dotenv").config();

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
});

export interface QueryI {
  query: string;
  parameters?: any | null;
}

export default class Query {
  query: string;
  parameters?: any | null;

  constructor(query: QueryI) {
    this.query = query.query;
    this.parameters = query.parameters;
  }

  public async execute(): Promise<any> {
    const result = await pool
      .query(this.query, this.parameters)
      .then(this.handleResult)
      .catch(this.handleError);

    if (result.code) {
      let error: SQLErrorI = {
        Error: result,
        code: result.code,
        detail: result.detail,
      };

      switch (result.code) {
        case "3D000":
          error.status = StatusCodes.INTERNAL_SERVER_ERROR;
          error.error_message = "Database does not exist.";
          break;

        case "23505":
          error.status = StatusCodes.CONFLICT;
          error.error_message = "Account with the given email already exists.";
          break;

        case "42601":
          console.log(result);
          error.status = StatusCodes.INTERNAL_SERVER_ERROR;
          error.error_message = "Syntax error in SQL query.";
          break;

        default:
          error.status = StatusCodes.INTERNAL_SERVER_ERROR;
          break;
      }
      //console.log(result)

      return new SQLError(error);
    }

    if (result.command == "DELETE") {
      if (result.rowCount === 0) {
        const error: SQLErrorI = {
          status: StatusCodes.NOT_FOUND,
          error_message: "Given ID or nothing to DELETE found.",
        };
        return new SQLError(error);
      }

      if (result.rowCount >= 1) {
        return true;
      }
    }

    return result.rows;
  }

  private handleResult(result: any) {
    return new Promise<any>((resolve) => resolve(result));
  }

  private handleError(error: any) {
    console.log(error)
    return new Promise<any>(function (reject) {
      reject(new SQLError(error as SQLErrorI));
    });
  }
}
