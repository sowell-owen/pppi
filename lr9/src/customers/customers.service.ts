import { Injectable } from '@nestjs/common';
import { removeObjectById } from '../helpers/removeObjectById';
import { ICustomer } from './types';
import { CUSTOMERS_LIST } from './db';
import { validation } from './validation';
import { PasswordHashService } from './password.service';

@Injectable()
export class CustomersService {
  constructor(private readonly passwordHashService: PasswordHashService) {}
  async getAll() {
    return CUSTOMERS_LIST;
  }

  async getOne(email: string) {
    return CUSTOMERS_LIST.find((p) => p.email === email);
  }

  async addOne(customer: ICustomer) {
    validation(customer);

    const hashedPassword = await this.passwordHashService.hashPassword(
      customer.password,
    );
    return CUSTOMERS_LIST.push({ ...customer, password: hashedPassword });
  }

  async deleteOne(id: number) {
    removeObjectById(CUSTOMERS_LIST, id);
  }

  async updateOne(email: string, customer: ICustomer) {
    validation(customer);

    const existingCustomer = this.getOne(email);
    if (!existingCustomer) {
      return null;
    }
    const updatedCustomer = Object.assign(existingCustomer, customer);
    await this.addOne(updatedCustomer);
    return CUSTOMERS_LIST;
  }
}
