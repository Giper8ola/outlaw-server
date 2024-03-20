import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Res,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Express, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';
import { CreateFileDto } from './dto/create-file.dto';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.FILE)
@ApiTags('files')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @UseInterceptors(
        FileInterceptor('file', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    async create(
        @Body() createFileDto: CreateFileDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return await this.filesService.create(file);
    }

    @Get('findOne:id')
    async findOne(
        @Res({ passthrough: true }) res: Response,
        @Param('id') id: string
    ): Promise<StreamableFile> {
        const fileData = await this.filesService.findOne(+id);
        const file = createReadStream(join(process.cwd(), fileData.path));
        res.set({
            'Content-Type': fileData.type
        });
        return new StreamableFile(file);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.filesService.remove(+id);
    }
}
