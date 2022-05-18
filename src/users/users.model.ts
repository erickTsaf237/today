import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Address } from "../address/address.model";


@Table
export class Users extends Model{

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
  homeAdresseId: Address

  @ForeignKey(() => Address)
  @Column
  workAddressId: Address

  @Column
  CurrentLocation

  @Column
  Costomer_note

  @BelongsTo(() => Address)
  address: Address
}