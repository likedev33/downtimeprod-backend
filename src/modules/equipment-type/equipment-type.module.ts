import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EquipmentType } from './entities/equipment-type.entity';
import { EquipmentTypeController } from './equipment-type.controller';
import { EquipmentTypeService } from './equipment-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentType])],
  controllers: [EquipmentTypeController],
  providers: [EquipmentTypeService],
  exports: [EquipmentTypeService],
})
export class EquipmentTypeModule {}
