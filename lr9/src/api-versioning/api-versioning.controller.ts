import {
  Controller,
  Get,
  Header,
  Res,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiVersioningService } from './api-versioning.service';
import { AuthGuard } from '../auth/auth.guard';
import { Response } from 'express';

// @note auth guard is already provided for all routes, check `auth/auth.module.ts` file
// in order to keep route public we use @Public decorator see `products/products.controller.ts` for usage example
@Controller('api-versioning')
export class ApiVersioningController {
  constructor(private readonly apiVersioningService: ApiVersioningService) {}

  // for example, I'll use another guard for specific route only
  @UseGuards(AuthGuard)
  @Version('1')
  @Get('/get')
  @Header('Deprecation', 'true')
  async getV1() {
    return await this.apiVersioningService.get();
  }

  @UseGuards(AuthGuard)
  @Version('2')
  @Get('/get')
  async getV2() {
    return await this.apiVersioningService.getV2();
  }

  @UseGuards(AuthGuard)
  @Version('3')
  @Get('/get')
  async getV3(@Res() res: Response) {
    const excelBuffer = await this.apiVersioningService.getV3();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=example.xlsx');
    res.send(excelBuffer);
  }
}
