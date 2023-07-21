import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateIssueDto {
  @ApiProperty({
    description: 'The title of the issue',
    example: 'Issue title',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The description of the issue',
    example: 'Issue description',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The status of the issue',
    example: '1',
  })
  @IsNotEmpty()
  status: number;

  @ApiProperty({
    description: 'The type of the issue',
    example: '1',
  })
  @IsNotEmpty()
  type: number;

  @ApiProperty({
    description: 'The section of the issue',
    example: '1',
  })
  @IsNotEmpty()
  section: number;
}
