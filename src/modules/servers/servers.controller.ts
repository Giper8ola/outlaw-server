import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ServersService } from './servers.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.cluster)
@ApiTags('servers')
@Controller('servers')
export class ServersController {
    constructor(private readonly serversService: ServersService) {}
    @Post('create')
    async create(@Body() createServerDto: CreateServerDto) {
        return await this.serversService.create(createServerDto);
    }

    @Patch('update:id')
    async update(
        @Param('id') id: string,
        @Body() updateServerDto: UpdateServerDto
    ) {
        return await this.serversService.update(+id, updateServerDto);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.serversService.remove(+id);
    }
}
