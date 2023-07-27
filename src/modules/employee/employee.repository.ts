import { DeleteResult, EntityRepository } from 'typeorm';
import { User } from '../user/models/User';
import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../user/dto/UserDTO';
import { Boss } from '../boss/models/Boss';
import { Employee } from './models/Employee';

@EntityRepository(Employee)
@Injectable()
export class EmployeeRepository {
  async findAll(): Promise<any[]> {
    return await Employee.createQueryBuilder('e').getMany();
  }

  async findOne(id: number): Promise<Employee> {
    return await Employee.createQueryBuilder('e')
      .where('e.id = :id', { id: id })
      .getOne();
  }

  async findByEmail(email: string): Promise<Employee> {
    return await Employee.createQueryBuilder('e')
      .where('e.email = :email', { email: email })
      .getOne();
  }

  async update(
    id: number,
    { name, email, password }: UpdateUserDTO,
  ): Promise<any> {
    return await Employee.createQueryBuilder()
      .update(Employee)
      .set({
        name: name,
        email: email,
        password: password,
      })
      .where('id = :id', { id: id })
      .execute();
  }

  async deleteOne(id: number): Promise<any> {
    return await Employee.createQueryBuilder()
      .softDelete()
      .from(Employee, 'e')
      .where('e.id = :id', { id: id })
      .execute();
  }
}
