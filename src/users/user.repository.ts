import { EntityRepository } from 'typeorm';
import { User } from './models/User';
import { Injectable } from '@nestjs/common';

@EntityRepository(User)
@Injectable()
export class UserRepository {
  async findAll(): Promise<User[]> {
    return await User.createQueryBuilder('u').getRawMany();
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
}
