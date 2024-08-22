interface IFile {
    getName(): string;
    getSize(): number;
  }
  
  interface ICompositFileSystemComponent extends IFile {
    addFile(file: IFile): void;
    getFiles(file: IFile): IFile[];
  }
  
  class systemFile implements IFile {
    constructor(private readonly name: string, private readonly size: number) {}
  
    getName(): string {
      return this.name;
    }
  
    getSize(): number {
      return this.size;
    }
  }
  
  class Folder implements ICompositFileSystemComponent {
    private files: IFile[] = [];
    constructor(private name: string) {}
  
    getName(): string {
      return this.name;
    }
  
    getSize(): number {
      return this.files
        .reduce((total, currentValue) => total + currentValue.getSize(), 0);
    }
  
    addFile(file: IFile): void {
      this.files.push(file);
    }
  
    getFiles(file: IFile): IFile[] {
      return this.files.filter((val) => val.getName());
    }
  }
  
  const file1 = new systemFile("file1.csv", 10);
  const file2 = new systemFile("file2.txt", 20);
  
  const folder1 = new Folder("folder1");
  folder1.addFile(file1);
  folder1.addFile(file2);
  
  console.log(folder1);
  console.log(folder1.getSize());
  