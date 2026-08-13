import { PartialType } from '@nestjs/swagger';
import { CreateEscaladeDto } from './create-escalade.dto';

export class UpdateEscaladeDto extends PartialType(CreateEscaladeDto) {}
