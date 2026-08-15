import { Injectable } from '@nestjs/common';
import { CreateComunicationDto } from './dto/create-comunication.dto';
import { UpdateComunicationDto } from './dto/update-comunication.dto';

@Injectable()
export class ComunicationService {
  create(createComunicationDto: CreateComunicationDto) {
    return 'This action adds a new comunication';
  }

  findAll() {
    return `This action returns all comunication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comunication`;
  }

  update(id: number, updateComunicationDto: UpdateComunicationDto) {
    return `This action updates a #${id} comunication`;
  }

  remove(id: number) {
    return `This action removes a #${id} comunication`;
  }
}
