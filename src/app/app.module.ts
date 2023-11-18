import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './user.repository';
import { ConfigModule } from '@nestjs/config';
import { ServiceRepository } from './service.repository';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule],
  controllers: [AppController],
  providers: [AppService, UserRepository, ServiceRepository],
})
export class AppModule {}
