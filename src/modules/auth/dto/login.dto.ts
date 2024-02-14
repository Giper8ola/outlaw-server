import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from '../../users/dto/CreateUserDto';

export class LoginUserDto extends OmitType(CreateUserDto, ['name'] as const) {}
