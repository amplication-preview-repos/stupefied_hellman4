import { Module } from "@nestjs/common";
import { CannonModuleBase } from "./base/cannon.module.base";
import { CannonService } from "./cannon.service";
import { CannonController } from "./cannon.controller";
import { CannonResolver } from "./cannon.resolver";

@Module({
  imports: [CannonModuleBase],
  controllers: [CannonController],
  providers: [CannonService, CannonResolver],
  exports: [CannonService],
})
export class CannonModule {}
