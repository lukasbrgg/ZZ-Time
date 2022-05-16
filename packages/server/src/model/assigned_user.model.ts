import Query, { QueryI } from "../database/Database";

export interface AssignedUserI {
  user_id: string;
  project_id: string;
  created: Date;
  updated: Date;
}

export class AssignedUser {
  user_id_: string;
  project_id_: string;
  created_: Date;
  updated_: Date;

  constructor(assignedUser: AssignedUserI) {
    this.user_id_ = assignedUser.user_id;
    this.project_id_ = assignedUser.project_id;
    this.created_ = assignedUser.created;
    this.updated_ = assignedUser.updated;
  }

  public static async findByUserId(user_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT user_id, project_id, created, updated
                    FROM "assigned_user"
                    WHERE user_id = $1`,
      parameters: [user_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async findByProjectId(project_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT user_id, project_id, created, updated
                    FROM "assigned_user"
                    WHERE project_id = $1`,
      parameters: [project_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async getAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT user_id, project_id, created, updated
                    FROM "assigned_user"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async removeByUserIdAndProjectId(
    user_id: string,
    project_id: string
  ): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "assigned_user"
                    WHERE user_id = $1
                      and project_id = $2`,
      parameters: [user_id, project_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async removeAll(): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "assigned_user"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "assigned_user" (user_id, project_id, created, updated)
                    values ($1, $2, $3, $4)
                    RETURNING user_id, project_id, created, updated`,
      parameters: [
        this.user_id_,
        this.project_id_,
        this.created_,
        this.updated_,
      ],
    };
    const query = new Query(params);
    return await query.execute();
  }
}
