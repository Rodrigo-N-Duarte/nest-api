import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from './models/dtos/userDTO';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO): Promise<UserDTO> {
    return await this.usersService.createUser(body);
  }

  @Get()
  async findAll(): Promise<UserDTO[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDTO,
  ): Promise<UserDTO> {
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    return await this.usersService.delete(id);
  }
}
