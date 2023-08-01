import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPositive,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'The RUT of the client',
    example: '18109289-0',
  })
  @IsNotEmpty()
  rut: string;

  @ApiProperty({
    description: 'The name of the client',
    example: 'Juan Carlos Bodoque',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The activity of the client',
    example: 'Particular',
  })
  @IsNotEmpty()
  activity: string;

  @ApiProperty({
    description: 'The address of the client',
    example: 'Av. Siempre Viva 123',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'The phone of the client',
    example: '123456789',
  })
  @IsNotEmpty()
  @Length(9)
  @MinLength(9)
  @MaxLength(9)
  phone: string;

  @ApiProperty({
    description: 'The email of the client',
    example: 'danilo.cid.v@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The commune of the client',
    example: 25,
  })
  @IsNotEmpty()
  @IsPositive()
  commune: number;

  @ApiProperty({
    description: 'The region of the client',
    example: 6,
  })
  @IsNotEmpty()
  @IsPositive()
  region: number;
}
