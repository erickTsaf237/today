import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'
import { User } from "./users.model";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req){
    console.log("req.usersss")
    return req.user
  }


  @Post()
  createUser(@Body() newUser: User){
    return this.userService.createUser(newUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.userService.findOne(id)
  }

}
