// Platform-specific media players
class WindowsAudioPlayer {
    play(fileName: string) {
        console.log(`Playing audio file '${fileName}' on Windows`);
    }
}

class MacOSAudioPlayer {
    play(fileName: string) {
        console.log(`Playing audio file '${fileName}' on MacOS`);
    }
}

class WindowsVideoPlayer {
    play(fileName: string) {
        console.log(`Playing video file '${fileName}' on Windows`);
    }
}

class MacOSVideoPlayer {
    play(fileName: string) {
        console.log(`Playing video file '${fileName}' on MacOS`);
    }
}

// Client code
const windowsAudioPlayer = new WindowsAudioPlayer();
windowsAudioPlayer.play("song.mp3");

const macOsVideoPlayer = new MacOSVideoPlayer();
macOsVideoPlayer.play("movie.mp4");
