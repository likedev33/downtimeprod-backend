import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { EquipmentTypeService } from './equipment-type.service';
import { CreateEquipmentTypeDto } from './dto/create-equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update-equipment-type.dto';
import { EquipmentType } from './entities/equipment-type.entity';

@Controller('equipment-types')
export class EquipmentTypeController {
  constructor(private readonly equipmentTypeService: EquipmentTypeService) {}

  @Post()
  create(@Body() dto: CreateEquipmentTypeDto): Promise<EquipmentType> {
    return this.equipmentTypeService.create(dto);
  }

  @Get()
  findAll(): Promise<EquipmentType[]> {
    return this.equipmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<EquipmentType> {
    return this.equipmentTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateEquipmentTypeDto,
  ): Promise<EquipmentType> {
    return this.equipmentTypeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.equipmentTypeService.remove(id);
  }
}
