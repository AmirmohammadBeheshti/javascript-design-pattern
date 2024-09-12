// Iterator interface
interface IIterator<T> {
    next(): T | null;
    hasNext(): boolean;
  }
  
  // Collection interface
  interface IAggregate<T> {
    createIterator(): IIterator<T>;
  }
  
  // Concrete iterator for a collection of books
  class BookIterator implements IIterator<string> {
    private collection: BookCollection;
    private index: number = 0;
  
    constructor(collection: BookCollection) {
      this.collection = collection;
    }
  
    public next(): string | null {
      if (this.hasNext()) {
        return this.collection.getBookAt(this.index++);
      }
      return null;
    }
  
    public hasNext(): boolean {
      return this.index < this.collection.getLength();
    }
  }
  
  // Concrete collection (Aggregate) of books
  class BookCollection implements IAggregate<string> {
    private books: string[] = [];
  
    public addBook(book: string): void {
      this.books.push(book);
    }
  
    public getBookAt(index: number): string {
      return this.books[index];
    }
  
    public getLength(): number {
      return this.books.length;
    }
  
    public createIterator(): IIterator<string> {
      return new BookIterator(this);
    }
  }
  
  // Usage Example
  const myBooks = new BookCollection();
  myBooks.addBook("The Great Gatsby");
  myBooks.addBook("1984");
  myBooks.addBook("To Kill a Mockingbird");
  
  const iterator = myBooks.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next());
  