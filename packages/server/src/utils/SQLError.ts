export interface SQLErrorI {
  Error?: string;
  code?: number;
  detail?: string;
  status?: number;
  error_message?: string;
}

export default class SQLError extends Error {
  Error: string;
  code: number;
  detail: string;
  status: number;
  error_message: string;

  constructor(data: SQLErrorI) {
    super(data.Error);
    this.code = data.code;
    this.detail = data.detail;
    this.status = data.status;
    this.error_message = data.error_message;
  }
}
