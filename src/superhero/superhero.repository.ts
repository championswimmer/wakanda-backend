import { EntityRepository, Repository } from 'typeorm';
import { Superhero } from './superhero.entity';

@EntityRepository(Superhero)
export class SuperheroRepository extends Repository<Superhero> {
}