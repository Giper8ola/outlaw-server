import { Inject, Injectable } from '@nestjs/common';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { PRIVILEGE_REPOSITORY } from '../../core/constants';
import { Privilege } from './entities/privilege.entity';

@Injectable()
export class PrivilegesService {
    constructor(
        @Inject(PRIVILEGE_REPOSITORY)
        private readonly privilegeRepository: typeof Privilege
    ) {}
    async create(createPrivilegeDto: CreatePrivilegeDto) {
        return await this.privilegeRepository.create(createPrivilegeDto);
    }

    async update(id: number, updatePrivilegeDto: UpdatePrivilegeDto) {
        return await this.privilegeRepository.update(updatePrivilegeDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.privilegeRepository.destroy({
            where: {
                id
            }
        });
    }
}
