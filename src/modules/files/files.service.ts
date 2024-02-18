import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FILE_REPOSITORY } from '../../core/constants';
import { File } from './entities/file.entity';
import * as path from 'path';
import { unlink } from 'node:fs/promises';
import * as process from 'process';
@Injectable()
export class FilesService {
    constructor(
        @Inject(FILE_REPOSITORY) private readonly fileRepository: typeof File
    ) {}
    async create(file: Express.Multer.File) {
        return await this.fileRepository.create({
            filename: file.filename,
            destination: file.destination,
            path: file.path,
            type: file.mimetype
        });
    }

    async findOne(id: number) {
        return await this.fileRepository.findByPk(id);
    }

    async remove(id: number) {
        const file = await this.findOne(id);

        if (!file) throw new BadRequestException();

        try {
            await unlink(path.join(process.cwd(), file.path));
        } catch (err) {
            throw new BadRequestException(err);
        }

        return await this.fileRepository.destroy({
            where: {
                id
            }
        });
    }
}
