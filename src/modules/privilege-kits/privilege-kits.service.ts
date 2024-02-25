import { Inject, Injectable } from '@nestjs/common';
import { CreatePrivilegeKitDto } from './dto/create-privilege-kit.dto';
import { UpdatePrivilegeKitDto } from './dto/update-privilege-kit.dto';
import { PRIVILEGE_KITS_REPOSITORY } from '../../core/constants';
import { PrivilegeKit } from './entities/privilege-kit.entity';

@Injectable()
export class PrivilegeKitsService {
    constructor(@Inject(PRIVILEGE_KITS_REPOSITORY) private readonly privilegeKitsRepository: typeof PrivilegeKit) {}

    async create(createPrivilegeKitDto: CreatePrivilegeKitDto) {
        return await this.privilegeKitsRepository.create(createPrivilegeKitDto);
    }

    async update(
        privilegeId: number,
        kitId: number,
        updatePrivilegeKitDto: UpdatePrivilegeKitDto
    ) {
        return await this.privilegeKitsRepository.update(updatePrivilegeKitDto, {
            where: {
                privilegeId: privilegeId,
                kitId: kitId
            }
        });
    }

    async remove(privilegeId: number, kitId: number, ) {
        return await this.privilegeKitsRepository.destroy({
            where: {
                privilegeId: privilegeId,
                kitId: kitId
            }
        });
    }
}
