import {Prototype}  from './interface/prototype.interface'

class DocumentPrototype implements Prototype {
    public title: string;
    public content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    clone(): this {
        // Shallow copy of the instance
        const copy = Object.create(this);
        copy.title = this.title;
        copy.content = this.content;
        return copy;
    }

    display(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
}

class Resume extends DocumentPrototype {
    public candidateName: string;

    constructor(candidateName: string, content: string) {
        super("Resume", content);
        this.candidateName = candidateName;
    }

    clone(): this {
        const copy = super.clone() as this;
        copy.candidateName = this.candidateName;
        return copy;
    }

    display(): void {
        super.display();
        console.log(`Candidate: ${this.candidateName}`);
    }
}


class Report extends DocumentPrototype {
    public author: string;

    constructor(author: string, content: string) {
        super("Report", content);
        this.author = author;
    }

    clone(): this {
        const copy = super.clone() as this;
        copy.author = this.author;
        return copy;
    }

    display(): void {
        super.display();
        console.log(`Author: ${this.author}`);
    }
}
