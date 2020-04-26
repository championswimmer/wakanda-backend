import { Controller, Get, Inject } from '@nestjs/common';
import { SuperheroService } from './superhero.service';

@Controller('superhero')
export class SuperheroController {
  @Inject()
  private superheroService: SuperheroService;

  @Get()
  async getAll() {
    return this.superheroService.findAll();
  }
}
