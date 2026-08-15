import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { OrganizationService } from './organization.service';

import { Organization } from './entities/organization.entity';

import { CreateOrganizationDto } from './dto/create-organization.dto';

import { UpdateOrganizationDto } from './dto/update-organization.dto';

@ApiTags('Organizations')
@Controller('organizations')
export class OrganizationController {
  constructor(
    private readonly organizationService: OrganizationService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Créer une organisation' })
  @ApiCreatedResponse({
    description: 'Organisation créée',
    type: Organization,
  })
  @ApiConflictResponse({
    description: 'Le code existe déjà',
  })
  async create(
    @Body() dto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister les organisations' })
  @ApiOkResponse({
    description: 'Liste des organisations',
    type: [Organization],
  })
  async findAll(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir une organisation' })
  @ApiOkResponse({
    type: Organization,
  })
  @ApiNotFoundResponse({
    description: 'Organisation introuvable',
  })
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Organization> {
    return this.organizationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une organisation' })
  @ApiOkResponse({
    type: Organization,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Supprimer une organisation' })
  @ApiNoContentResponse({
    description: 'Organisation supprimée',
  })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void> {
    return this.organizationService.remove(id);
  }
}