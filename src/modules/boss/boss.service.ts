import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../user/dto/UserDTO';
import { User } from '../user/models/User';
import { BossRepository } from './boss.repository';

@Injectable()
export class BossService {
  constructor(private bossRepository: BossRepository) {}

  async createUser(body: CreateUserDTO): Promise<UserDTO> {
    const { name, email, password } = body;
    const userAlreadyExists = await this.bossRepository.findByEmail(email);
    this.validatePassword(password);
    if (!userAlreadyExists) {
      try {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
        return user;
      } catch (e) {
        return e;
      }
    }
  }

  private validatePassword(password: string) {
    const length = password.length;
    if (length <= 4 || length > 20)
      throw new BadRequestException(
        'The password must container more than 4 characters and less then 20.',
      );
    const regex = /[^a-zA-Z0-9\s]/;
    if (!regex.test(password))
      throw new BadRequestException(
        'The password must contains a special character.',
      );
  }

  async findAll(): Promise<any[]> {
    const users: any[] = await this.bossRepository.findAll();
    if (users.length > 0) {
      return users.map((user: any) => {
        return new UserDTO(user);
      });
    }
    throw new NotFoundException();
  }

  async findOne(id: number): Promise<UserDTO> {
    const user: User = await this.bossRepository.findOne(id);
    if (user) {
      return new UserDTO(user);
    }
    throw new NotFoundException();
  }

  async update(id: number, body: UpdateUserDTO): Promise<UserDTO> {
    const user: User = await this.bossRepository.findOne(id);
    if (user) {
      if (body?.password) {
        this.validatePassword(body.password);
      }
      try {
        await this.bossRepository.update(id, body);
        const newUser: User = await this.bossRepository.findOne(id);
        return new UserDTO(newUser);
      } catch (e) {
        return e;
      }
    }
    throw new BadRequestException('The user does not exists.');
  }

  async delete(id: number): Promise<UserDTO> {
    const user: User = await this.bossRepository.findOne(id);
    if (user) {
      await user.remove();
      return new UserDTO(user);
    }
    throw new BadRequestException('The user does not exists.');
  }
}
