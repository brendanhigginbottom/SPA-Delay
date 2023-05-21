import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setup from './device';

let audioContext;


function WebAudioTest2() {
    const [file, setFile] = useState(null);
    // const [gain, setGain] = useState(3);
    const [gainNode, setGainNode] = useState({});
    const [deviceNode, setDeviceNode] = useState([]);

    //redux
    const dispatch = useDispatch();
    const gain = useSelector(store => store.gain);
    

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();
    console.log(audioContext);

    // onClick for audio playback
    const handleAudioPlay = () => {
        if (audioContext === undefined) {
            let AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioContext = new AudioContext();
            console.log(audioContext.state);
            if (!source.current) {
                source.current = audioContext.createMediaElementSource(audioRef.current);
                source.current.connect(audioContext.destination);
            
                // const gainNode = audioContext.createGain();
                // console.log(gainNode.gain.value);
                // console.log(gainNode.gain);
                // gainNode.gain.value = 50;
                // console.log(gainNode.gain.value);
                // console.log(gainNode.gain);
                
                // console.log(gainNode.gain.value);
                // setGain();
                // let deviceNode = setup(audioContext);
                console.log(deviceNode);
                // source.current.connect(deviceNode).connect(audioContext.destination);
                console.log(audioContext);
                console.log(audioContext.state);
            }
            playEventListener();
        } else {
            playEventListener();
        }
    };

    // useEffect(() => {
    //     setup(audioContext).then((res) => setDeviceNode(res));
    // }, [audioContext]);

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

    const handleAudioSelection = (e) => {
        setFile(e.target.value);
        console.log(file);
    }

    const handleGainChange = (e) => {
        console.log(Number(e.target.value));
        const gainForReducer = Number(e.target.value)
        console.log(gain);
        dispatch({
            type: 'SET_GAIN',
            payload: gainForReducer
        });
        console.log(gain);
    }

    const setGain = () => {
        gainNode.gain.value = gain;
    }

    return (
        <div>
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
                    onClick={handleAudioPlay}

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

export default WebAudioTest2;