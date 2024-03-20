import { Inject, Injectable } from '@nestjs/common';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { KITS_REPOSITORY } from '../../core/constants';
import { Kit } from './entities/kit.entity';

@Injectable()
export class KitsService {
    constructor(
        @Inject(KITS_REPOSITORY) private readonly kitsRepository: typeof Kit
    ) {}
    async create(createKitDto: CreateKitDto) {
        return await this.kitsRepository.create(createKitDto);
    }

    async update(id: number, updateKitDto: UpdateKitDto) {
        return await this.kitsRepository.update(updateKitDto, {
            where: {
                id
            }
        });
    }

    async remove(id: number) {
        return await this.kitsRepository.destroy({
            where: {
                id
            }
        });
    }
}
