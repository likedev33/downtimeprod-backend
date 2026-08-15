import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizationModule } from './modules/organization/organization.module';
import { BusinessUnitModule } from './modules/business-unit/business-unit.module';
import { ContactModule } from './modules/contact/contact.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { EquipmentTypeModule } from './modules/equipment-type/equipment-type.module';
import { LocationModule } from './modules/location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrganizationModule,
    BusinessUnitModule,
    ContactModule,
    EquipmentModule,
    EquipmentTypeModule,
    LocationModule,
  ],
})
export class AppModule {}
