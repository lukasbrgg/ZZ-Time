import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import DailyEmail from "./cron/dailyEmail";

import { StatusCodes } from "http-status-codes";
import { EMailService } from "./utils/EMailService";
import { UserRouter } from "./router/user.router";
import { ProjectRouter } from "./router/project.router";
import { UserImageRouter } from "./router/user_image.router";
import { InvestedHoursRouter } from "./router/invested_hours.router";
import { ProjectImageRouter } from "./router/project_image.router";
import { AssignedUsersRouter } from "./router/assigned_user.router";
import { AuthRouter } from "./router/auth.router";
import path from "path";

export class Server {
  private readonly app: express.Application;

  private authRouter: AuthRouter | undefined;
  private userRouter: UserRouter | undefined;
  private userImageRouter: UserImageRouter | undefined;
  private projectRouter: ProjectRouter | undefined;
  private projectImageRouter: ProjectImageRouter | undefined;
  private assignedUserRouter: AssignedUsersRouter | undefined;
  private investedHoursRouter: InvestedHoursRouter | undefined;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes().then(() => {
      console.log("Server routs are ready");
    });
  }

  public getApplication() {
    return this.app;
  }

  public configuration() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use( "/static",express.static(path.resolve(__dirname,"../files/images/profile/")));

    this.app.use(
      express.static(path.resolve(__dirname, "..", "..", "client", "dist"))
    );

    this.app.use(
      "/static",
      express.static(path.resolve(__dirname, "../files/images/profile/"))
    );

    this.app.set("port", process.env["PORT"] || 9000);
    this.app.set("env", process.env["NODE_ENV"] || "production");

    console.log("Server configuration done.");
  }

  public async routes() {
    this.app.get("/helloWorld", (req: Request, res: Response) => {
      res.status(StatusCodes.OK).send("Hello World");
    });

    this.authRouter = new AuthRouter();
    this.userRouter = new UserRouter();
    this.userImageRouter = new UserImageRouter();
    this.projectRouter = new ProjectRouter();
    this.projectImageRouter = new ProjectImageRouter();
    this.assignedUserRouter = new AssignedUsersRouter();
    this.investedHoursRouter = new InvestedHoursRouter();

    this.app.use("/v1/auth", this.authRouter.router);
    this.app.use("/v1/user", this.userRouter.router);
    this.app.use("/v1/userImage", this.userImageRouter.router);
    this.app.use("/v1/project", this.projectRouter.router);
    this.app.use("/v1/projectImage", this.projectImageRouter.router);
    this.app.use("/v1/assignedUser", this.assignedUserRouter.router);
    this.app.use("/v1/investedHours", this.investedHoursRouter.router);
  }

  public start() {
    const dailyEmail = new DailyEmail();
    this.app.listen(this.app.get("port"), () => {
      if (this.app.get("env") === "production")
        console.log(
          `Running on address: http://0.0.0.0:${this.app.get("port")}`
        );
      else if (this.app.get("env") === "development")
        console.log(
          `Running on address: http://127.0.0.1:${this.app.get(
            "port"
          )} (localhost)`
        );
    });

    const gmailService = new EMailService();
    const os = require("os");

    gmailService
      .sendMail({
        to: ["lukas.brugger404@gmail.com"],
        subject: "Server info",
        html: `<p>ZZ server wurde gerade gestartet</p><br><p>${os.hostname()}</p>`,
      })
      .then((msg: any) => {
        console.log(`sendMail result :(${msg})`);
      })
      .catch((error: any) => {
        console.log(`sendMail error :(${error})`);
      });
  }
}

const server = new Server();
server.start();

export default server;
