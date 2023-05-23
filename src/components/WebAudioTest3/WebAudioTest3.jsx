import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';

function WebAudioTest3() {
    const [file, setFile] = useState(null);
    const [playing, setPlaying] = useState('false');
    const [audioElement, setAudioElement] = useState(<></>)

    // Redux getting parameter values set by user with sliders
    const dispatch = useDispatch();
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
        // createAudioElement;
        console.log(audioElement);
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

    //set value for color
    const handleColorChange = (e) => {
        const colorForReducer = Number(e.target.value);
        dispatch({
            type: 'SET_COLOR',
            payload: colorForReducer,
        });
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
        // setAudioElement[<audio
        //     src={file}
        //     type="audio/mpeg"
        // />]
    }

    // set filter 
    const handleFilterChange = (e) => {
        const filterNumValue = Number(e.target.value);
        const filterNames = [
            'None',
            'LP',
            'HP',
            'BP',
            'Notch'
        ];
        const filterEnumForReducer = filterNames[filterNumValue]
        dispatch({
            type: 'SET_FILTER',
            payload: filterEnumForReducer,
        })
    };

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

    const handleMixChange = (e) => {
        const mixNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_MIX',
            payload: mixNumValue,
        })
    };

    // Need to limit this to 80-90 to prevent user from blowing out their speakers
    const handleFeedbackChange = (e) => {
        const feedbackNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_FEEDBACK',
            payload: feedbackNumValue,
        })
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
                    <label htmlFor="filter">Set Filter type:</label>
                    <input
                        type="range"
                        id="filter"
                        min="0"
                        max="4"
                        step="1"
                        defaultValue={0}
                        onChange={handleFilterChange}
                    />
                    <p>Filter type: {filter}</p>
                </div>

            ) :
                <></>
            }
            {file ? (
                <div>
                    <label htmlFor="mix">Set Mix value:</label>
                    <input
                        type="range"
                        id="mix"
                        min="0"
                        max="100"
                        step="1"
                        defaultValue={50}
                        onChange={handleMixChange}
                    />
                    <p>Mix: {mix}</p>
                </div>

            ) :
                <></>
            }
            {file ? (
                <div>
                    <label htmlFor="feedback">Set Feedback value:</label>
                    <input
                        type="range"
                        id="feedback"
                        min="0"
                        max="100"
                        step="1"
                        defaultValue={50}
                        onChange={handleFeedbackChange}
                    />
                    <p>Feedback: {feedback}</p>
                </div>

            ) :
                <></>
            }
        </div>
    );
}

export default WebAudioTest3;