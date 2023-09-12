import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';
export class CreateInventoryDto {
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The total net cost of the inventory',
    example: 1000,
  })
  totalNetCost: number;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The total tax cost of the inventory',
    example: 190,
  })
  totalTaxCost: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The entries of the inventory',
    example: 190,
  })
  entries: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The exits of the inventory',
    example: 190,
  })
  exits: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The observations of the inventory',
    example: 'Observations',
  })
  observations: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The movementType of the inventory',
    example: 'MovementType',
  })
  @IsNumber()
  movementType: number;

  @ApiProperty({
    description: 'The products of the inventory',
    example: '',
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InventoryProduct)
  products: InventoryProduct[];
}

export class InventoryProduct {
  @ApiProperty({
    description: 'The id of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsPositive()
  id: number;
  @ApiProperty({
    description: 'The description of the product',
    example: 'Product description',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The net cost of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  netCost: number;

  @ApiProperty({
    description: 'The tax cost of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  taxCost: number;

  @ApiProperty({
    description: 'The entry of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  entries: number;

  @ApiProperty({
    description: 'The exits of the product',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  exits: number;
}
