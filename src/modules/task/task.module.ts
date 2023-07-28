import { forwardRef, Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { TaskUserService } from '../task-user/taskuser.service';
import { TaskUserModule } from '../task-user/task-user.module';
import { TaskRepository } from './task.repository';

@Module({
  imports: [UserModule, forwardRef(() => TaskUserModule)],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
  exports: [TaskService, TaskRepository],
})
export class TaskModule {}
