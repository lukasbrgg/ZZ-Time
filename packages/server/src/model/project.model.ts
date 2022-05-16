import Query, { QueryI } from "../database/Database";

export interface ProjectI {
  id: string;
  name: string;
  estimated_hours: number;
  created?: Date;
  updated?: Date;
}

export class Project {
  id_: string;
  name_: string;
  estimated_hours_: number;
  created_: Date;
  updated_: Date;

  constructor(project: ProjectI) {
    this.id_ = project.id;
    this.name_ = project.name;
    this.estimated_hours_ = project.estimated_hours;
    this.created_ = project.created;
    this.updated_ = project.updated;
  }

  public static async findById(id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, name, estimated_hours, created, updated
                    FROM "project"
                    WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async getAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT id, name, estimated_hours, created, updated
                    FROM "project"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async updateById(project: ProjectI): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "project"
                    SET name            = $1,
                        estimated_hours = $2,
                        updated         = $3
                    WHERE id = $4
                    RETURNING id, name, estimated_hours, created, updated`,
      parameters: [
        project.name,
        project.estimated_hours,
        new Date(),
        project.id,
      ],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async removeById(id: string): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "project"
                    WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async removeAll(): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "project"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "project" (id, name, estimated_hours, created, updated)
                    values ($1, $2, $3, $4, $5)
                    RETURNING id, name, estimated_hours, created, updated`,
      parameters: [
        this.id_,
        this.name_,
        this.estimated_hours_,
        this.created_,
        this.updated_,
      ],
    };
    const query = new Query(params);
    return await query.execute();
  }
}
