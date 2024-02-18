import {
    Controller,
    Get,
    Param,
    Delete,
    Res,
    StreamableFile
} from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
@ApiTags('files')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

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
