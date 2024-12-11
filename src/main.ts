import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Alta Forma')
    .setDescription('The AltaForma API description')
    .setVersion('1.0')
    .addTag('altaforma')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const configService = new ConfigService();

  await app.listen(process.env.PORT ?? configService.get('APP_PORT'));
}
bootstrap();
