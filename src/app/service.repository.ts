import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { asyncScheduler } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: Prisma.ServiceCreateInput) {
    return await this.prismaService.service.create({ data })
  }

  async update(where: Prisma.ServiceWhereUniqueInput, data: Prisma.ServiceUpdateInput) {
    return await this.prismaService.service.update({ where, data })

  }

  async upsert(where: Prisma.ServiceWhereUniqueInput, update: Prisma.ServiceUpdateInput, create: Prisma.ServiceCreateInput) {
    return await this.prismaService.service.upsert({ where, update, create })
  }

  async findUnique(where: Prisma.ServiceWhereUniqueInput) {
    return await this.prismaService.service.findUnique({ where })
  }

  async findUniqueWithoutField(where: Prisma.ServiceWhereUniqueInput, field: string) {
    return await this.prismaService.service.findUnique({ where })
  }

  async findAll() {
    return await this.prismaService.service.findMany()
  }

  async findMany(where: Prisma.ServiceWhereInput) {
    return await this.prismaService.service.findMany({ where })
  }

  async findFirst(where: Prisma.ServiceWhereInput) {
    return await this.prismaService.service.findFirst({ where })
  }

  async delete(where: Prisma.ServiceWhereUniqueInput) {
    return await this.prismaService.service.delete({ where })
  }

  async deleteMany(where: Prisma.ServiceWhereInput) {
    return await this.prismaService.service.deleteMany({ where })
  }

  async pagination(pages: { skip: number, take: number }) {
    return await this.prismaService.service.findMany(pages)
  }

  private _exclude(service: any, keys: string[]) {
    return Object.fromEntries(
      Object.entries(service).filter(([key]) => !keys.includes(key))
    );
  }
}
