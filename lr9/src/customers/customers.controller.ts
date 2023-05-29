import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ICustomer, ICustomersController } from './types';

@Controller('customers')
export class CustomersController implements ICustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async getAll() {
    return await this.customersService.getAll();
  }

  @Get(':email')
  async getOne(@Param('email') email: string) {
    return await this.customersService.getOne(email);
  }

  @Delete('delete/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.customersService.deleteOne(Number(id));
  }

  @Put('update/:email')
  async updateOne(@Param('email') email: string, @Body() customer: ICustomer) {
    return await this.customersService.updateOne(email, customer);
  }
}
