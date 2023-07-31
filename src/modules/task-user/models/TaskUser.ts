import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/models/User';
import { Task } from '../../task/models/Task';
import { UserRoleEnum } from '../../user/enums/UserRoleEnum';

@Entity()
export class TaskUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
  @ManyToOne(() => Task, (tasks) => tasks.users)
  tasks: Task;
  @Column({
    type: 'enum',
    enum: UserRoleEnum,
  })
  userRole: UserRoleEnum;
}
