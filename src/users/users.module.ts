import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.model';


@Module({
  imports: [SequelizeModule.forFeature([User])], // The forFeature() method is used to define which models should be registered in the current module.
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
