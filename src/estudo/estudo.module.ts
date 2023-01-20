import { Module } from '@nestjs/common';
import { EstudoController } from './estudo.controller';

@Module({
  controllers: [EstudoController]
})
export class EstudoModule {}
