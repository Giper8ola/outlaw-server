import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ROLE_REPOSITORY } from '../../core/constants';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
    constructor(
        @Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role
    ) {}

    async create(data: CreateRoleDto) {
        console.log(data.areas);
        return await this.roleRepository.create({
            name: data.name,
            areas: data.areas
        });
    }

    async update(id: number, data: UpdateRoleDto) {
        return await this.roleRepository.update(data, {
            where: {
                id: id
            }
        });
    }

    async remove(id: number) {
        return await this.roleRepository.destroy({
            where: {
                id: id
            }
        });
    }

    async findOne(id: number) {
        return await this.roleRepository.findByPk(id);
    }
}
