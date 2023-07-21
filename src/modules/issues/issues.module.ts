import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import {
  Issue,
  IssueSection,
  IssueStatus,
  IssueType,
} from './entities/issues.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([IssueStatus, IssueType, IssueSection, Issue]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.SECRET,
          signOptions: { expiresIn: '1d' },
        };
      },
      inject: [],
    }),
  ],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
