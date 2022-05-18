import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {

  @UseGuards(AuthGuard('local'))
  @Post("auth")
  async login(@Request() req){
    return req.user
  }

}
