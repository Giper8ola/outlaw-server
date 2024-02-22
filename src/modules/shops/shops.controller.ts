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
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { AuthWithArea } from '../../core/decorators/authWithArea.decorator';
import { AreasEnum } from '../roles/enums/AreasEnum';

@ApiBearerAuth()
@AuthWithArea(AreasEnum.shop)
@ApiTags('shops')
@Controller('shops')
export class ShopsController {
    constructor(private readonly shopsService: ShopsService) {}
    @UseInterceptors(
        FileInterceptor('icon', {
            dest: 'uploads'
        })
    )
    @ApiConsumes('multipart/form-data')
    @Post('create')
    async create(
        @Body() createShopDto: CreateShopDto,
        @UploadedFile() icon: Express.Multer.File
    ) {
        return this.shopsService.create(createShopDto, icon);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
        return this.shopsService.update(+id, updateShopDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.shopsService.remove(+id);
    }
}
