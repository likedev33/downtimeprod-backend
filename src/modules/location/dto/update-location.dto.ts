import { PartialType } from '@nestjs/mapped-types';
// Si vous utilisez @nestjs/swagger, vous pouvez aussi faire :
// import { PartialType } from '@nestjs/swagger';

import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(
  CreateLocationDto,
) {}