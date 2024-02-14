import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/CreateUserDto';
import { USER_REPOSITORY } from '../../core/constants';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
    ) {}

    async create(user: CreateUserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(name: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { name } });
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }

    async update(userId: number, data: UpdateUserDto) {
        return await this.userRepository.update(data, {
            where: {
                id: userId
            }
        });
    }
}
