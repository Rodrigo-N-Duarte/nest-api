import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO, ResponseCreateUserDTO } from './models/dtos/userDTO';
import { User } from './models/User';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(body: CreateUserDTO): Promise<ResponseCreateUserDTO> {
    const { name, email, password } = body;
    const userAlreadyExists = await this.userRepository.findByEmail(email);
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

  async findAll(): Promise<ResponseCreateUserDTO[]> {
    const users: User[] = await this.userRepository.findAll();
    if (users.length > 0) {
      const dtos: ResponseCreateUserDTO[] = users.map((user: User) => {
        return new ResponseCreateUserDTO(user);
      });
      return dtos;
    }
    throw new NotFoundException();
  }

  async findOne(id: number) {
    const user: User = await this.userRepository.findOne(id);
    if (user) {
      return new ResponseCreateUserDTO(user);
    }
    throw new NotFoundException();
  }
}
