import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @ApiOperation({
    description: 'Login using mail',
  })
  @ApiBody({
    description: 'User email',
    type: LoginDto,
    examples: {
      correctLogin: {
        value: {
          mail: 'danilo.cid.v@gmail.com',
          password: '94679847',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login success',
    content: {
      'application/json': {
        schema: {
          example: {
            test: 'test',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
