import { Controller } from '../types';

export interface ICustomer {
  id: number;
  name: string; // max 15 symbols
  surname: string; // max 15 symbols
  email: string;
  dob: Date;
  password: string; // hash it
  lastLogin: Date;
  failedLogins: number;
  // age: number;
}

export type ICustomersController = Omit<Controller<ICustomer>, 'addOne'>;
