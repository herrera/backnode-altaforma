import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticatonDto } from 'src/dtos/authentication.dto';
import { LoginResponseDto } from 'src/dtos/loginResponse.dto';
import { UsuarioService } from '../services/usuario.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Post('login')
  async login(
    @Body() authenticationDto: AuthenticatonDto,
  ): Promise<LoginResponseDto> {
    return this.usuarioService.login(authenticationDto);
  }
}
