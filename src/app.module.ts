import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ExampleModule } from './example/example.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';

@Module({
  imports: [
    UsersModule,
    ExampleModule,
    SequelizeModule.forRoot({ // The forRoot() method is used to define the configuration of the database connection and the models that should be registered in the current module.
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Abdull@h123',
      database: 'test',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
