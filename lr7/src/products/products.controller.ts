import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct, IProductsController } from './types';

@Controller('products')
export class ProductsController implements IProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll() {
    return await this.productsService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.productsService.getOne(Number(id));
  }

  @Post('add')
  async addOne(@Body() product: IProduct) {
    return await this.productsService.addOne(product);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.productsService.deleteOne(Number(id));
  }

  @Put('update/:id')
  async updateOne(@Param('id') id: string, @Body() newProduct: IProduct) {
    return await this.productsService.updateOne(Number(id), newProduct);
  }
}
