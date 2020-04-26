import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  console.log(global.NODE_ENV)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
