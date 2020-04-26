import { Module } from '@nestjs/common';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperheroRepository } from './superhero.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SuperheroRepository])],
  controllers: [SuperheroController],
  providers: [SuperheroService]
})
export class SuperheroModule {}
