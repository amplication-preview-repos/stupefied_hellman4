import { CannonWhereInput } from "./CannonWhereInput";
import { CannonOrderByInput } from "./CannonOrderByInput";

export type CannonFindManyArgs = {
  where?: CannonWhereInput;
  orderBy?: Array<CannonOrderByInput>;
  skip?: number;
  take?: number;
};
