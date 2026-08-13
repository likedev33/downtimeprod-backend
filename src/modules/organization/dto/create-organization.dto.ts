import { IsBoolean, IsOptional, IsString, IsTimeZone, Length, } from 'class-validator';
  
export class CreateOrganizationDto {
    @IsString()
    @Length(2, 150)
    name: string;
    @IsString()
    @Length(2, 50)
    code: string;
    @IsOptional()
    @IsString()
    description?: string;
    @IsOptional()
    @IsString()
    @Length(2, 100)
    industry?: string;
    @IsOptional()
    @IsString()
    @Length(2, 100)
    country?: string;
    @IsOptional()
    @IsTimeZone()
    timezone?: string;
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
  }
  