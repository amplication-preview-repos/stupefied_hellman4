import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AngleService } from "./angle.service";
import { AngleControllerBase } from "./base/angle.controller.base";

@swagger.ApiTags("angles")
@common.Controller("angles")
export class AngleController extends AngleControllerBase {
  constructor(protected readonly service: AngleService) {
    super(service);
  }
}
