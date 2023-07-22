import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dtos/userDTO';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async create(@Body() body: UserDTO): Promise<UserDTO> {
    return await this.usersService.createUser(body);
  }

  @Get()
  async findAll(): Promise<UserDTO[]> {
    return await this.usersService.findAll();
  }
}
