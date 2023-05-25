import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';
// Import for delay param sliders
import ParamSliders from './ParamSliders.jsx';


function WebAudioTest3() {
    const [file, setFile] = useState(null);
    const [playing, setPlaying] = useState('false');

    // Redux getting parameter values set by user with sliders to pass to delay called within handleAudioPlay
    const color = useSelector(store => store.color);
    const filter = useSelector(store => store.filter);
    const mix = useSelector(store => store.mix);
    const feedback = useSelector(store => store.feedback);
    const input = useSelector(store => store.input);
    const time = useSelector(store => store.time);
    const scale = useSelector(store => store.scale);
    const volume = useSelector(store => store.volume);
    const feedbackCheck = useSelector(store => store.feedbackCheck);

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();

    // onClick for audio playback
    const audioPlay = () => {
        console.log(source.current);
        console.log(audioRef.current);
        if (playing === 'false') {
            handleAudioPlay(audioRef, color, filter, mix, feedback, input, time, scale, volume, feedbackCheck);
            playPause();
        } else {
            playPause();
        }
    };

    const playPause = async (e) => {
        // Select play button

        //Play or pause depending on state
        if (playing === "false") {
            audioRef.current.play();
            setPlaying('true');
        } else if (playing === "true") {
            audioRef.current.pause();
            setPlaying('false');
        }
    };

    // sets file in state
    const handleAudioSelection = (e) => {
        setFile(e.target.value);
        console.log(file);
    };

    return (
        <div>
            <h1>Test 3</h1>
            {/* Create file selector */}
            <label htmlFor="audio">Choose a sound:</label>
            <select onChange={handleAudioSelection} name="audio" id="audio">
                <option>Select a sound</option>
                <option value="./export/media/SPADelayTest.mp3">Test 1</option>
                <option value="./export/media/SPADelayTest2.mp3">Test 2</option>
            </select>
            {/* If file selected, render <audio> element, play button, and audio param sliders*/}
            {file ? (
                <audio
                    ref={audioRef}
                    id="audioElement"
                    src={file}
                    type="audio/mpeg"
                />
            ) :
                <></>
            }
            {file ? (
                <button
                    id="playButton"
                    role="switch"
                    aria-checked="false"
                    onClick={audioPlay}
                >Play/Pause
                </button>

            ) :
                <></>
            }
            {file ? (
                <ParamSliders />
            ) :
                <></>
            }
        </div>
    );
}


export default WebAudioTest3;