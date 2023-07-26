import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../models/dtos/userDTO';
import { Employee } from '../models/Employee';
import { EmployeeRepository } from '../employee/employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async createUser(body: CreateUserDTO): Promise<UserDTO> {
    const { name, email, password } = body;
    const userAlreadyExists = await this.employeeRepository.findByEmail(email);
    this.validatePassword(password);
    if (!userAlreadyExists) {
      try {
        const user = new Employee();
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
    const users: any[] = await this.employeeRepository.findAll();
    if (users.length > 0) {
      return users.map((user: any) => {
        return new UserDTO(user);
      });
    }
    throw new NotFoundException();
  }

  async findOne(id: number): Promise<UserDTO> {
    const user: Employee = await this.employeeRepository.findOne(id);
    if (user) {
      return new UserDTO(user);
    }
    throw new NotFoundException();
  }

  async update(id: number, body: UpdateUserDTO): Promise<UserDTO> {
    const user: Employee = await this.employeeRepository.findOne(id);
    if (user) {
      if (body?.password) {
        this.validatePassword(body.password);
      }
      try {
        await this.employeeRepository.update(id, body);
        const newUser: Employee = await this.employeeRepository.findOne(id);
        return new UserDTO(newUser);
      } catch (e) {
        return e;
      }
    }
    throw new BadRequestException('The user does not exists.');
  }

  async delete(id: number): Promise<UserDTO> {
    const user: Employee = await this.employeeRepository.findOne(id);
    if (user) {
      await user.remove();
      return new UserDTO(user);
    }
    throw new BadRequestException('The user does not exists.');
  }
}
