import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não declaradas no DTO
      forbidNonWhitelisted: true, // Retorna erro para propriedades não declaradas
      transform: true, // Transforma os dados para o tipo esperado no DTO
    }),
  );

    const config = new DocumentBuilder()
    .setTitle('Workshop de Design Patterns')
    .setDescription('Documentação da API de Design Patterns')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // acessível em /docs
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
