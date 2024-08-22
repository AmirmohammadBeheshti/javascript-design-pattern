interface IData {
    text : string
}

const data : IData = {
    text : "Hello World"
}

interface IDataSource {
    writeDate(data : IData ) : void
    readData(data : IData ) : IData
}

class FileDataSource implements IDataSource {
    readData(data: IData): IData {
        console.log("Read Data" );
        return data
    }
    writeDate(data: IData): void {
        console.log("Write Data => " , data);
    }
}

abstract class FileDataSourceDecorator implements IDataSource {
    constructor(protected fileData : FileDataSource){}
    readData(data: IData): IData {
        return this.fileData.readData(data)
    }

    writeDate(data: IData): void {}
}

class EncryptionText extends FileDataSourceDecorator {
    writeDate(data: IData): void {
        console.log("Data Is Encrypted ");
        this.fileData.writeDate(data)
    }
}

let file = new FileDataSource()

file = new EncryptionText(file)

file.writeDate(data)

