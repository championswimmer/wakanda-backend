import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { SuperheroRepository } from './superhero.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Superhero } from './superhero.entity';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService, {
        provide: getRepositoryToken(Superhero),
        useClass: SuperheroRepository,
      }],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
