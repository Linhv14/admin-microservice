import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './user.repository';


@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, UserRepository],
})
export class AppModule {}
