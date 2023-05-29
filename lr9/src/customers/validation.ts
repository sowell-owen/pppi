import { ICustomer } from './types';
import { ValidationException } from '../exceptions/validation.exception';

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email: string): boolean => {
  return re.test(email);
};

export const validation = (customer: ICustomer | Partial<ICustomer>) => {
  if (customer?.name.length > 15 || customer?.surname.length > 15)
    throw new ValidationException(
      'Customer name/surname must be shorter than 15 characters',
    );
  if (!validateEmail(customer?.email))
    throw new ValidationException('Invalid email');
};
