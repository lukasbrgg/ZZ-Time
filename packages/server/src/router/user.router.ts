import { Router } from "express";
import { UserController } from "../controller/user.controller";

export class UserRouter {
  public router: Router;
  private controller: UserController;

  constructor() {
    this.router = Router();
    this.controller = new UserController();

    this.routes();
  }

  public routes() {
    this.router.put("/", this.controller.update);
    this.router.post("/", this.controller.create);
    this.router.get("/", this.controller.index);
    this.router.delete("/", this.controller.delete);
  }
}
