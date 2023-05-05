import { HttpException } from '@nestjs/common';
import { ResponseModel } from './response-model';

export class CustomExeption extends HttpException {
  constructor(responseModel: ResponseModel) {
    super(
      {
        message: [responseModel.message],
        data: responseModel.data ?? null,
      },
      responseModel.statusCode,
    );
  }
}
