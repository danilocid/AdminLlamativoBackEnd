import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import {
  Issue,
  IssueSection,
  IssueStatus,
  IssueType,
} from './entities/issues.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(IssueStatus)
    private issueStatusRepository: Repository<IssueStatus>,
    @InjectRepository(IssueType)
    private issueTypeRepository: Repository<IssueType>,
    @InjectRepository(IssueSection)
    private issueSectionRepository: Repository<IssueSection>,
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  async create(createIssueDto: CreateIssueDto) {
    console.log(createIssueDto);
    let issue = this.issueRepository.create(createIssueDto as unknown as Issue);
    try {
      issue.issueStatus = await this.issueStatusRepository.findOne({
        where: { id: createIssueDto.status },
      });
      if (!issue.issueStatus) {
        throw new NotFoundException({
          message: `Issue status with id ${createIssueDto.status} not found`,
        });
      }
      issue.issueType = await this.issueTypeRepository.findOne({
        where: { id: createIssueDto.type },
      });
      if (!issue.issueType) {
        throw new NotFoundException({
          message: `Issue type with id ${createIssueDto.type} not found`,
        });
      }
      issue.issueSection = await this.issueSectionRepository.findOne({
        where: { id: createIssueDto.section },
      });
      if (!issue.issueSection) {
        throw new NotFoundException({
          message: `Issue section with id ${createIssueDto.section} not found`,
        });
      }
      issue = await this.issueRepository.save(issue);
      console.log(issue);
    } catch (error) {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        throw new InternalServerErrorException({
          message: 'Error creating issue',
          error: 'Issue already exists',
        });
      }
      throw new InternalServerErrorException({
        message: 'Error creating issue',
        error: error,
      });
    }

    return issue;
  }

  async findAllIssues() {
    let issues = await this.issueRepository.find({
      relations: ['issueStatus', 'issueType', 'issueSection'],
    });
    return {
      items: issues.length,
      issues: issues,
    };
  }

  async findAllIssuesStatus() {
    return await this.issueStatusRepository.find();
  }

  async findAllIssuesType() {
    return await this.issueTypeRepository.find();
  }

  async findAllIssuesSeccions() {
    return await this.issueSectionRepository.find();
  }

  async findOne(id: number) {
    let issue = await this.issueRepository.findOne({
      where: { id: id },
      relations: ['issueStatus', 'issueType', 'issueSection'],
    });
    if (!issue) {
      throw new NotFoundException({ message: `Issue with id ${id} not found` });
    }

    return issue;
  }

  async update(id: number, updateIssueDto: UpdateIssueDto) {
    //check if issue exists
    let issue = await this.issueRepository.findOne({ where: { id: id } });
    if (!issue) {
      throw new NotFoundException({ message: `Issue with id ${id} not found` });
    }

    //check if issue status exists on UpdateIssueDto, if it does, check if it exists on the database
    if (updateIssueDto.status) {
      let issueStatus = await this.issueStatusRepository.findOne({
        where: { id: updateIssueDto.status },
      });
      if (!issueStatus) {
        throw new NotFoundException({
          message: `Issue status with id ${updateIssueDto.status} not found`,
        });
      }
      issue.issueStatus = issueStatus;
    }
    //check if issue type exists on UpdateIssueDto, if it does, check if it exists on the database
    if (updateIssueDto.type) {
      let issueType = await this.issueTypeRepository.findOne({
        where: { id: updateIssueDto.type },
      });
      if (!issueType) {
        throw new NotFoundException({
          message: `Issue type with id ${updateIssueDto.type} not found`,
        });
      }
      issue.issueType = issueType;
    }
    //check if issue section exists on UpdateIssueDto, if it does, check if it exists on the database
    if (updateIssueDto.section) {
      let issueSection = await this.issueSectionRepository.findOne({
        where: { id: updateIssueDto.section },
      });
      if (!issueSection) {
        throw new NotFoundException({
          message: `Issue section with id ${updateIssueDto.section} not found`,
        });
      }
      issue.issueSection = issueSection;
    }

    //check if issue title exists on UpdateIssueDto, if it does, check if it exists on the database
    if (updateIssueDto.title) {
      let issueTitle = await this.issueRepository.findOne({
        where: { title: updateIssueDto.title },
      });
      if (issueTitle && issueTitle.id !== id) {
        throw new NotFoundException({
          message: `Issue with title ${updateIssueDto.title} already exists`,
        });
      }
      issue.title = updateIssueDto.title;
    }

    //update issue
    issue = await this.issueRepository.save(issue);

    return issue;
  }

  async remove(id: number) {
    //check if issue exists
    let issue = await this.issueRepository.findOne({ where: { id: id } });
    if (!issue) {
      throw new NotFoundException({ message: `Issue with id ${id} not found` });
    }
    //delete issue
    try {
      this.issueRepository.delete({ id: id });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Error deleting issue',
        error: error,
      });
    }
    return `This action removes a #${id} issue`;
  }

  async resume() {
    let types;
    let status;
    let sections;
    try {
      //types = count of issues by type, with the name of the type, we need to use query builder because typeorm doesn't support count by relations
      types = await this.issueRepository
        .createQueryBuilder('issue')
        .select('COUNT(issue.id)', 'count')
        .addSelect('issue_type.type', 'type')
        .innerJoin('issue.issueType', 'issue_type')
        .groupBy('issue_type.id')
        .getRawMany();

      //status = count of issues by status, with the name of the status, we need to use query builder because typeorm doesn't support count by relations
      status = await this.issueRepository
        .createQueryBuilder('issue')
        .select('COUNT(issue.id)', 'count')
        .addSelect('issue_status.status', 'status')
        .innerJoin('issue.issueStatus', 'issue_status')
        .groupBy('issue_status.id')
        .getRawMany();

      //sections = count of issues by section, with the name of the section, we need to use query builder because typeorm doesn't support count by relations
      sections = await this.issueRepository
        .createQueryBuilder('issue')
        .select('COUNT(issue.id)', 'count')
        .addSelect('issue_section.section', 'section')
        .innerJoin('issue.issueSection', 'issue_section')
        .groupBy('issue_section.id')
        .getRawMany();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Error getting resume',
        error: error,
      });
    }
    return {
      types: types,
      status: status,
      sections: sections,
    };
  }
}
