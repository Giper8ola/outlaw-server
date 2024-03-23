import { IntersectionType, OmitType, PartialType } from '@nestjs/swagger';
import { CreateServerDto } from './create-server.dto';

class AdditionalUpdateServerDto {
    online: number;
}
export class UpdateServerDto extends PartialType(
    IntersectionType(
        OmitType(CreateServerDto, ['version', 'clusterId'] as const),
        AdditionalUpdateServerDto
    )
) {}
