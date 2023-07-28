import { EntityRepository } from 'typeorm';
import { Task } from './models/Task';

@EntityRepository(Task)
export class TaskRepository {
  async findEntity(id: number) {
    return await Task.createQueryBuilder('t')
      .where('t.id = :id', { id: id })
      .getOne();
  }
}
