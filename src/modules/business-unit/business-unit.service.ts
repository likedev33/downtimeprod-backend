import { Injectable } from '@nestjs/common';
import { CreateBusinessUnitDto } from './dto/create-business-unit.dto';
import { UpdateBusinessUnitDto } from './dto/update-business-unit.dto';

@Injectable()
export class BusinessUnitService {
  create(createBusinessUnitDto: CreateBusinessUnitDto) {
    return 'This action adds a new businessUnit';
  }

  findAll() {
    return `This action returns all businessUnit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessUnit`;
  }

  update(id: number, updateBusinessUnitDto: UpdateBusinessUnitDto) {
    return `This action updates a #${id} businessUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessUnit`;
  }
}
