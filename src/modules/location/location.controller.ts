
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

import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@ApiTags('Locations')
@Controller('locations')
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Créer une localisation' })
  @ApiCreatedResponse({
    description: 'Localisation créée',
    type: Location,
  })
  @ApiConflictResponse({
    description: 'Le code existe déjà',
  })
  async create(
    @Body() dto: CreateLocationDto,
  ): Promise<Location> {
    return this.locationService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister les localisations' })
  @ApiOkResponse({
    description: 'Liste des localisations',
    type: [Location],
  })
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir une localisation' })
  @ApiOkResponse({
    type: Location,
  })
  @ApiNotFoundResponse({
    description: 'Localisation introuvable',
  })
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Location> {
    return this.locationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une localisation' })
  @ApiOkResponse({
    type: Location,
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLocationDto,
  ): Promise<Location> {
    return this.locationService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Supprimer une localisation' })
  @ApiNoContentResponse({
    description: 'Localisation supprimée',
  })
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void> {
    return this.locationService.remove(id);
  }
}