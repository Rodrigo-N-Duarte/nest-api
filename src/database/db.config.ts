import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './entities';

export const TypeOrmDBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest-api',
  entities: Entities,
  synchronize: true,
});
