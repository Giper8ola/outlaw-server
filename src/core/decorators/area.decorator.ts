import { SetMetadata } from '@nestjs/common';
import { AreasEnum } from '../../modules/roles/enums/AreasEnum';
export const AREA_KEY = 'area';
export const Area = (...area: AreasEnum[]) => SetMetadata(AREA_KEY, area);
