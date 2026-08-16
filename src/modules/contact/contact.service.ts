/**
 * ============================================================
 * Module      : Contact
 * Description : Manage contacts using EventLink
 * Author      : Arezki CHEKKAL
 * Date        : 2026-08-16
 * Version     : 1.0.0
 * ============================================================
 */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly repository: Repository<Contact>,
  ) {}

  async create(dto: CreateContactDto): Promise<Contact> {
    const exists = await this.repository.findOne({
      where: { code: dto.code },
    });

    if (exists) {
      throw new ConflictException('Contact code already exists');
    }

    const entity = this.repository.create(dto);

    return await this.repository.save(entity);
  }

  async findAll(): Promise<Contact[]> {
    return this.repository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<Contact> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new NotFoundException('Contact not found');
    }

    return entity;
  }

  async update(id: string, dto: UpdateContactDto): Promise<Contact> {
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
