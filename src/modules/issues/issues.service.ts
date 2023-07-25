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
    let types = [];
    let status;
    let sections;
    try {
      //get al issues types, with the count of issues of each type, need to include the name of the type, an de types without issues
      let allTypes = await this.issueTypeRepository.find();
      for (let i = 0; i < allTypes.length; i++) {
        let count;
        count = await this.issueRepository.query(
          `SELECT COUNT(issue.id) as count FROM issue WHERE issueTypeId = ${allTypes[i].id}`,
        );
        types.push({ type: allTypes[i].type, count: count[0].count });
      }

      //get al issues status, with the count of issues of each status, need to include the name of the status, an de status without issues
      let allStatus = await this.issueStatusRepository.find();
      status = [];
      for (let i = 0; i < allStatus.length; i++) {
        let count;
        count = await this.issueRepository.query(
          `SELECT COUNT(issue.id) as count FROM issue WHERE issueStatusId = ${allStatus[i].id}`,
        );
        status.push({ status: allStatus[i].status, count: count[0].count });
      }

      //get al issues sections, with the count of issues of each section, need to include the name of the section, an de sections without issues
      let allSections = await this.issueSectionRepository.find();
      sections = [];
      for (let i = 0; i < allSections.length; i++) {
        let count;
        count = await this.issueRepository.query(
          `SELECT COUNT(issue.id) as count FROM issue WHERE issueSectionId = ${allSections[i].id}`,
        );
        sections.push({
          section: allSections[i].section,
          count: count[0].count,
        });
      }
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
