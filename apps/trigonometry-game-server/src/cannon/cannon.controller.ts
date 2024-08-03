import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CannonService } from "./cannon.service";
import { CannonControllerBase } from "./base/cannon.controller.base";

@swagger.ApiTags("cannons")
@common.Controller("cannons")
export class CannonController extends CannonControllerBase {
  constructor(protected readonly service: CannonService) {
    super(service);
  }
}
