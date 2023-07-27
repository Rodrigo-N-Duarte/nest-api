import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserRoleEnum } from '../modules/user/enums/UserRoleEnum';

@Injectable()
export class UserRolePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Object.values(UserRoleEnum).includes(value)) {
      throw new BadRequestException(
        'Validation failed, the user type has to be an existent type',
      );
    }
    return value;
  }
}
