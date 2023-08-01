import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Create client',
    description: 'Create client',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all clients',
    description: 'Get all clients',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get one client',
    description: 'Get one client',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get(':rut')
  findOne(@Param('rut') rut: string) {
    return this.clientsService.findOne(rut);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Update client',
    description: 'Update client',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Patch(':rut')
  update(@Param('rut') rut: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(rut, updateClientDto);
  }
}
