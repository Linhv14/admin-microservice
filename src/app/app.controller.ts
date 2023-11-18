
import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateServiceDTO, DeleteServiceDTO, UpdateServiceDTO } from 'src/shared/service.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('admin.get-service')
  getService() {
    return this.appService.getService();
  }

  @MessagePattern('admin.create-service')
  createService(@Payload(ValidationPipe) service: CreateServiceDTO) {
    return this.appService.createService(service);
  }

  @MessagePattern('admin.update-service')
  updateService(@Payload(ValidationPipe) service: UpdateServiceDTO) {
    return this.appService.updateService(service);
  }

  @EventPattern('admin.delete-service')
  deleteService(@Payload(ValidationPipe) service: DeleteServiceDTO) {
    return this.appService.deleteService(service);
  }
}
