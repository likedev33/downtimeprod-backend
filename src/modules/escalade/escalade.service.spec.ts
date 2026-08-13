import { Test, TestingModule } from '@nestjs/testing';
import { EscaladeService } from './escalade.service';

describe('EscaladeService', () => {
  let service: EscaladeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscaladeService],
    }).compile();

    service = module.get<EscaladeService>(EscaladeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
