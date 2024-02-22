import {
    Body,
    Controller,
    Delete,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { ClustersService } from './clusters.service';
import { CreateClusterDto } from './dto/create-cluster.dto';
import { UpdateClusterDto } from './dto/update-cluster.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.cluster)
@ApiTags('clusters')
@Controller('clusters')
export class ClustersController {
    constructor(private readonly clustersService: ClustersService) {}
    @UseInterceptors(
        FileInterceptor('icon', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    async create(
        @Body() createClusterDto: CreateClusterDto,
        @UploadedFile() icon: Express.Multer.File
    ) {
        return await this.clustersService.create(createClusterDto, icon);
    }

    @Patch('update:id')
    async update(
        @Param('id') id: string,
        @Body() updateClusterDto: UpdateClusterDto
    ) {
        return await this.clustersService.update(+id, updateClusterDto);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.clustersService.remove(+id);
    }
}
