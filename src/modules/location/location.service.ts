import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly repository: Repository<Location>,
  ) {}

  async create(dto: CreateLocationDto): Promise<Location> {
    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException('Location code already exists');
    }

    const entity = this.repository.create(dto);

    return await this.repository.save(entity);
  }

  async findAll(): Promise<Location[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<Location> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new NotFoundException('Location not found');
    }

    return entity;
  }

  async update(id: string, dto: UpdateLocationDto): Promise<Location> {
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
