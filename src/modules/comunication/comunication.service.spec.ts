import { Test, TestingModule } from '@nestjs/testing';
import { ComunicationService } from './comunication.service';

describe('ComunicationService', () => {
  let service: ComunicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComunicationService],
    }).compile();

    service = module.get<ComunicationService>(ComunicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
