import { IsInt, IsString } from "class-validator";

export class UpdateEmployeeDto {

    @IsString()
    position: string;
}