import {
    Controller,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Request,
    UseGuards
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AreasEnum } from './enums/AreasEnum';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';

@ApiBearerAuth()
@ApiTags('roles')
@Controller('roles')
@AuthWithArea(AreasEnum.area)
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}
    @Post('create')
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto);
    }

    @Patch('update:id')
    update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
        return this.rolesService.update(+id, updateRoleDto);
    }

    @Delete('delete:id')
    remove(@Param('id') id: string) {
        return this.rolesService.remove(+id);
    }
}
