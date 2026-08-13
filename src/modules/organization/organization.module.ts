import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { Organization } from './entities/organization.entity';
import { OrganizationRepository } from './repositories/organization.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [OrganizationController],
  providers: [
    OrganizationService,
    OrganizationRepository,
  ],
  exports: [
    OrganizationService,
    OrganizationRepository,
  ],
})
export class OrganizationModule {}
