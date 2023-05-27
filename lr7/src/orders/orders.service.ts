import { Injectable } from '@nestjs/common';
import { removeObjectById } from "../helpers/removeObjectById";
import { ORDER_LIST } from "./db";
import { IOrder } from "./types";

@Injectable()
export class OrdersService {
        async getAll() {
        return ORDER_LIST;
    }

    async getOne(id: number) {
        return ORDER_LIST.find(p => p.id === id);
    }

    async addOne(product: IOrder) {
        return ORDER_LIST.push(product);
    }

    async deleteOne(id: number) {
        removeObjectById(ORDER_LIST, id);
    }

    async updateOne(id: number, product: IOrder) {
        const existingProduct = this.getOne(id);
        if (!existingProduct) {
            return null;
        }
        const updatedProduct = Object.assign(existingProduct, product);
        await this.addOne(updatedProduct);
        return ORDER_LIST;
    }
}
