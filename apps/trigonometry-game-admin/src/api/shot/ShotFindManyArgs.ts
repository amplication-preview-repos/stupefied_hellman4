import { ShotWhereInput } from "./ShotWhereInput";
import { ShotOrderByInput } from "./ShotOrderByInput";

export type ShotFindManyArgs = {
  where?: ShotWhereInput;
  orderBy?: Array<ShotOrderByInput>;
  skip?: number;
  take?: number;
};
