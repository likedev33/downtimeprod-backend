import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Organization } from '../entities/organization.entity';
@Injectable()
export class OrganizationRepository extends Repository<Organization> {
  constructor(dataSource: DataSource) {
    super(Organization, dataSource.createEntityManager());
  }
}
