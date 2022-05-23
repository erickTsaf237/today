import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
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

  @Get()
  getAllUsers(){
      return this.userService.getAllUsers()
  }

  @Put()
  async updateUser(@Body() updatedUdser: User){
    return await this.userService.updateUser(updatedUdser)
  }

  @Delete('id')
  deleteUser(@Param('id')id: string){
    return this.userService.deleteUser(id)
  }


}
