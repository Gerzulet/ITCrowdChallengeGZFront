import { Res, Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service';
import { userDto } from 'src/users/dto/userDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: userDto, @Res({ passthrough: true }) res: any) {
    const user = await this.authService.signIn(signInDto.username, signInDto.password);


    res
      .cookie('access_token', user.access_token, {
        httpOnly: true,
        samesite: "none",
        raw: true,
        secure: true,
        maxAge: 1800

      })
      .send({ message: "Signin Successfull" })

  }
}
