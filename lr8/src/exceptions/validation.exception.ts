import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(msg: string | Record<string, any>) {
    super(msg, HttpStatus.BAD_REQUEST);
  }
}
