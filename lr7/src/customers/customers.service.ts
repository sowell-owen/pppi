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
        const existingProduct = this.getOne(id);
        if (!existingProduct) {
            return null;
        }
        const updatedProduct = Object.assign(existingProduct, customer);
        await this.addOne(updatedProduct);
        return CUSTOMERS_LIST;
    }
}
