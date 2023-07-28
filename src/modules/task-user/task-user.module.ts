import { forwardRef, Module } from '@nestjs/common';
import { TaskUserService } from './taskuser.service';
import { UserModule } from '../user/user.module';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [UserModule, forwardRef(() => TaskModule)],
  providers: [TaskUserService],
  exports: [TaskUserService],
})
export class TaskUserModule {}
