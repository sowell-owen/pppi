import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { PasswordHashService } from '../customers/password.service';
import { JwtService } from '@nestjs/jwt';
import { validation } from '../customers/validation';
import { CUSTOMERS_LIST } from '../customers/db';

@Injectable()
export class AuthService {
  constructor(
    private customersService: CustomersService,
    private passwordHashService: PasswordHashService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    name: string,
    surname: string,
    email: string,
    dob: Date,
    password: string,
  ): Promise<string> {
    validation({ name, surname, email });

    const hashedPassword = await this.passwordHashService.hashPassword(
      password,
    );

    CUSTOMERS_LIST.push({
      id: CUSTOMERS_LIST.length + 1,
      lastLogin: new Date(Date.now()),
      failedLogins: 0,
      password: hashedPassword,
      name,
      surname,
      email,
      dob,
    });

    return 'Signed up';
  }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.customersService.getOne(email);
    const isCorrectPassword = await this.passwordHashService.comparePasswords(
      pass,
      user.password,
    );
    if (!isCorrectPassword) {
      await this.customersService.updateOne(email, {
        ...user,
        failedLogins: user.failedLogins + 1,
      });
      throw new UnauthorizedException();
    }

    await this.customersService.updateOne(email, {
      ...user,
      lastLogin: new Date(Date.now()),
    });

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
