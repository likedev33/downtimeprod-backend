import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BusinessUnit } from './entities/business-unit.entity';
import { BusinessUnitController } from './business-unit.controller';
import { BusinessUnitService } from './business-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessUnit])],
  controllers: [BusinessUnitController],
  providers: [BusinessUnitService],
  exports: [BusinessUnitService],
})
export class BusinessUnitModule {}
