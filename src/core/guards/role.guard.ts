import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AREA_KEY } from '../decorators/area.decorator';
import { AreasEnum } from '../../modules/roles/enums/AreasEnum';
import { RolesService } from '../../modules/roles/roles.service';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private readonly roleService: RolesService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredAreas = this.reflector.getAllAndOverride<AreasEnum[]>(
            AREA_KEY,
            [context.getHandler(), context.getClass()]
        );

        if (!requiredAreas) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const role = await this.roleService.findOne(user.roleId);

        if (role)
            return requiredAreas.some((area) => role?.areas?.includes(area));
    }
}
