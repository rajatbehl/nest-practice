import { Body, Controller, Get, Optional, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ParamDto } from './dto/param.dto';

@Controller('/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // @Inject()
  // private readonly employeeService : EmployeeService;

  // @Get()
  // async getEmployees(): Promise<string> {
  //   return this.employeeService.getEmployees();
  // }

  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto ): Promise<string> {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get(':id')
  async getEmployee(@Param('id', ParseIntPipe) id : number) : Promise<string>{
    return this.employeeService.getEmployeeById(id);
  }

  @Put(':id')
  async updateEmployee(@Param() id : number, @Body() updateEmployeeDto : UpdateEmployeeDto) : Promise<string> {
    console.log(typeof id === 'number');
    return this.employeeService.updateEmployee(id, updateEmployeeDto);
  }

  @Get()
  async search(@Optional() @Query('name') name : string, @Query('id', ParseUUIDPipe) id : number) {
    return this.employeeService.search(name, id);
  }

}
