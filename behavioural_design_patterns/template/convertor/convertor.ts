abstract class FileConverter {
    
    public convertFile(): void {
      this.readFile();
      this.convertContent();
      this.saveFile();
    }
  
    private readFile(): void {
      console.log('Reading the file from storage...');
      // Code to read file from storage
    }
  
    protected abstract convertContent(): void;
  
    private saveFile(): void {
      console.log('Saving the converted file...');
    }
  }
  
  
  class PDFConverter extends FileConverter {
    protected convertContent(): void {
      console.log('Converting content to PDF format...');
    }
  }
  
  class WordConverter extends FileConverter {
    protected convertContent(): void {
      console.log('Converting content to Word format...');
    }
  }
  
  class TextConverter extends FileConverter {
    protected convertContent(): void {
      console.log('Converting content to plain text format...');
    }
  }
  
  const pdfConverter = new PDFConverter();
  pdfConverter.convertFile(); 
  
  const wordConverter = new WordConverter();
  wordConverter.convertFile(); 
  
  const textConverter = new TextConverter();
  textConverter.convertFile(); 
  