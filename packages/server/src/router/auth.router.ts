import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

export class AuthRouter {
  public router: Router;
  private controller: AuthController;

  constructor() {
    this.router = Router();
    this.controller = new AuthController();

    this.routes();
  }

  public routes() {
    this.router.get("/", this.controller.index);
  }
}
