import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { KitsService } from './kits.service';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.privilege)
@ApiTags('kits')
@Controller('kits')
export class KitsController {
    constructor(private readonly kitsService: KitsService) {}

    @Post('create')
    async create(@Body() createKitDto: CreateKitDto) {
        return await this.kitsService.create(createKitDto);
    }

    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() updateKitDto: UpdateKitDto) {
        return await this.kitsService.update(+id, updateKitDto);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        return await this.kitsService.remove(+id);
    }
}
