import { Router } from "express";
import multer from "multer";

import path from "path";
import { v4 as uuidv4 } from "uuid";
import { UserImageController } from "../controller/user_image.controller";

export class UserImageRouter {
  public router: Router;
  private controller: UserImageController;
  private storage: any;
  private upload: any;

  constructor() {
    this.router = Router();
    this.controller = new UserImageController();
    this.setup();
    this.routes();
  }

  public routes() {
    this.router.post("/", this.upload.single("file"), this.controller.create);
    this.router.get("/", this.controller.index);
    this.router.delete("/", this.controller.delete);
  }

  private setup() {
    this.storage = multer.diskStorage({
      destination: function (req, file, callback) {
        const path = `./files/images/profile/`;
        return callback(null, path);
      },
      filename: function (req, file, callback) {
        let name = uuidv4();
        callback(null, name + path.extname(file.originalname));
      },
    });

    this.upload = multer({ storage: this.storage });
  }
}
