import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { EmployeeModule } from "./employees/employee.module";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { EmployeeController } from "./employees/employee.controller";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
    imports: [EmployeeModule, AuthModule, UsersModule, CandidateModule]
})
export class AppModule implements NestModule{
 
   async configure(consumer: MiddlewareConsumer) {
        consumer
           .apply(LoggerMiddleware)
           .forRoutes(EmployeeController);
    }
}