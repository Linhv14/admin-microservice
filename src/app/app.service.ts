import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ServiceRepository } from './service.repository';
import { CreateServiceDTO, DeleteServiceDTO, UpdateServiceDTO } from 'src/shared/service.dto';
import { type Prisma } from '@prisma/client';
@Injectable()
export class AppService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly serviceRepository: ServiceRepository,
  ) { }

  async getService() {
    return await this.serviceRepository.findAll()
  }

  async createService(serviceDTO: CreateServiceDTO) {
    const isExistedService = await this._isExistedByUnique({ name: serviceDTO.name })
    if (isExistedService) return { error: "Service is already exists!" }
    return await this.serviceRepository.create(serviceDTO)
  }

  async updateService(serviceDTO: UpdateServiceDTO) {
    const { ID, name } = serviceDTO
    const isExistedServiceID = await this._isExistedByUnique({ ID })
    if (!isExistedServiceID) return { error: "Service not found" }
    const isExistedServiceName = await this._isExistedField({ name })
    if (isExistedServiceName) return { error: "Service is already exists!" }
    return await this.serviceRepository.update({ ID }, { name })
  }

  async deleteService(serviceDTO: DeleteServiceDTO) {
    console.log(typeof serviceDTO.ID)
    return await this.serviceRepository.delete({ ID: serviceDTO.ID })
  }

  private async _isExistedByUnique(field: Prisma.ServiceWhereUniqueInput) {
    return await this.serviceRepository.findUnique(field)
  }

  private async _isExistedField(field: Prisma.ServiceWhereInput) {
    return await this.serviceRepository.findFirst(field)
  }
}
