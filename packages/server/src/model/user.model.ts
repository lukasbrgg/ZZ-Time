import Query, { QueryI } from "../database/Database";

export interface UserI {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  password?: string;
  level?: number;
  created?: Date;
  updated?: Date;
  last_login?: Date;

  email_verified?: boolean;
}

export class User {
  id_: string;
  first_name_: string;
  last_name_: string;
  email_: string;
  password_: string;
  level_: number;
  created_: Date;
  updated_: Date;
  last_login_: Date;

  constructor(user: UserI) {
    this.id_ = user.id;
    this.first_name_ = user.first_name;
    this.last_name_ = user.last_name;
    this.email_ = user.email;
    this.password_ = user.password;
    this.level_ = user.level;
    this.created_ = user.created;
    this.updated_ = user.updated;
    this.last_login_ = user.last_login;
  }

  public static async findById(id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id,
                        first_name,
                        last_name,
                        email,
                        level,
                        created,
                        updated,
                        last_login
                 FROM "user"
                 WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async findByEmail(email: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id,
                        first_name,
                        last_name,
                        email,
                        level,
                        created,
                        updated,
                        last_login
                 FROM "user"
                 WHERE email = $1`,
      parameters: [email],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async findByEmailForAuth(email: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT id,
                        first_name,
                        last_name,
                        email,
                        password,
                        level,
                        created,
                        updated,
                        last_login
                 FROM "user"
                 WHERE email = $1`,
      parameters: [email],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async getAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT id,
                        first_name,
                        last_name,
                        email,
                        level,
                        created,
                        updated,
                        last_login
                 FROM "user"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async updateById(user: UserI): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "user"
                 SET first_name = $1,
                     last_name  = $2,
                     level      = $3,
                     updated    = $4
                 WHERE id = $5 RETURNING id, first_name, last_name, email, level, created, updated, last_login`,

      parameters: [
        user.first_name,
        user.last_name,
        user.level,
        new Date(),
        user.id,
      ],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async updatePasswordById(
    id: string,
    password: string
  ): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "user"
                    SET password = $1,
                        updated  = $2
                    WHERE id = $3`,
      parameters: [password, new Date(), id],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async updateEmailById(id: string, email: string): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "user"
                    SET email   = $1,
                        updated = $2
                    WHERE id = $3`,
      parameters: [email, new Date(), id],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async removeById(id: string): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "user"
                    WHERE id = $1`,
      parameters: [id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async removeAll(): Promise<any> {
    const params: QueryI = {
      query: `DELETE
                    FROM "user"`,
      parameters: [],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async checkIfAdmin(user_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT count(*)
                 FROM "user"
                 WHERE id = $1
                   AND level = 1`,
      parameters: [user_id],
    };

    const query = new Query(params);
    return await query.execute();
  }

  public static async updateLastLogin(id: string): Promise<any> {
    const params: QueryI = {
      query: `UPDATE "user"
                    SET updated = $1
                    WHERE id = $2`,
      parameters: [new Date(), id],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "user" (id, first_name, last_name, email, password, level, created, updated, last_login)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
                         $9) RETURNING id, first_name, last_name, email, level, created, updated, last_login`,
      parameters: [
        this.id_,
        this.first_name_,
        this.last_name_,
        this.email_,
        this.password_,
        this.level_,
        this.created_,
        this.updated_,
        this.last_login_,
      ],
    };

    const query = new Query(params);
    return await query.execute();
  }
}
