import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "../users/users.model";
import { AddressController } from "./address.controller";

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [AddressService],
  exports: [AddressController]
})
export class AddressModule {}
