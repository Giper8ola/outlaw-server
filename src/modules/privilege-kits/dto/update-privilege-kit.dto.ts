import { PartialType } from '@nestjs/swagger';
import { CreatePrivilegeKitDto } from './create-privilege-kit.dto';

export class UpdatePrivilegeKitDto extends PartialType(CreatePrivilegeKitDto) {}
