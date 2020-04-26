import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { SuperheroRepository } from './superhero.repository';

describe('Superhero Controller', () => {
  let controller: SuperheroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService, SuperheroRepository]
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
