import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { IOrder, IOrdersController } from "./types";

@Controller('orders')
export class OrdersController implements IOrdersController{
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAll() {
    return await this.ordersService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.ordersService.getOne(Number(id));
  }

  @Post('add')
  async addOne(@Body() order: IOrder) {
    return await this.ordersService.addOne(order);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.ordersService.deleteOne(Number(id));
  }

  @Put('update/:id')
  async updateOne(@Param('id') id: string, @Body() newOrder: IOrder) {
    return await this.ordersService.updateOne(Number(id), newOrder);
  }
}
