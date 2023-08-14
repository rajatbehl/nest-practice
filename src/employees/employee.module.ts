import { Global, Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Global()
@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  /**
   * in order to allow other modules to use the
   * same employee service instance.
   */
  exports : [EmployeeService] 
})
export class EmployeeModule {}
