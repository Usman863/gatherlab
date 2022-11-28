import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Auth')
    .setDescription('SignUp and login APIs')
    .setVersion('1.0')
    .addTag('auth')
    .addServer('http://localhost:3000')
    .addServer('http://localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000,()=>{
    console.log('server running on 3000');
    
  });
}
bootstrap();
