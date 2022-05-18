import { Column, Model, Table } from "sequelize-typescript";


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
}