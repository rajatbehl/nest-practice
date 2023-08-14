import { IsEnum, IsInt, IsPositive, IsString, MIN, Min } from "class-validator";

export class CreateEmployeeDto {

    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsInt()
    @Min(18)
    age: number;

    @IsString()
    department: string;

    @IsPositive()
    salary: number;

    
    position: string;
}