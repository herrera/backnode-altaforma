import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfisController } from './controllers/perfis.controller';
import { PerfisService } from './services/perfis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/type-orm.config.service';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationController } from './controllers/authentication.controller';
import { UsuarioService } from './services/usuario.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './services/constans';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController, PerfisController, AuthenticationController],
  providers: [AppService, PerfisService, UsuarioService, JwtService],
})
export class AppModule {}
