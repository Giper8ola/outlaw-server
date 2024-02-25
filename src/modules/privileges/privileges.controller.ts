import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.privilege)
@ApiTags('privileges')
@Controller('privileges')
export class PrivilegesController {
    constructor(private readonly privilegesService: PrivilegesService) {}

    @Post('create')
    async create(@Body() createPrivilegeDto: CreatePrivilegeDto) {
        return await this.privilegesService.create(createPrivilegeDto);
    }

    @Patch('update/:id')
    async update(@Param('id') id: string, @Body() updatePrivilegeDto: UpdatePrivilegeDto) {
        return await this.privilegesService.update(+id, updatePrivilegeDto);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        return await this.privilegesService.remove(+id);
    }
}
