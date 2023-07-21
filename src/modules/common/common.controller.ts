import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { CommonService } from './common.service';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('common')
@ApiTags('common')

//add description to swagger
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all payment methods',
    description: 'Get all payment methods',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('payment-methods')
  findAllPaymentMethod() {
    return this.commonService.findAllPaymentMethod();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all document types',
    description: 'Get all document types',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('document-types')
  findAlldocumentType() {
    return this.commonService.findAlldocumentType();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all regions',
    description: 'Get all regions',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('regions')
  findAllRegion() {
    return this.commonService.findAllRegion();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all comuns',
    description: 'Get all comuns',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('comuns')
  findAllComuns() {
    return this.commonService.findAllComuns();
  }

  //find all comuns by region id
  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all comuns by region id',
    description: 'Get all comuns by region id',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('comuns/:id')
  findAllComunsByRegionId(@Param('id', ParseIntPipe) id: number) {
    return this.commonService.findAllComunsByRegionId(id);
  }
}
