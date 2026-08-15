import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateBusinessUnitDto {
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  code!: string;

  @ApiProperty()
  @IsString()
  @Length(2, 150)
  name!: string;

  @ApiProperty()
  @IsString()
  @Length(2, 150)
  description?: string;
}
