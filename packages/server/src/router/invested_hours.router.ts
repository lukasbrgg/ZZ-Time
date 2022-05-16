import { Router } from "express";
import { InvestedHoursController } from "../controller/invested_hours.controller";

export class InvestedHoursRouter {
  public router: Router;
  private controller: InvestedHoursController;

  constructor() {
    this.router = Router();
    this.controller = new InvestedHoursController();

    this.routes();
  }

  public routes() {
    this.router.put("/", this.controller.update);
    this.router.post("/", this.controller.create);
    this.router.get("/", this.controller.index);
    this.router.delete("/", this.controller.delete);
  }
}
