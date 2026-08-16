/**
 * ============================================================
 * Module      : Contact
 * Description : Creer un DTO pour validé les données des contacts provenant de  service
 * Author      : Arezki CHEKKAL
 * Date        : 2026-08-14
 * Version     : 1.0.0
 * ============================================================
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateContactDto {
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
  email!: string;

  @ApiProperty()
  @IsString()
  @Length(2, 150)
  phone!: string;
}
