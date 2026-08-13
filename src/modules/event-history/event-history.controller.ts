import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventHistoryService } from './event-history.service';
import { CreateEventHistoryDto } from './dto/create-event-history.dto';
import { UpdateEventHistoryDto } from './dto/update-event-history.dto';

@Controller('event-history')
export class EventHistoryController {
  constructor(private readonly eventHistoryService: EventHistoryService) {}

  @Post()
  create(@Body() createEventHistoryDto: CreateEventHistoryDto) {
    return this.eventHistoryService.create(createEventHistoryDto);
  }

  @Get()
  findAll() {
    return this.eventHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventHistoryDto: UpdateEventHistoryDto) {
    return this.eventHistoryService.update(+id, updateEventHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventHistoryService.remove(+id);
  }
}
