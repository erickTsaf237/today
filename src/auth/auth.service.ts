import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User } from "../users/users.model";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any| undefined> {
    const user = await this.usersService.findOne(username);
    console.log(user.password +"   "+ pass)
    if (user && user.password === pass) {
      console.log(user)
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }
}
