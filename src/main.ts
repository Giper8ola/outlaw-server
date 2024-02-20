import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Role } from './modules/roles/entities/role.entity';
import { AreasEnum } from './modules/roles/enums/AreasEnum';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api/v1');

    const config = new DocumentBuilder()
        .setTitle('Outlaw API')
        .setVersion('1.0')
        .addTag('cats')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);

    const role = await Role.findOne({
        where: {
            name: 'Admin'
        }
    });
    if (Object.values(AreasEnum).length > role?.areas.length || !role) {
        if (role) {
            await Role.destroy({
                where: {
                    name: 'Admin'
                }
            });
        }
        await Role.create({
            name: 'Admin',
            areas: Object.values(AreasEnum)
        });
    }
}
bootstrap();
