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

import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('issues')
@ApiTags('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all issues',
    description: 'Get all issues',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get()
  findAll() {
    return this.issuesService.findAllIssues();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all issues status',
    description: 'Get all issues status',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('status')
  findAllIssuesStatus() {
    return this.issuesService.findAllIssuesStatus();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all issues type',
    description: 'Get all issues type',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('type')
  findAllIssuesType() {
    return this.issuesService.findAllIssuesType();
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get all issues seccions',
    description: 'Get all issues seccions',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Get('seccions')
  findAllIssuesSeccions() {
    return this.issuesService.findAllIssuesSeccions();
  }

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issuesService.create(createIssueDto);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'the token we need for auth.',
    required: false,
  })
  @ApiOperation({
    summary: 'Get one issue',
    description: 'Get one issue',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @ApiParam({
    name: 'id',
    description: 'The id of the issue',
    type: Number,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.issuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issuesService.update(+id, updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuesService.remove(+id);
  }
}
