import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscaladeService } from './escalade.service';
import { CreateEscaladeDto } from './dto/create-escalade.dto';
import { UpdateEscaladeDto } from './dto/update-escalade.dto';

@Controller('escalade')
export class EscaladeController {
  constructor(private readonly escaladeService: EscaladeService) {}

  @Post()
  create(@Body() createEscaladeDto: CreateEscaladeDto) {
    return this.escaladeService.create(createEscaladeDto);
  }

  @Get()
  findAll() {
    return this.escaladeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escaladeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscaladeDto: UpdateEscaladeDto) {
    return this.escaladeService.update(+id, updateEscaladeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escaladeService.remove(+id);
  }
}
