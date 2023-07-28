import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TaskUser } from './models/TaskUser';
import { User } from '../user/models/User';
import { Task } from '../task/models/Task';
import { UserService } from '../user/user.service';
import { TaskService } from '../task/task.service';
import { UserRoleEnum } from '../user/enums/UserRoleEnum';

@Injectable()
export class TaskUserService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    @Inject(forwardRef(() => TaskService))
    private taskService: TaskService,
  ) {}

  async create(
    idTask: number,
    idUser: number,
    userRole: UserRoleEnum,
  ): Promise<TaskUser> {
    const user: User = await this.userService.findEntity(idUser);
    const task: Task = await this.taskService.findEntity(idTask);
    if (user && task) {
      try {
        const taskUser: TaskUser = new TaskUser();
        taskUser.user = user;
        taskUser.tasks = task;
        taskUser.userRole = userRole;
        await taskUser.save();
        return taskUser;
      } catch (e) {
        throw new BadRequestException();
      }
    }
    throw new NotFoundException();
  }
}
