export interface Controller<T> {
  getAll(): Promise<T[]>;

  getOne(id: string): Promise<T>;

  addOne(item: T): Promise<number>;

  deleteOne(id: string): Promise<void>;

  updateOne(id: string, newItem: T): Promise<T[]>;
}
