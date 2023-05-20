import { useState, useEffect, useRef } from 'react';
let audioContext;


function WebAudioTest() {
    const [file, setFile] = useState(null);

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();
    console.log(audioContext);

    // onClick for audio playback
    const handleAudioPlay = () => {
        if (audioContext === undefined) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioContext = new AudioContext();
            console.log(audioContext.state);
            if (!source.current) {
                source.current = audioContext.createMediaElementSource(audioRef.current);
                source.current.connect(audioContext.destination);
                // audioRef.current.play();
                console.log(audioContext);
                console.log(audioContext.state);
            }
            playEventListener();
        } else {
            playEventListener();
        }
    };

    const playEventListener = (e) => {
        // Select play button
        const playButton = document.querySelector('#playButton');
        console.log(playButton.dataset.playing)

        playButton.addEventListener(
            "click",
            () => {
                // Check if context is in suspended state
                // if (audioContext.state === "suspended") {
                //     audioContext.resume();
                // }


                //Play or pause depending on state
                if (playButton.dataset.playing === "false") {
                    audioRef.current.play();
                    playButton.dataset.playing = "true";
                    console.log(playButton.dataset.playing);
                } else if (playButton.dataset.playing === "true") {
                    audioRef.current.pause();
                    playButton.dataset.playing = "false";
                }
            },
            false
        );

    }

    const handleAudioSelection = (e) => {
        setFile(e.target.value);
        console.log(file);
    }

    return (
        <div>
            <label htmlFor="audio">Choose a sound:</label>

            <select onChange={handleAudioSelection} name="audio" id="audio">
                <option>Select a sound</option>
                <option value="./export/media/SPADelayTest.mp3">Test 1</option>
                <option value="./export/media/SPADelayTest2.mp3">Test 2</option>
            </select>
            {file ? (
                <audio
                    ref={audioRef}

                    src={file}
                    type="audio/mpeg"
                />

            ) :
                <></>
            }
            {file ? (
                <button
                    id="playButton"
                    data-playing="false"
                    role="switch"
                    aria-checked="false"
                    onClick={handleAudioPlay}

                >Play/Pause
                </button>

            ) :
                <></>
            }
        </div>
    );
}

export default WebAudioTest;