import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { SuperheroService } from './superhero/superhero.service';
import { SuperheroController } from './superhero/superhero.controller';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blackpanther',
      password: 'wakandaforever',
      database: 'wakandadb',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    })
  }), SuperheroModule],
  controllers: [AppController, SuperheroController],
  providers: [AppService, SuperheroService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
