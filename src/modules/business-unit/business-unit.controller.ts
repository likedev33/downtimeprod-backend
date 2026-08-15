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

import { BusinessUnitService } from './business-unit.service';
import { CreateBusinessUnitDto } from './dto/create-business-unit.dto';
import { UpdateBusinessUnitDto } from './dto/update-business-unit.dto';
import { BusinessUnit } from './entities/business-unit.entity';

@Controller('business-units')
export class BusinessUnitController {
  constructor(private readonly businessUnitService: BusinessUnitService) {}

  @Post()
  create(@Body() dto: CreateBusinessUnitDto): Promise<BusinessUnit> {
    return this.businessUnitService.create(dto);
  }

  @Get()
  findAll(): Promise<BusinessUnit[]> {
    return this.businessUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<BusinessUnit> {
    return this.businessUnitService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateBusinessUnitDto,
  ): Promise<BusinessUnit> {
    return this.businessUnitService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.businessUnitService.remove(id);
  }
}
