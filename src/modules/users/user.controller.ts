import { Controller, Patch, UseGuards, Request, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../core/guards/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Patch('update')
    async update(@Request() req, @Body() data: UpdateUserDto) {
        console.log(req.user.id);
        return await this.userService.update(req.user.id, data);
    }
}
