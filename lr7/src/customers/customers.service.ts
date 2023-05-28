import { Injectable } from '@nestjs/common';
import { removeObjectById } from "../helpers/removeObjectById";
import { ICustomer } from "./types";
import { CUSTOMERS_LIST } from "./db";

@Injectable()
export class CustomersService {
        async getAll() {
        return CUSTOMERS_LIST;
    }

    async getOne(id: number) {
        return CUSTOMERS_LIST.find(p => p.id === id);
    }

    async addOne(customer: ICustomer) {
        return CUSTOMERS_LIST.push(customer);
    }

    async deleteOne(id: number) {
        removeObjectById(CUSTOMERS_LIST, id);
    }

    async updateOne(id: number, customer: ICustomer) {
        const existingCustomers = this.getOne(id);
        if (!existingCustomers) {
            return null;
        }
        const updatedCustomers = Object.assign(existingCustomers, customer);
        await this.addOne(updatedCustomers);
        return CUSTOMERS_LIST;
    }
}
