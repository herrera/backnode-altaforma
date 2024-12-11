import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatonDto } from 'src/dtos/authentication.dto';
import { LoginResponseDto } from 'src/dtos/loginResponse.dto';
import { Usuarios } from 'src/entity/usuario';

@Injectable()
export class UsuarioService {
  constructor(private jwtService: JwtService) {}
  async login(authenticationDto: AuthenticatonDto): Promise<LoginResponseDto> {
    //  validadcao token

    //atualiza ultimo acesso usuario

    // chama tokenservice, retorna token
    // le usuario
    const ret = new LoginResponseDto();
    const user = await this.pesquisaPorUsuario(authenticationDto.login);

    console.log(user);
    if (user.password !== authenticationDto.senha) {
      //      throw new UnauthorizedException();
    }

    const payload = { sub: user.login, username: user.perfis };
    ret.token = await this.jwtService.signAsync(payload);
    ret.user = authenticationDto.login;
    return ret;
  }

  async pesquisaPorUsuario(login: string): Promise<Usuarios | undefined> {
    return await Usuarios.findOneBy({ login });
  }
}
