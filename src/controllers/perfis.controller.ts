import { Controller, Get, Query, Req } from '@nestjs/common';
import { PerfisService } from '../services/perfis.service';

@Controller('perfis')
export class PerfisController {
  constructor(private readonly perfisService: PerfisService) {}
  @Get()
  getAll(
    @Req() request: any,
    @Query('sort') sort: string = 'descricao',
    @Query('direction') direction: string = 'desc',
  ) {
    return this.perfisService.findAll();
  }
}
