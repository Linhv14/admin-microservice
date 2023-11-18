import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateServiceDTO {
    name: string
}

export class UpdateServiceDTO {
    ID: number
    name: string
}

export class DeleteServiceDTO {
    ID: number
}