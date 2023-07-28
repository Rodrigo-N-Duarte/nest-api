import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/models/User';
import { Task } from './models/Task';
import { TaskUserService } from '../task-user/taskuser.service';
import { TaskRepository } from './task.repository';
import { UserRoleEnum } from '../user/enums/UserRoleEnum';

@Injectable()
export class TaskService {
  constructor(
    private userService: UserService,
    @Inject(forwardRef(() => TaskUserService))
    private taskUserService: TaskUserService,
    private taskRepository: TaskRepository,
  ) {}

  async createTask(body): Promise<Task> {
    const { idUser, name, description, startDate, endDate } = body;
    const owner: User = await this.userService.findEntity(idUser);
    if (owner) {
      try {
        const task: Task = new Task();
        task.name = name;
        task.description = description;
        task.startDate = startDate;
        task.endDate = endDate;
        await task.save();
        await this.taskUserService.create(task.id, idUser, UserRoleEnum.OWNER);
        return task;
      } catch (e) {
        throw new BadRequestException();
      }
    }
    throw new NotFoundException();
  }

  async findEntity(id: number) {
    const task: Task = await this.taskRepository.findEntity(id);
    if (task) {
      return task;
    }
  }
}
