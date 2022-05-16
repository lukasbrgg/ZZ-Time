import Query, { QueryI } from "../database/Database";

export interface InvestedHoursI {
  id: string;
  user_id: string;
  project_id: string;
  start_time: Date;
  end_time: Date;
  created?: Date;
  updated?: Date;
}

export class InvestedHours {
  id_: string;
  user_id_: string;
  project_id_: string;
  start_time_: Date;
  end_time_: Date;
  created_: Date;
  updated_: Date;

  constructor(assignedUser: InvestedHoursI) {
    this.id_ = assignedUser.id;
    this.user_id_ = assignedUser.user_id;
    this.project_id_ = assignedUser.project_id;
    this.start_time_ = assignedUser.start_time;
    this.end_time_ = assignedUser.end_time;
    this.created_ = assignedUser.created;
    this.updated_ = assignedUser.updated;
  }

  public static async findById(id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, user_id, project_id, start_time, end_time, created, updated
                    FROM "invested_hours"
                    WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async findByUserId(user_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, user_id, project_id, start_time, end_time, created, updated
                    FROM "invested_hours"
                    WHERE user_id = $1`,
      parameters: [user_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async findByProjectId(project_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, user_id, project_id, start_time, end_time, created, updated
                    FROM "invested_hours"
                    WHERE project_id = $1`,
      parameters: [project_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async getAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, user_id, project_id, start_time, end_time, created, updated
                    FROM "invested_hours"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async updateById(investedHours: InvestedHoursI): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "invested_hours"
                    SET start_time = $1,
                        end_time   = $2,
                        updated    = $3
                    WHERE id = $4
                    RETURNING id, user_id, project_id, start_time, end_time, created, updated`,
      parameters: [
        investedHours.start_time,
        investedHours.end_time,
        new Date(),
        investedHours.id,
      ],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async removeById(id: string): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "invested_hours"
                    WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async removeAll(): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "invested_hours"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "invested_hours" (id, user_id, project_id, start_time, end_time, created, updated)
                    values ($1, $2, $3, $4, $5, $6, $7)
                    RETURNING id, user_id, project_id, start_time, end_time, created, updated`,
      parameters: [
        this.id_,
        this.user_id_,
        this.project_id_,
        this.start_time_,
        this.end_time_,
        this.created_,
        this.updated_,
      ],
    };
    const query = new Query(params);
    return await query.execute();
  }
}
