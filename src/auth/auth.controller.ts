import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { AuthGaurd } from './auth.gaurd';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signin(@Body() signinDto: SigninDto) {
        return this.authService.signIn(signinDto.username, signinDto.password);
    }

   @UseGuards(AuthGaurd)
   @Get('profile')
   async getProfile(@Request() req) {
    console.log(`received request ${JSON.stringify(req.body)}`)
    return req.user;
   } 

}
