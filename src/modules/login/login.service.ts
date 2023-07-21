import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Login } from './entities/login.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}
  async login(LoginDto: LoginDto) {
    try {
      let user = await this.loginRepository.findOne({
        where: { email: LoginDto.mail },
      });
      if (user) {
        let password = await bcrypt.compare(LoginDto.password, user.password);
        if (password) {
          //generate jwt
          const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
          };

          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d',
          });
          return {
            ok: true,
            message: 'Login successfully',
            token: token,
          };
        } else {
          return {
            ok: false,
            message: 'Password incorrect',
          };
        }
      } else {
        return {
          ok: false,
          message: 'User not found',
        };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}