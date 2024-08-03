import { Cannon as TCannon } from "../api/cannon/Cannon";

export const CANNON_TITLE_FIELD = "id";

export const CannonTitle = (record: TCannon): string => {
  return record.id?.toString() || String(record.id);
};
