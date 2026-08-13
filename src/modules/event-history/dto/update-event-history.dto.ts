import { PartialType } from '@nestjs/swagger';
import { CreateEventHistoryDto } from './create-event-history.dto';

export class UpdateEventHistoryDto extends PartialType(CreateEventHistoryDto) {}
