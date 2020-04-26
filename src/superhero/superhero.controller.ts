import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';

@Controller('superhero')
export class SuperheroController {
  @Inject()
  private superheroService: SuperheroService;

  @Get()
  async getAll() {
    return this.superheroService.findAll();
  }

  @Post()
  async create(@Body() superhero: Superhero) {
    return this.superheroService.create(superhero)
  }
}
