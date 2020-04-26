import { Injectable } from '@nestjs/common';
import { SuperheroRepository } from './superhero.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(Superhero)
    private superheroRepository: SuperheroRepository
  ) {}
}
