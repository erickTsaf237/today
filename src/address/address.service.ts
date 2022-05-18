import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Address } from "./address.model";

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address)
    private userModel: typeof Address,
  ) {}

}
