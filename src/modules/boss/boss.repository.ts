import { DeleteResult, EntityRepository } from 'typeorm';
import { User } from '../user/models/User';
import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../user/dto/UserDTO';
import { Boss } from './models/Boss';

@EntityRepository(Boss)
@Injectable()
export class BossRepository {
  async findAll(): Promise<any[]> {
    return await Boss.createQueryBuilder('b').getMany();
  }

  async findOne(id: number): Promise<Boss> {
    return await Boss.createQueryBuilder('b')
      .where('b.id = :id', { id: id })
      .getOne();
  }

  async findByEmail(email: string): Promise<Boss> {
    return await Boss.createQueryBuilder('b')
      .where('b.email = :email', { email: email })
      .getOne();
  }

  async update(
    id: number,
    { name, email, password }: UpdateUserDTO,
  ): Promise<any> {
    return await Boss.createQueryBuilder()
      .update(Boss)
      .set({
        name: name,
        email: email,
        password: password,
      })
      .where('id = :id', { id: id })
      .execute();
  }

  async deleteOne(id: number): Promise<any> {
    return await Boss.createQueryBuilder()
      .softDelete()
      .from(Boss, 'b')
      .where('b.id = :id', { id: id })
      .execute();
  }
}
