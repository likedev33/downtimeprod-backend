import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EquipmentType } from './entities/equipment-type.entity';
import { CreateEquipmentTypeDto } from './dto/create-equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update-equipment-type.dto';

@Injectable()
export class EquipmentTypeService {
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repository: Repository<EquipmentType>,
  ) {}

  async create(dto: CreateEquipmentTypeDto): Promise<EquipmentType> {
    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException('EquipmentType code already exists');
    }

    const entity = this.repository.create(dto);

    return await this.repository.save(entity);
  }

  async findAll(): Promise<EquipmentType[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<EquipmentType> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new NotFoundException('EquipmentType not found');
    }

    return entity;
  }

  async update(id: string, dto: UpdateEquipmentTypeDto): Promise<EquipmentType> {
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
