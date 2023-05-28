import { IProduct } from '../products/types';
import { Controller } from '../types';

export interface IOrder {
  id: number;
  products: IProduct[];
  totalPrice: number;
  totalItems: number;
}

export type IOrdersController = Controller<IOrder>;
