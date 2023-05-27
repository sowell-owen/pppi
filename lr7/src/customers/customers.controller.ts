import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ICustomer, ICustomersController } from "./types";

@Controller('customers')
export class CustomersController implements ICustomersController {
    constructor(private readonly customersService: CustomersService) {
    }

    @Get()
    async getAll() {
        return await this.customersService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.customersService.getOne(Number(id));
    }

    @Post('add')
    async addOne(@Body() customer: ICustomer) {
        return await this.customersService.addOne(customer);
    }

    @Delete('delete/:id')
    async deleteOne(@Param('id') id: string) {
        return await this.customersService.deleteOne(Number(id));
    }

    @Put('update/:id')
    async updateOne(@Param('id') id: string, @Body() customer: ICustomer) {
        return await this.customersService.updateOne(Number(id), customer);
    }

}
