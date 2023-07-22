import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dtos/userDTO';
import { User } from '../models/User';
import { databaseProviders } from '../../db/database.providers';

@Injectable()
export class UserService {
  async createUser(body: UserDTO): Promise<UserDTO> {
    const { name, email } = body;
    try {
      const user = new User();
      user.name = name;
      user.email = email;
      await user.save();
      return user;
    } catch (e) {
      return e;
    }
  }

  async findAll(): Promise<UserDTO> {
    return;
  }
}
