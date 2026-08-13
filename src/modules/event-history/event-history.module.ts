import { Module } from '@nestjs/common';
import { EventHistoryService } from './event-history.service';
import { EventHistoryController } from './event-history.controller';

@Module({
  controllers: [EventHistoryController],
  providers: [EventHistoryService],
})
export class EventHistoryModule {}
