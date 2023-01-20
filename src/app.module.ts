import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExampleModule } from './example/example.module';
import { EstudoModule } from './estudo/estudo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ExampleModule,
    EstudoModule
  ],
})
export class AppModule {}
