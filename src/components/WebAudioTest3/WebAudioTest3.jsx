import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';

let audioContext;


function WebAudioTest3() {
    const [file, setFile] = useState(null);
    // const [gain, setGain] = useState(3);
    const [gainNode, setGainNode] = useState({});

    //redux
    const dispatch = useDispatch();
    const gain = useSelector(store => store.gain);
   

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();
    

    // onClick for audio playback
    const audioPlay = () => {
        handleAudioPlay(audioContext, source, audioRef, gain);
        playEventListener();
    }
        

    const playEventListener = (e) => {
        // Select play button
        const playButton = document.querySelector('#playButton');
        console.log(playButton.dataset.playing);

                //Play or pause depending on state
                if (playButton.dataset.playing === "false") {
                    audioRef.current.play();
                    playButton.dataset.playing = "true";
                    console.log(playButton.dataset.playing);
                } else if (playButton.dataset.playing === "true") {
                    audioRef.current.pause();
                    playButton.dataset.playing = "false";
                }

    }

    // sets file in state
    const handleAudioSelection = (e) => {
        setFile(e.target.value);
        console.log(file);
    }

    //set value for gain
    const handleGainChange = (e) => {
        const gainForReducer = Number(e.target.value)
        console.log(isFinite(Number(e.target.value)));
        console.log(gain);
        dispatch({
            type: 'SET_GAIN',
            payload: gainForReducer
        });
    }

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
            {/* If file selected, render <audio> element, play button, and gain slider */}
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
                    onClick={audioPlay}

                >Play/Pause
                </button>

            ) :
                <></>
            }
            {file ? (
                <div>
                    <input 
                        type="range"
                        id="volume"
                        min="-50" 
                        max="50"
                        step="0.01"
                        onChange={handleGainChange}
                    /> 
                    <h1>{gain}</h1>
                </div>

            ) :
                <></>
            }
        </div>
    );
}

export default WebAudioTest3;