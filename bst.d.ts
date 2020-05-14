declare module 'print-bst' {
  export default class BinarySearchTree {
    bulkInsert<T>(value: T[]): this;
    insert<T>(value: T): this;
    search<T>(value: T): boolean;
    remove<T>(value: T): boolean;
    print(): string;
  }
}
