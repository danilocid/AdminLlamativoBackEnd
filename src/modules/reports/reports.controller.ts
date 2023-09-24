import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('dashboard')
  findAll() {
    return this.reportsService.dashboard();
  }
}
