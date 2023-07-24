import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, ResponseCreateUserDTO } from './models/dtos/userDTO';
import { User } from './models/User';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO): Promise<ResponseCreateUserDTO> {
    return await this.usersService.createUser(body);
  }

  @Get()
  async findAll(): Promise<ResponseCreateUserDTO[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseCreateUserDTO | HttpException> {
    return await this.usersService.findOne(id);
  }
}
