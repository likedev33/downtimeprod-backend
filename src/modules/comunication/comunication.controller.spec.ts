import { Test, TestingModule } from '@nestjs/testing';
import { ComunicationController } from './comunication.controller';
import { ComunicationService } from './comunication.service';

describe('ComunicationController', () => {
  let controller: ComunicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComunicationController],
      providers: [ComunicationService],
    }).compile();

    controller = module.get<ComunicationController>(ComunicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
