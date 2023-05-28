import { Injectable } from '@nestjs/common';
import { removeObjectById } from '../helpers/removeObjectById';
import { ORDER_LIST } from './db';
import { IOrder } from './types';

@Injectable()
export class OrdersService {
  async getAll() {
    return ORDER_LIST;
  }

  async getOne(id: number) {
    return ORDER_LIST.find((p) => p.id === id);
  }

  async addOne(order: IOrder) {
    return ORDER_LIST.push(order);
  }

  async deleteOne(id: number) {
    removeObjectById(ORDER_LIST, id);
  }

  async updateOne(id: number, order: IOrder) {
    const existingOrder = this.getOne(id);
    if (!existingOrder) {
      return null;
    }
    const updatedOrder = Object.assign(existingOrder, order);
    await this.addOne(updatedOrder);
    return ORDER_LIST;
  }
}
