import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() email: string, pass: string) {
    return await this.authService.signIn(email, pass);
  }
  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(
    @Body() name: string,
    surname: string,
    email: string,
    dob: Date,
    password: string,
  ) {
    return await this.authService.signUp(name, surname, email, dob, password);
  }
}
