import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateLocationDto {
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
  address!: string;

}
