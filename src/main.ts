import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import exphbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Set up the views directory and the Handlebars engine
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('hbs', exphbs());
  app.setViewEngine('hbs');
  await app.listen(3001);
}
bootstrap();
