import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';
// Import for delay param sliders
import ParamSliders from './ParamSliders.jsx';
let test = 2;

function WebAudioTest3() {
    const [file, setFile] = useState(null);
    const [playing, setPlaying] = useState('false');
    const [audioElement, setAudioElement] = useState(<></>);

    // Redux getting parameter values set by user with sliders
    const color = useSelector(store => store.color);
    const filter = useSelector(store => store.filter);
    const mix = useSelector(store => store.mix);
    const feedback = useSelector(store => store.feedback);

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();
    

    // onClick for audio playback
    const audioPlay = () => {
        console.log(source.current);
        console.log(audioRef.current);
        if (playing === 'false') {
            handleAudioPlay(test, audioRef, color, filter, mix, feedback);
            playEventListener();
        } else {
            playEventListener();
            test = 3;
            console.log(test);
        }
    };

    const playEventListener = async (e) => {
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
        // createAudioElement();
    };

    // create <audio> element

    const createAudioElement = (audioRef, file) => {
        return (
            <audio
                ref={audioRef}
                id="audioElement"
                src={file}
                type="audio/mpeg"
            />
        )
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
            {/* If file selected, render <audio> element and play button*/}
            {/* {createAudioElement()} */}
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