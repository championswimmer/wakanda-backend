import { Injectable } from '@nestjs/common';
import { SuperheroRepository } from './superhero.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
  @InjectRepository(Superhero)
  private superheroRepository: SuperheroRepository;

  async findAll() {
    return this.superheroRepository.find();
  }

  async create(superhero: Superhero) {
    return this.superheroRepository.save(superhero)
  }
}
