import { Module } from '@nestjs/common';
import { EscaladeService } from './escalade.service';
import { EscaladeController } from './escalade.controller';

@Module({
  controllers: [EscaladeController],
  providers: [EscaladeService],
})
export class EscaladeModule {}
