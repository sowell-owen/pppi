import { Controller } from "../types";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
}

export type IProductsController = Controller<IProduct>;