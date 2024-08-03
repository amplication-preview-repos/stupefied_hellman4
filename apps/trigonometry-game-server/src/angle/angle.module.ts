import { Module } from "@nestjs/common";
import { AngleModuleBase } from "./base/angle.module.base";
import { AngleService } from "./angle.service";
import { AngleController } from "./angle.controller";
import { AngleResolver } from "./angle.resolver";

@Module({
  imports: [AngleModuleBase],
  controllers: [AngleController],
  providers: [AngleService, AngleResolver],
  exports: [AngleService],
})
export class AngleModule {}
