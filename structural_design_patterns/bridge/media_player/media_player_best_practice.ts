interface Platform {
    playFile(fileName: string, mediaType: string): void;
}

class WindowsPlatform implements Platform {
    playFile(fileName: string, mediaType: string): void {
        console.log(`Playing ${mediaType} file '${fileName}' on Windows`);
    }
}

class MacOSPlatform implements Platform {
    playFile(fileName: string, mediaType: string): void {
        console.log(`Playing ${mediaType} file '${fileName}' on MacOS`);
    }
}

abstract class Media {
    constructor(protected platform: Platform) {}

    abstract play(fileName: string): void;
}

class Audio extends Media {
    
    play(fileName: string): void {
        this.platform.playFile(fileName, "audio");
    }
}

class Video extends Media {
    play(fileName: string): void {
        this.platform.playFile(fileName, "video");
    }
}

// Client code
const windowsPlatform = new WindowsPlatform();
const macOsPlatform = new MacOSPlatform();


const videoPlayer = new Video(macOsPlatform);
videoPlayer.play("movie.mp4");
