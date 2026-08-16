
/**
 * ============================================================
 * Module      : LocationService
 * Description : Manage Localisation using EventLink
 * Author      : Arezki CHEKKAL
 * Date        : 2026-08-16
 * Version     : 1.0.0
 * ============================================================
 */

import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
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
      throw new ConflictException(
        'Location code already exists',
      );
    }

    const location = this.repository.create(dto);

    return await this.repository.save(location);
  }

  async findAll(): Promise<Location[]> {

    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });

  }

  async findOne(id: string): Promise<Location> {

    const location = await this.repository.findOne({
      where: { id },
    });

    if (!location) {
      throw new NotFoundException(
        'Location  not found',
      );
    }

    return location;

  }

  async update(
    id: string,
    dto: UpdateLocationDto,
  ): Promise<Location> {

    const location = await this.findOne(id);

    const { code, ...updateData } = dto;

    Object.assign(location, updateData);

    return this.repository.save(location);

  }

  async remove(id: string): Promise<void> {

    const location = await this.findOne(id);

    await this.repository.remove(location);

  }

}
