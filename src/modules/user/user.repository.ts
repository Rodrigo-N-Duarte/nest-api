import { EntityRepository } from 'typeorm';
import { User } from '../user/models/User';
import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../user/dto/UserDTO';

@EntityRepository(User)
@Injectable()
export class UserRepository {
  async findAll(): Promise<any[]> {
    return await User.createQueryBuilder('u').getMany();
  }

  async findOne(id: number): Promise<User> {
    return await User.createQueryBuilder('u')
      .where('u.id = :id', { id: id })
      .getOne();
  }

  async findByEmail(email: string): Promise<User> {
    return await User.createQueryBuilder('u')
      .where('u.email = :email', { email: email })
      .getOne();
  }

  async update(
    id: number,
    { name, email, password }: UpdateUserDTO,
  ): Promise<any> {
    return await User.createQueryBuilder()
      .update(User)
      .set({
        name: name,
        email: email,
        password: password,
      })
      .where('id = :id', { id: id })
      .execute();
  }

  async deleteOne(id: number): Promise<any> {
    return await User.createQueryBuilder()
      .softDelete()
      .from(User, 'u')
      .where('u.id = :id', { id: id })
      .execute();
  }
}
