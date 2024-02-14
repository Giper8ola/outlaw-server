import { applyDecorators, UseGuards } from '@nestjs/common';
import { AreasEnum } from '../../modules/roles/enums/AreasEnum';
import { Area } from './area.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';

export function AuthWithArea(areas: AreasEnum) {
    return applyDecorators(Area(areas), UseGuards(AuthGuard, RoleGuard));
}
