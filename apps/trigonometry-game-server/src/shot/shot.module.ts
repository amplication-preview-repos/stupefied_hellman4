import { Module } from "@nestjs/common";
import { ShotModuleBase } from "./base/shot.module.base";
import { ShotService } from "./shot.service";
import { ShotController } from "./shot.controller";
import { ShotResolver } from "./shot.resolver";

@Module({
  imports: [ShotModuleBase],
  controllers: [ShotController],
  providers: [ShotService, ShotResolver],
  exports: [ShotService],
})
export class ShotModule {}
