import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Address } from "./address.model";

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address)
    private addressModel: typeof Address,
  ) {}

  createAddress(newAddress: Address):Promise<Address|undefined>{
    console.log (newAddress)
    // @ts-ignore
    return this.addressModel.create(newAddress)
  }

  getAllAddress() {
    return this.addressModel.findAll()
  }
  getOneAddress(id: string) {
    return this.addressModel.findByPk(id)
  }

  updateAddress(updatedAddress: Address) {
    let id = updatedAddress.id
    return this.addressModel.update(updatedAddress, {where:{id}})
      .then(result =>{
        if (result instanceof Address)
          return this.addressModel.findByPk(id)
        else
          return undefined
      })
  }
}
