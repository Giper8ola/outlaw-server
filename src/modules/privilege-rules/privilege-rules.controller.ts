import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { PrivilegeRulesService } from './privilege-rules.service';
import { CreatePrivilegeRuleDto } from './dto/create-privilege-rule.dto';
import { UpdatePrivilegeRuleDto } from './dto/update-privilege-rule.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.PRIVILEGE)
@ApiTags('privilege-rules')
@Controller('privilege-rules')
export class PrivilegeRulesController {
    constructor(
        private readonly privilegeRulesService: PrivilegeRulesService
    ) {}

    @Post('create')
    async create(@Body() createPrivilegeRuleDto: CreatePrivilegeRuleDto) {
        return await this.privilegeRulesService.create(createPrivilegeRuleDto);
    }

    @Patch('update/:id')
    async update(
        @Param('id') id: string,
        @Body() updatePrivilegeRuleDto: UpdatePrivilegeRuleDto
    ) {
        return await this.privilegeRulesService.update(
            +id,
            updatePrivilegeRuleDto
        );
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        return await this.privilegeRulesService.remove(+id);
    }
}
