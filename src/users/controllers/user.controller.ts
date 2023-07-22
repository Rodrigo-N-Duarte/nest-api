import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO } from '../dtos/userDTO';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('create')
  async create(@Body() body: UserDTO): Promise<UserDTO> {
    return await this.usersService.createUser(body);
  }

  @Get()
  async findAll(): Promise<UserDTO[]> {
    // return await this.usersService.findAll();
    return;
  }
}
