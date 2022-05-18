import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { AddressController } from "./address.controller";
import { Address } from "./address.model";

@Module({
  imports: [SequelizeModule.forFeature([Address])],
  providers: [AddressService],
  exports: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
