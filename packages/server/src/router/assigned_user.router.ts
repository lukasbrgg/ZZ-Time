import { Router } from "express";
import { AssignedUserController } from "../controller/assigned_user.controller";

export class AssignedUsersRouter {
  public router: Router;
  private controller: AssignedUserController;

  constructor() {
    this.router = Router();
    this.controller = new AssignedUserController();

    this.routes();
  }

  public routes() {
    this.router.post("/", this.controller.create);
    this.router.get("/", this.controller.index);
    this.router.delete("/", this.controller.delete);
  }
}
