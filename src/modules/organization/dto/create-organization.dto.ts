/**
 * ============================================================
 * Module      : Organization
 * Description : Creer un DTO pour validé les données des organizations provenant de  service
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

import { OrganizationStatus } from '../enums/organization-status.enum';
import { OrganizationType } from '../enums/organization-type.enum';

export class CreateOrganizationDto {

  @ApiProperty({
    example: 'SONATRACH',
    description: 'Unique organization code',
  })
  @IsString()
  @Length(2, 30)
  code!: string;

  @ApiProperty({
    example: 'Sonatrach',
    description: 'Organization name',
  })
  @IsString()
  @Length(2, 150)
  name!: string;

  @ApiPropertyOptional({
    example: 'Société Nationale Sonatrach',
  })
  @IsOptional()
  @IsString()
  @Length(2, 200)
  legalName?: string;

  @ApiProperty({
    enum: OrganizationType,
    example: OrganizationType.COMPANY,
  })
  @IsEnum(OrganizationType)
  organizationType!: OrganizationType;

  @ApiPropertyOptional({
    example: 'Oil & Gas',
  })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  businessSector?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  taxNumber?: string;

  @ApiPropertyOptional({
    example: 'contact@sonatrach.dz',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    example: '+213 21 00 00 00',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    example: 'https://www.sonatrach.dz',
  })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    example: 'fr',
    default: 'fr',
  })
  @IsOptional()
  @IsString()
  language?: string;

  @ApiPropertyOptional({
    example: 'Africa/Algiers',
  })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({
    example: 'DZD',
  })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    enum: OrganizationStatus,
    default: OrganizationStatus.ACTIVE,
  })
  @IsOptional()
  @IsEnum(OrganizationStatus)
  status?: OrganizationStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
