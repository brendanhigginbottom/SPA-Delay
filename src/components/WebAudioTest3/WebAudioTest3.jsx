import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';

let audioContext;


function WebAudioTest3() {
    const [file, setFile] = useState(null);

    // Redux getting parameter values set by user with sliders
    const dispatch = useDispatch();
    const color = useSelector(store => store.color);
    const filter = useSelector(store => store.filter);
   
    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();
    
    // onClick for audio playback
    const audioPlay = () => {
        handleAudioPlay(audioContext, source, audioRef, color, filter);
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

    //set value for color
    const handleColorChange = (e) => {
        const colorForReducer = Number(e.target.value);
        dispatch({
            type: 'SET_COLOR',
            payload: colorForReducer,
        });
    }

    // set filter 
    const handleFilterChange = (e) => {
        const filterForReducer = Number(e.target.value);
        dispatch({
            type: 'SET_FILTER',
            payload: filterForReducer,
        })
    }

    // Display filter text
    const handleFilterText = () => {
        const filterNames = [
            'None',
            'Low Pass',
            'High Pass',
            'Band Pass',
            'Notch'
        ];

        return filterNames[filter];

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
                    <label htmlFor="color">Set Color value:</label>
                    <input 
                        type="range"
                        id="color"
                        min="0" 
                        max="100"
                        step="1"
                        onChange={handleColorChange}
                    /> 
                    <p>Color: {color}</p>
                </div>

            ) :
                <></>
            }
            {file ? (
                <div>
                    <label htmlFor="filter">Set Color value:</label>
                    <input 
                        type="range"
                        id="filter"
                        min="0" 
                        max="4"
                        step="1"
                        onChange={handleFilterChange}
                    /> 
                    <p>Filter type: {handleFilterText()}</p>
                </div>

            ) :
                <></>
            }
        </div>
    );
}

export default WebAudioTest3;