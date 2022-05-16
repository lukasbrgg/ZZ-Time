import Query, { QueryI } from "../database/Database";

export interface UserImageI {
  user_id: string;
  path: string;
  originalName: string;
  uploaded: Date;
}

export class UserImage {
  user_id: string;
  path: string;
  originalName: string;
  uploaded: Date;

  constructor(userImage: UserImageI) {
    this.user_id = userImage.user_id;
    this.path = userImage.path;
    this.originalName = userImage.originalName;
    this.uploaded = userImage.uploaded;
  }

  public static async findByUserId(user_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT user_id, path, original_name, uploaded
                    FROM "user_image"
                    WHERE user_id = $1`,
      parameters: [user_id],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async findAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT user_id, path, original_name, uploaded
                    FROM "user_image"`,
      parameters: [],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "user_image" (user_id, path, original_name, uploaded)
                    values ($1, $2, $3, $4)
                    RETURNING user_id, path, original_name, uploaded`,
      parameters: [this.user_id, this.path, this.originalName, this.uploaded],
    };

    const db = new Query(params);
    return await db.execute();
  }
}
