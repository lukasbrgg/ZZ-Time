import Query, { QueryI } from "../database/Database";

export interface ProjectImageI {
  project_id: string;
  path: string;
  originalName: string;
  uploaded: Date;
}

export class ProjectImage {
  project_id: string;
  path: string;
  originalName: string;
  uploaded: Date;

  constructor(projectImage: ProjectImageI) {
    this.project_id = projectImage.project_id;
    this.path = projectImage.path;
    this.originalName = projectImage.originalName;
    this.uploaded = projectImage.uploaded;
  }

  public static async findByProjectId(project_id: string): Promise<any> {
    const params: QueryI = {
      query: `SELECT project_id, path, original_name, uploaded
              FROM "project_image"
              WHERE project_id = $1`,
      parameters: [project_id],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public static async findAll(): Promise<any> {
    const params: QueryI = {
      query: `SELECT project_id, path, original_name, uploaded
              FROM "project_image"`,
      parameters: [],
    };

    const db = new Query(params);
    return await db.execute();
  }

  public async create(): Promise<any> {
    const params: QueryI = {
      query: `INSERT INTO "project_image" (project_id, path, original_name, uploaded)
              values ($1, $2, $3, $4)
              RETURNING project_id, path, original_name, uploaded`,
      parameters: [
        this.project_id,
        this.path,
        this.originalName,
        this.uploaded,
      ],
    };

    const db = new Query(params);
    return await db.execute();
  }
}
