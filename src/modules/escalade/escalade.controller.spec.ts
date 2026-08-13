import { Test, TestingModule } from '@nestjs/testing';
import { EscaladeController } from './escalade.controller';
import { EscaladeService } from './escalade.service';

describe('EscaladeController', () => {
  let controller: EscaladeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscaladeController],
      providers: [EscaladeService],
    }).compile();

    controller = module.get<EscaladeController>(EscaladeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
