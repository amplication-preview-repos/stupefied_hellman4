import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShotService } from "./shot.service";
import { ShotControllerBase } from "./base/shot.controller.base";

@swagger.ApiTags("shots")
@common.Controller("shots")
export class ShotController extends ShotControllerBase {
  constructor(protected readonly service: ShotService) {
    super(service);
  }
}
