import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Param,
    Patch,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../../core/enums/AreasEnum';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@ApiBearerAuth()
@ApiTags('items')
@Controller('items')
@AuthWithArea(AreasEnum.ITEM)
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @UseInterceptors(
        FileInterceptor('icon', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    async create(
        @Body() createItemDto: CreateItemDto,
        @UploadedFile() icon: Express.Multer.File
    ) {
        if (!icon)
            throw new BadRequestException('Необходимо указать иконку предмета');
        return await this.itemsService.create(createItemDto, icon);
    }

    @Patch('update:id')
    async update(
        @Param('id') id: string,
        @Body() updateItemDto: UpdateItemDto
    ) {
        return await this.itemsService.update(+id, updateItemDto);
    }

    @Delete('delete:id')
    async remove(@Param('id') id: string) {
        return await this.itemsService.remove(+id);
    }
}
