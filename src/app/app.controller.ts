
import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateServiceDTO, UpdateServiceDTO } from 'src/shared/service.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('admin.get-service')
  getService() {
    return this.appService.getService();
  }

  @MessagePattern('admin.create-service')
  createService(@Payload(ValidationPipe) { name }: { name: string }) {
    return this.appService.createService(name);
  }

  @MessagePattern('admin.update-service')
  updateService(@Payload(ValidationPipe) service: UpdateServiceDTO) {
    return this.appService.updateService(service);
  }

  @EventPattern('admin.delete-service')
  deleteService(@Payload(ValidationPipe) { ID }: { ID: number }) {
    return this.appService.deleteService(ID);
  }
}
