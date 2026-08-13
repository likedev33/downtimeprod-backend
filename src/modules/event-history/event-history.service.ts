import { Injectable } from '@nestjs/common';
import { CreateEventHistoryDto } from './dto/create-event-history.dto';
import { UpdateEventHistoryDto } from './dto/update-event-history.dto';

@Injectable()
export class EventHistoryService {
  create(createEventHistoryDto: CreateEventHistoryDto) {
    return 'This action adds a new eventHistory';
  }

  findAll() {
    return `This action returns all eventHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventHistory`;
  }

  update(id: number, updateEventHistoryDto: UpdateEventHistoryDto) {
    return `This action updates a #${id} eventHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventHistory`;
  }
}
