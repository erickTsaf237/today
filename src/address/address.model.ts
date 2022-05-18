import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";


@Table
export class Address extends Model{
  @Column
  city: string

  @Column
  county: string

  @Column
  latitude: number

  @Column
  longitude: Number

  @Column
  googleName: string

  @Column
  state: string

  @Column
  street: string

  @HasMany(() => User)
  user: User[]
}