import { Router } from "express";
import { ProjectController } from "../controller/project.controller";

export class ProjectRouter {
  public router: Router;
  private controller: ProjectController;

  constructor() {
    this.router = Router();
    this.controller = new ProjectController();

    this.routes();
  }

  public routes() {
    this.router.put("/", this.controller.update);
    this.router.post("/", this.controller.create);
    this.router.get("/", this.controller.index);
    this.router.delete("/", this.controller.delete);
  }
}
