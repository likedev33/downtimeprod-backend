import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';


import { BusinessUnitModule } from './modules/business-unit/business-unit.module';
import { IdentityModule } from './modules/identity/identity.module';
import { EventModule } from './modules/event/event.module';
import { NotificationModule } from './modules/notification/notification.module';
import { EscaladeModule } from './modules/escalade/escalade.module';
// import { HistoryModule } from './modules/history/history.module';
import { SharedModule } from './shared/shared.module';
import { OrganizationModule } from './modules/organization/organization.module';
// import { BusinessUnitModule } from './modules/business-unit/business-unit.module';
// import { IdentityModule } from './modules/identity/identity.module';
// import { EventModule } from './modules/event/event.module';
// import { NotificationModule } from './modules/notification/notification.module';
// import { EscaladeModule } from './modules/escalade/escalade.module';
import { EventHistoryModule } from './modules/event-history/event-history.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DeviceModule } from './modules/device/device.module';
import { LocationModule } from './modules/location/location.module';
import { PolicyModule } from './modules/policy/policy.module';
import { IntegrationModule } from './modules/integration/integration.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',

        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),

        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),

        database: configService.get<string>('database.database'),

        autoLoadEntities: true,

        synchronize: true,
      }),
    }),
    BusinessUnitModule, IdentityModule, EventModule, NotificationModule, EscaladeModule, SharedModule, OrganizationModule, EventHistoryModule, DashboardModule, DeviceModule, LocationModule, PolicyModule, IntegrationModule
  ], // HistoryModule
})
export class AppModule {}
