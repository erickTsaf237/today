import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Address } from "../address/address.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(email: string):Promise<User | undefined>{
    return this.userModel.findOne({ include: [Address], where: { email }, })
  }
}
