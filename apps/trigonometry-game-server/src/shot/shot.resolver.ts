import * as graphql from "@nestjs/graphql";
import { ShotResolverBase } from "./base/shot.resolver.base";
import { Shot } from "./base/Shot";
import { ShotService } from "./shot.service";

@graphql.Resolver(() => Shot)
export class ShotResolver extends ShotResolverBase {
  constructor(protected readonly service: ShotService) {
    super(service);
  }
}
