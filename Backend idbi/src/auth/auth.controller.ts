import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, Headers, SetMetadata } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';

import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport'
import { User } from './entities/user.entity';
import { IncomingHttpHeaders } from 'http';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './interfaces';
import { GetUser, Auth, RoleProtected, RawHeaders } from './decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('refresh')
  @Auth()
  checkAuthStatus(
    @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus(user);
  }


}
