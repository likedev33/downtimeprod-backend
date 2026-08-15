/**
 * ============================================================
 * Module      : Organization
 * Description : Manage organizations using EventLink
 * Author      : Arezki CHEKKAL
 * Date        : 2026-08-14
 * Version     : 1.0.0
 * ============================================================
 */

import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(

      @InjectRepository(Organization)

      private readonly repository: Repository<Organization>,

    ) {}
  async create(dto: CreateOrganizationDto): Promise<Organization> {

    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException(
        'Organization code already exists',
      );
    }

    const organization = this.repository.create(dto);

    return await this.repository.save(organization);
  }

  async findAll(): Promise<Organization[]> {

    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });

  }

  async findOne(id: string): Promise<Organization> {

    const organization = await this.repository.findOne({
      where: { id },
    });

    if (!organization) {
      throw new NotFoundException(
        'Organization not found',
      );
    }

    return organization;

  }

  async update(
    id: string,
    dto: UpdateOrganizationDto,
  ): Promise<Organization> {

    const organization = await this.findOne(id);

    const { code, ...updateData } = dto;

    Object.assign(organization, updateData);

    return this.repository.save(organization);

  }

  async remove(id: string): Promise<void> {

    const organization = await this.findOne(id);

    await this.repository.remove(organization);

  }

}
