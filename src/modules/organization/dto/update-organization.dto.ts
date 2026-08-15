import { PartialType } from '@nestjs/mapped-types';
// Si vous utilisez @nestjs/swagger, vous pouvez aussi faire :
// import { PartialType } from '@nestjs/swagger';

import { CreateOrganizationDto } from './create-organization.dto';

export class UpdateOrganizationDto extends PartialType(
  CreateOrganizationDto,
) {}