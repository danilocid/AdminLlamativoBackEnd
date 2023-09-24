import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { query } from 'express';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Delete a product',
    description: 'Delete a product',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('/movementTypes')
  getMovementTypes() {
    return this.productsService.getMovementsTypes();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Create a product',
    description: 'Create a product',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all products',
    description: 'Get all products',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get()
  findAll(
    @Query('a') active: boolean = true,
    @Query('s') stock: boolean = false,
  ) {
    return this.productsService.findAll(active, stock);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get a product',
    description: 'Get a product',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Update a product',
    description: 'Update a product',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }
}
