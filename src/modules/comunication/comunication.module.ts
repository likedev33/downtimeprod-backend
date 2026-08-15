import { Module } from '@nestjs/common';
import { ComunicationService } from './comunication.service';
import { ComunicationController } from './comunication.controller';

@Module({
  controllers: [ComunicationController],
  providers: [ComunicationService],
})
export class ComunicationModule {}
