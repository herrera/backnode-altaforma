import { Injectable } from '@nestjs/common';
import { PerfilDto } from '../dtos/perfis.dto';
import { Perfis } from 'src/entity/perfis';

@Injectable()
export class PerfisService {
  private perfis: PerfilDto[] = [new PerfilDto()];

  async findAll() {
    const allRegs = await Perfis.find();
    return allRegs;
  }
}
