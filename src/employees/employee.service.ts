import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';



@Injectable()
export class EmployeeService {
  getEmployees(): string {
    return 'Hello World!';
  }

  createEmployee(createEmployeeDto : CreateEmployeeDto) : string {
    return `creating employee with request #${JSON.stringify(createEmployeeDto)}`;
  }

  getEmployeeById(id : number) : string {
    return `getting employee by #${id}`;
  }

  updateEmployee(id: number, updateEmployeeDto : UpdateEmployeeDto) : string {
    return `updating employee with id ${id}`;
  }

  search(name: string, id: number) {
    return `searching with name ${name} and id ${id}`;
  }
}
