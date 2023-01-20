import { Test, TestingModule } from '@nestjs/testing';
import { EstudoController } from './estudo.controller';

describe('EstudoController', () => {
  let controller: EstudoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudoController],
    }).compile();

    controller = module.get<EstudoController>(EstudoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
