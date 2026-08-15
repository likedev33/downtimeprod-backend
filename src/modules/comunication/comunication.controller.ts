import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComunicationService } from './comunication.service';
import { CreateComunicationDto } from './dto/create-comunication.dto';
import { UpdateComunicationDto } from './dto/update-comunication.dto';

@Controller('comunication')
export class ComunicationController {
  constructor(private readonly comunicationService: ComunicationService) {}

  @Post()
  create(@Body() createComunicationDto: CreateComunicationDto) {
    return this.comunicationService.create(createComunicationDto);
  }

  @Get()
  findAll() {
    return this.comunicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunicationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComunicationDto: UpdateComunicationDto) {
    return this.comunicationService.update(+id, updateComunicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comunicationService.remove(+id);
  }
}
