import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The description of the product',
    example: 'Coca Cola 1.5L',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The internal code of the product',
    example: 'CC1.5L',
  })
  @IsNotEmpty()
  internalCode: string;

  @ApiProperty({
    description: 'The bar code of the product (EAN-13)',
    example: '1234567890123',
  })
  @IsOptional()
  @Length(13)
  @MinLength(13)
  @MaxLength(13)
  barCode: string;

  @ApiProperty({
    description: 'The net cost of the product',
    example: 1000,
  })
  @IsNotEmpty()
  @IsPositive()
  netCost: number;

  @ApiProperty({
    description: 'The tax cost of the product',
    example: 190,
  })
  @IsNotEmpty()
  @IsPositive()
  taxCost: number;

  @ApiProperty({
    description: 'The net sale of the product',
    example: 1500,
  })
  @IsNotEmpty()
  @IsPositive()
  netSale: number;

  @ApiProperty({
    description: 'The tax sale of the product',
    example: 285,
  })
  @IsNotEmpty()
  @IsPositive()
  taxSale: number;

  @ApiProperty({
    description: 'The stock min of the product',
    example: 10,
  })
  @IsNotEmpty()
  @IsPositive()
  stockMin: number;

  @ApiProperty({
    description: 'The active status of the product',
    example: true,
  })
  @IsNotEmpty()
  active: boolean;
}
