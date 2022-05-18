import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Address } from "./address.model";
import { AddressService } from "./address.service";

@Controller('address')
export class AddressController {
  constructor(private readonly addresService: AddressService){}

  @Post()
  async createAddress(@Body() newAddress: Address){
    return await this.addresService.createAddress(newAddress)
      .then(result => result)
      .catch(()=>undefined)
  }

  @Get()
  getAllAddress(){
    return this.addresService.getAllAddress();
  }

  @Put()
  async updateAddress(@Body() newAddress: Address){
    return await this.addresService.updateAddress(newAddress)
      .then(result => result)
      .catch(()=>undefined)

  }

  @Get(':id')
  getOneAddress(@Param('id')id: string){
    return this.addresService.getOneAddress(id)
  }



}
