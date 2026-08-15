import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BusinessUnit } from './entities/business-unit.entity';
import { CreateBusinessUnitDto } from './dto/create-business-unit.dto';
import { UpdateBusinessUnitDto } from './dto/update-business-unit.dto';

@Injectable()
export class BusinessUnitService {
  constructor(
    @InjectRepository(BusinessUnit)
    private readonly repository: Repository<BusinessUnit>,
  ) {}

  async create(dto: CreateBusinessUnitDto): Promise<BusinessUnit> {
    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException('BusinessUnit code already exists');
    }

    const entity = this.repository.create(dto);

    return await this.repository.save(entity);
  }

  async findAll(): Promise<BusinessUnit[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<BusinessUnit> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new NotFoundException('BusinessUnit not found');
    }

    return entity;
  }

  async update(id: string, dto: UpdateBusinessUnitDto): Promise<BusinessUnit> {
    const entity = await this.findOne(id);

    const { code, ...updateData } = dto;

    Object.assign(entity, updateData);

    return this.repository.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);

    await this.repository.remove(entity);
  }
}
