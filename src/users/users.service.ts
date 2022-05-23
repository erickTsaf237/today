import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Address } from "../address/address.model";


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(username: string):Promise<User | undefined>{
    return this.userModel.findOne({ include: [Address], where: { username }, })
  }

  createUser(newUser: User){
    // @ts-ignore
    return this.userModel.create<User>(newUser)
  }

  async updateUser(updatedUser: User){
    let id =updatedUser.id
    return await this.userModel.findByPk(id)
      .then(async (result) => {
        if (result instanceof User) {
          return await this.userModel.update(updatedUser, { where: { id } })
            .then((r) => {
              console.log(result)
              return this.userModel.findByPk(id)
            })
            .catch((error) => {
              throw error
            })
        }
        return undefined
      })
      .catch()
  }

  async deleteUser(id: string){
    return await this.userModel.findByPk(id)
      .then(async(result) => {
        if (result instanceof User){
          return await this.userModel.destroy({ where: { id } })
            .then(()=>result)
            .catch()
        }
      })
      .catch(error => {
        throw error;
      })

  }

  getAllUsers(){
    return this.userModel.findAll()
  }
}
