import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { User} from "./users/users.model"
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
import { Address } from "./address/address.model";

@Module({
  imports: [UsersModule, AuthModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    models: [User, Address],
    synchronize: true,
    autoLoadModels: true,
  }), AddressModule,],
  controllers: [AppController, AddressController],
  providers: [AppService],
})
export class AppModule {}
