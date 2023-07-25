import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';

export const TypeOrmDBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest-api',
  entities: entities,
  synchronize: true,
});
