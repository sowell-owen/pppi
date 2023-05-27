import { Controller } from "../types";

export interface ICustomer {
    id: number;
    name: string;
    age: number;
}

export type ICustomersController = Controller<ICustomer>;