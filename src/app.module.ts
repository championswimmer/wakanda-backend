import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SuperheroModule } from './superhero/superhero.module';
import { Superhero } from './superhero/superhero.entity';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blackpanther',
      password: 'wakandaforever',
      database: 'wakandadb',
      entities: [Superhero],
      synchronize: true,
      autoLoadEntities: true,
    }),
  }), SuperheroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  @Inject()
  private connection: Connection
}
