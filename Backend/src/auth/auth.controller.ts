import { Res, Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>, @Res() res: any) {
    const user = await this.authService.signIn(signInDto.username, signInDto.password);


    res
      .cookie('access_token', user.access_token, {
        httpOnly: true,
        samesite: "none",
        raw: true

      })
      .send({ message: "Signin Successfull" })

  }
}
