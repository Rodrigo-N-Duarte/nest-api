import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../task/models/Task';
import { Employee } from '../users/models/Employee';
import { Boss } from '../users/models/Boss';

export const TypeOrmDBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest-api',
  entities: [Task, Employee, Boss],
  synchronize: true,
});
