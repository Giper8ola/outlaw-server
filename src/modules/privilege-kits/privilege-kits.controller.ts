import { Body, Controller, Delete, Patch, Post, Query } from '@nestjs/common';
import { PrivilegeKitsService } from './privilege-kits.service';
import { CreatePrivilegeKitDto } from './dto/create-privilege-kit.dto';
import { UpdatePrivilegeKitDto } from './dto/update-privilege-kit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.PRIVILEGE)
@ApiTags('privilege-kits')
@Controller('privilege-kits')
export class PrivilegeKitsController {
    constructor(private readonly privilegeKitsService: PrivilegeKitsService) {}

    @Post('create')
    async create(@Body() createPrivilegeKitDto: CreatePrivilegeKitDto) {
        return await this.privilegeKitsService.create(createPrivilegeKitDto);
    }

    @Patch('update')
    async update(
        @Query('privilegeId') privilegeId: string,
        @Query('kitId') kitId: string,
        @Body() updatePrivilegeKitDto: UpdatePrivilegeKitDto
    ) {
        return await this.privilegeKitsService.update(
            +privilegeId,
            +kitId,
            updatePrivilegeKitDto
        );
    }

    @Delete('delete')
    async remove(
        @Query('privilegeId') privilegeId: string,
        @Query('kitId') kitId: string
    ) {
        return await this.privilegeKitsService.remove(+privilegeId, +kitId);
    }
}
