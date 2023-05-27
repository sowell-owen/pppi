import { Injectable } from '@nestjs/common';
import { removeObjectById } from "../helpers/removeObjectById";
import { IProduct } from "./types";
import {PRODUCT_LIST} from './db'


@Injectable()
export class ProductsService {
    async getAll() {
        return PRODUCT_LIST;
    }

    async getOne(id: number) {
        return PRODUCT_LIST.find(p => p.id === id);
    }

    async addOne(product: IProduct) {
        return PRODUCT_LIST.push(product);
    }

    async deleteOne(id: number) {
        removeObjectById(PRODUCT_LIST, id);
    }

    async updateOne(id: number, product: IProduct) {
        const existingProduct = this.getOne(id);
        if (!existingProduct) {
            return null;
        }
        const updatedProduct = Object.assign(existingProduct, product);
        await this.addOne(updatedProduct);
        return PRODUCT_LIST;
    }
}
