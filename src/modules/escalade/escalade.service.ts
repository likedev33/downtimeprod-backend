import { Injectable } from '@nestjs/common';
import { CreateEscaladeDto } from './dto/create-escalade.dto';
import { UpdateEscaladeDto } from './dto/update-escalade.dto';

@Injectable()
export class EscaladeService {
  create(createEscaladeDto: CreateEscaladeDto) {
    return 'This action adds a new escalade';
  }

  findAll() {
    return `This action returns all escalade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escalade`;
  }

  update(id: number, updateEscaladeDto: UpdateEscaladeDto) {
    return `This action updates a #${id} escalade`;
  }

  remove(id: number) {
    return `This action removes a #${id} escalade`;
  }
}
