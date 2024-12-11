import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Perfis } from 'src/entity/perfis';
import { Usuarios } from 'src/entity/usuario';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: await this.configService.get('DB_HOST'),
      port: await this.configService.get('DB_PORT'),
      username: await this.configService.get('DB_USER'),
      password: await this.configService.get('DB_PASS'),
      database: await this.configService.get('DB_DATABASE'),
      autoLoadEntities: true,
      entities: [Perfis, Usuarios],
      synchronize: false,
      logging: (await this.configService.get('DB_LOGGING')) || false,
    };
  }
}
