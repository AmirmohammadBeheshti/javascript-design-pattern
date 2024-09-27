interface ICommand {
    execute(): void;
    undo(): void;
  }
  
  class MyFileSystem {
    private commandQueue: ICommand[] = [];
  
    public addCommand(command: ICommand) {
      this.commandQueue.push(command);
    }
  
    public executeCommand() {
      if (this.commandQueue.length > 0) {
        let command = this.commandQueue.shift();
        command?.execute();
      }
    }
  
    public undoCommand() {
      if (this.commandQueue.length > 0) {
        let command = this.commandQueue.pop();
        command?.undo();
      }
    }
  
    hasCommands(): boolean {
      return this.commandQueue.length > 0;
    }
  }
  
  class CreateFileCommand implements ICommand {
    private path: string;
  
    constructor(path: string) {
      this.path = path;
    }
  
    execute() {
      console.log(`Creating file at ${this.path}`);
      // Here would be logic for creating a file at the given path
    }
  
    undo() {
      console.log(`Deleting file at ${this.path}`);
      // Here would be logic for deleting a file at the given path
    }
  }
  
  class DeleteFileCommand implements ICommand {
    private path: string;
  
    constructor(path: string) {
      this.path = path;
    }
  
    execute() {
      console.log(`Deleting file at ${this.path}`);
      // Here would be logic for deleting a file at the given path
    }
  
    undo() {
      console.log(`Restoring file at ${this.path}`);
      // Here would be logic for restoring a file at the given path
    }
  }
  
  class UpdateFileCommand implements ICommand {
    private path: string;
    private newContent: string;
    private oldContent: string;
  
    constructor(path: string, newContent: string, oldContent: string) {
      this.path = path;
      this.newContent = newContent;
      this.oldContent = oldContent;
    }
  
    execute() {
      console.log(
        `Updating file at ${this.path} with new content: ${this.newContent}`
      );
      // Here would be logic for updating a file at the given path with the new content
    }
  
    undo() {
      console.log(
        `Reverting file at ${this.path} to old content: ${this.oldContent}`
      );
      // Here would be logic for reverting the file back to the old content
    }
  }
  
  class ReadFileCommand implements ICommand {
    private path: string;
  
    constructor(path: string) {
      this.path = path;
    }
  
    execute() {
      console.log(`Reading file at ${this.path}`);
      // Here would be logic for reading a file at the given path
    }
  
    undo() {
      console.log(
        `Undo operation not available for reading file at ${this.path}`
      );
      // Reading a file doesn't change its state, so there's nothing to undo
    }
  }
  
  let myFileSystem = new MyFileSystem();
  
  // Creating a file
  let createFileCommand = new CreateFileCommand("/path/to/simpleFile.txt");
  myFileSystem.addCommand(createFileCommand);
  
  // Updating the file
  let updateFileCommand = new UpdateFileCommand(
    "/path/to/myFile.txt",
    "new content",
    "old content"
  );
  myFileSystem.addCommand(updateFileCommand);
  
  // Reading the file
  let readFileCommand = new ReadFileCommand("/path/to/simpleFile.txt");
  myFileSystem.addCommand(readFileCommand);
  
  // Deleting the file
  let deleteFileCommand = new DeleteFileCommand("/path/to/simpleFile.txt");
  myFileSystem.addCommand(deleteFileCommand);
  
  // Executing commands in the queue
  while (myFileSystem.hasCommands()) {
    myFileSystem.executeCommand();
  }
  
  // Undoing the last command
  myFileSystem.undoCommand(); 