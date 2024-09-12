// Component Interface: FileSystemComponent
interface FileSystemComponent {
    getName(): string;
    createIterator(): IIterator<FileSystemComponent>;
  }
  
  // File class (Leaf)
  class File implements FileSystemComponent {
    constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  
    public createIterator(): IIterator<FileSystemComponent> {
      return new NullIterator(); // Files are leaves, they don't have children
    }
  }
  
  // Folder class (Composite)
  class Folder implements FileSystemComponent {
    private components: FileSystemComponent[] = [];
  
    constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  
    public add(component: FileSystemComponent): void {
      this.components.push(component);
    }
  
    public createIterator(): IIterator<FileSystemComponent> {
      return new FileSystemIterator(this.components);
    }
  }
  
  // Iterator interface
  interface IIterator<T> {
    next(): T | null;
    hasNext(): boolean;
  }
  
  // Null Iterator for files (since files don't have children)
  class NullIterator implements IIterator<FileSystemComponent> {
    public next(): FileSystemComponent | null {
      return null; // Files don't have children
    }
  
    public hasNext(): boolean {
      return false; // Files are leaves, no further iteration needed
    }
  }
  
  // Iterator for folder traversal
  class FileSystemIterator implements IIterator<FileSystemComponent> {
    private index: number = 0;
  
    constructor(private components: FileSystemComponent[]) {}
  
    public next(): FileSystemComponent | null {
      if (this.hasNext()) {
        return this.components[this.index++];
      }
      return null;
    }
  
    public hasNext(): boolean {
      return this.index < this.components.length;
    }
  }
  
  // Client code to traverse a folder structure
  const rootFolder = new Folder("Root");
  
  const subFolder1 = new Folder("Documents");
  subFolder1.add(new File("Resume.docx"));
  subFolder1.add(new File("CoverLetter.docx"));
  
  const subFolder2 = new Folder("Pictures");
  subFolder2.add(new File("Vacation.jpg"));
  subFolder2.add(new File("ProfilePic.png"));
  
  rootFolder.add(subFolder1);
  rootFolder.add(subFolder2);
  rootFolder.add(new File("README.txt"));
  
  // Create iterator for the root folder and traverse its contents
  const iterator = rootFolder.createIterator();
  console.log(iterator);
  
  console.log("Traversing Root Folder:");
  while (iterator.hasNext()) {
    const component = iterator.next();
    console.log(`Found: ${component?.getName()}`);
    const subIterator = component?.createIterator();
  
    // If the component is a folder, traverse it too
    if (subIterator) {
      while (subIterator.hasNext()) {
        const subComponent = subIterator.next();
        console.log(`  In Folder ${component?.getName()}: ${subComponent?.getName()}`);
      }
    }
  }