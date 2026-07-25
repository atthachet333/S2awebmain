/** Error ที่ควบคุมได้ พร้อม HTTP status สำหรับส่งให้ error handler กลาง */
export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors?: Record<string, string[]>;

  constructor(statusCode: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static badRequest(message: string, errors?: Record<string, string[]>) {
    return new ApiError(400, message, errors);
  }

  static notFound(message = 'ไม่พบข้อมูลที่ร้องขอ') {
    return new ApiError(404, message);
  }
}
