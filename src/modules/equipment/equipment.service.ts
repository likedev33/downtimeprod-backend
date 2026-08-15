import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Equipment } from './entities/equipment.entity';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private readonly repository: Repository<Equipment>,
  ) {}

  async create(dto: CreateEquipmentDto): Promise<Equipment> {
    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException('Equipment code already exists');
    }

    const entity = this.repository.create(dto);

    return await this.repository.save(entity);
  }

  async findAll(): Promise<Equipment[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<Equipment> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new NotFoundException('Equipment not found');
    }

    return entity;
  }

  async update(id: string, dto: UpdateEquipmentDto): Promise<Equipment> {
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
