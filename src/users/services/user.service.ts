import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dtos/userDTO';
import { Users } from '../models/Users';
import { databaseProviders } from '../../db/database.providers';

@Injectable()
export class UsersService {
  async createUser(body: UserDTO): Promise<UserDTO> {
    const { name, email } = body;
    try {
      const user = new Users();
      user.name = name;
      user.email = email;
      await user.save();
      return user;
    } catch (e) {}
    return body;
  }

  async findAll(): Promise<UserDTO> {
    return await thi;
  }
}
