import { PartialType } from '@nestjs/mapped-types';
// Si vous utilisez @nestjs/swagger, vous pouvez aussi faire :
// import { PartialType } from '@nestjs/swagger';

import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(
  CreateContactDto,
) {}