import { UniqueID } from "../domain";

export interface Repository<T> {
  findById(id: UniqueID): Promise<T | undefined>;

  save(item: T): Promise<void>;
}
