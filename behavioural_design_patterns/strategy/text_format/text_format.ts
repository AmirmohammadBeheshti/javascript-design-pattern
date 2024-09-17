interface IFormat {
  formatText(text: string): string;
}

interface IDocument {
  setFormatter(formatter: IFormat): boolean;
  showText(text: string): string;
}

class BoldFormat implements IFormat {
  formatText(text: string): string {
    return "**" + text + "**";
  }
}

class ItalicFormat implements IFormat {
  formatText(text: string): string {
    return "<i>" + text + "</i>";
  }
}

class DocumentFormat implements IDocument {
  constructor(format: IFormat) {
    this.format = format;
  }
  private format: IFormat;

  setFormatter(formatter: IFormat): boolean {
    try {
      this.format = formatter;
      return true;
    } catch (e) {
      return false;
    }
  }

  showText(text: string): string {
    return this.format.formatText(text);
  }
}

const bold = new BoldFormat();
const doc = new DocumentFormat(bold);
console.log(doc.showText("Amir"))

const italic = new ItalicFormat();
doc.setFormatter(italic)
console.log(doc.showText("Amir"))
