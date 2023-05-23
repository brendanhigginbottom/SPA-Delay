import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';
// Imports for delay param sliders
import Color from './ParamComponents/Color.jsx';
import Feedback from './ParamComponents/Feedback.jsx';
import Mix from './ParamComponents/Mix.jsx';
import Filter from './ParamComponents/Filter.jsx';

function WebAudioTest3() {
    const [file, setFile] = useState(null);
    const [playing, setPlaying] = useState('false');
    const [audioElement, setAudioElement] = useState(<></>)

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
            handleAudioPlay(source, audioRef, color, filter, mix, feedback);
            playEventListener();
        } else {
            playEventListener();
        }
    };


    const playEventListener = async(e) => {
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
        // createAudioElement;
    };

    // create <audio> element
    const createAudioElement = () => {
        console.log('making new element')
        // {file ? (
        //     <audio
        //         ref={audioRef}
        //         src={file}
        //         type="audio/mpeg"
        //     />

        // ) :
        //     <></>
        // }
        setAudioElement[<audio
            src={file}
            type="audio/mpeg"
        />]
    }

    //! Return to this for QoL
    // Display filter text 
    // This is necessary because I need to pass abbreviations
    // to enumValue on delay but want user to see full name
    // const handleFilterText = () => {
    //     const filterNumValue = Number(document.querySelector('#filter').value);
    //     console.log(filterNumValue)
    //     const filterNames = [
    //         'None',
    //         'Low Pass',
    //         'High Pass',
    //         'Band Pass',
    //         'Notch'
    //     ];

    //     return filterNames[filterNumValue];

    // }

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
            {/* {createAudioElement()} */}
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
                    role="switch"
                    aria-checked="false"
                    onClick={audioPlay}

                >Play/Pause
                </button>

            ) :
                <></>
            }
            {file ? (
                <Color />
            ) :
                <></>
            }
            {file ? (
                <Filter />
            ) :
                <></>
            }
            {file ? (
                <Mix />
            ) :
                <></>
            }
            {file ? (
                <Feedback />
            ) :
                <></>
            }
        </div>
    );
}

export default WebAudioTest3;