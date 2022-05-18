import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Address } from "../address/address.model";


@Table
export class User extends Model{

  @Column
  email: string

  @Column
  password: string

  @Column
  username: string

  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  phoneNumber: number

  @Column
  photo: string


  @ForeignKey(() => Address)
  @Column
  homeAdresseId:number

  @ForeignKey(() => Address)
  @Column
  workAddressId: number

  @ForeignKey(() => Address)
  @Column
  CurrentLocation: number

  @Column
  Costomer_note: string

  @BelongsTo(()=>Address)
  address: Address

}