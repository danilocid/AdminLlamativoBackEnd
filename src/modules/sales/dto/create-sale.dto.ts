import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
export class CreateSaleDetailDto {
  @ApiProperty({
    description: 'The product id',
    example: 1,
  })
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    description: 'The quantity',
    example: 1,
  })
  @IsNotEmpty()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'The net',
    example: 1000,
  })
  @IsNotEmpty()
  @IsPositive()
  net: number;

  @ApiProperty({
    description: 'The tax',
    example: 190,
  })
  @IsNotEmpty()
  @IsPositive()
  tax: number;

  @ApiProperty({
    description: 'The net cost',
    example: 1000,
  })
  @IsNotEmpty()
  @IsPositive()
  netCost: number;

  @ApiProperty({
    description: 'The tax cost',
    example: 190,
  })
  @IsNotEmpty()
  @IsPositive()
  taxCost: number;
}

export class CreateSaleDto {
  @ApiProperty({
    description: 'The client rut',
    example: '12345678-9',
  })
  @IsNotEmpty()
  rut: string;

  @ApiProperty({
    description: 'The document type id',
    example: 1,
  })
  @IsNotEmpty()
  documentTypeId: number;

  @ApiProperty({
    description: 'The document number',
    example: 1,
  })
  @IsNotEmpty()
  documentNumber: number;

  @ApiProperty({
    description: 'The payment method id',
    example: 1,
  })
  @IsNotEmpty()
  paymentMethodId: number;

  @ApiProperty({
    description: 'The total net',
    example: 1000,
  })
  @IsNotEmpty()
  @IsPositive()
  totalNet: number;

  @ApiProperty({
    description: 'The total tax',
    example: 190,
  })
  @IsNotEmpty()
  @IsPositive()
  totalTax: number;

  @ApiProperty({
    description: 'The total net cost',
    example: 1000,
  })
  @IsNotEmpty()
  @IsPositive()
  totalNetCost: number;

  @ApiProperty({
    description: 'The total tax cost',
    example: 190,
  })
  @IsNotEmpty()
  @IsPositive()
  totalTaxCost: number;

  //need to add the sale details, almost one
  @ApiProperty({
    description: 'The sale details',
    type: [CreateSaleDetailDto],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSaleDetailDto)
  saleDetails: CreateSaleDetailDto[];
}
