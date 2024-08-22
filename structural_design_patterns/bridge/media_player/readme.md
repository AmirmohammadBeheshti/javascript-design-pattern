# Why This Scenario Is Bad 
```JS
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

```


* Code Duplication

    Problem: Each combination of media type and platform results in a separate class.
    Consequence: This leads to repetitive code, making the system bloated and hard to manage. If there are more media types and platforms, the number of classes grows exponentially.

* Lack of Flexibility

    Problem: Adding a new media type or a new platform requires creating multiple new classes for each combination.
    Consequence: This approach does not scale well. Every time you add a new feature, you have to modify the codebase significantly, which is error-prone and time-consuming.

* Maintenance Difficulties

    Problem: Changes in the logic for playing media files need to be duplicated across multiple classes.
    Consequence: If a bug is found in the playing logic, you must fix it in every class that implements similar functionality. This increases the likelihood of inconsistencies and bugs.

* Tight Coupling

    Problem: Media types and platforms are tightly coupled, meaning that each media type is directly linked to each platform.
    Consequence: This tight coupling makes it difficult to extend or modify the system. You cannot easily swap out or modify platforms without affecting the media types.