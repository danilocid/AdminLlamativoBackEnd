import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Create a sale',
    description: 'Create a sale',
  })
  /* @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt') */
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }
  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all sales',
    description: 'Get all sales',
  })
  /* @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt') */
  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get a sale',
    description: 'Get a sale',
  })
  /*  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt') */
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.salesService.findOne(+id);
  }
}
