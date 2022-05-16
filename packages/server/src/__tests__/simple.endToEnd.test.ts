import { StatusCodes } from "http-status-codes";
import request from "supertest";

import server from "../index";

describe("GET /helloWorld - a simple api endpoint", async () => {
  it("Hello API Request", async () => {
    request(server.getApplication)
      .get("/helloWorld")
      .then((result) => {
        expect(result.text).toEqual("Hello World");
        expect(result.statusCode).toEqual(StatusCodes.OK);
      });
  });
});
