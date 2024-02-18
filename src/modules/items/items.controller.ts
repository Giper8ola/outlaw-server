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
import { AreasEnum } from '../roles/enums/AreasEnum';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@ApiBearerAuth()
@ApiTags('items')
@Controller('items')
@AuthWithArea(AreasEnum.item)
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @UseInterceptors(
        FileInterceptor('icon', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    create(
        @Body() createItemDto: CreateItemDto,
        @UploadedFile() icon: Express.Multer.File
    ) {
        if(!icon) throw new BadRequestException("Необходимо указать иконку предмета")
        return this.itemsService.create(createItemDto, icon);
    }

    @Patch('update:id')
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
        return this.itemsService.update(+id, updateItemDto);
    }

    @Delete('delete:id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(+id);
    }
}
