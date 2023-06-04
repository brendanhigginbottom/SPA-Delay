import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import handleAudioPlay from './handleAudioPlay';
// Import for delay param sliders
import AllParamsCheck from './AllParamsCheck';
import BasicViewSliders from './BasicViewSliders.jsx';
import AllSliders from './AllSliders';

// Import for SavePresetButton
import SavePresetButton from './SavePresetButton/SavePresetButton';
import { Box, Button, Card, InputLabel, MenuItem, Select } from '@mui/material';


function WebAudioTest3() {
    // State for selecting mp3 file and for toggling audio play state
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
    const spread = useSelector(store => store.spread);

    // Redux getting paramView to toggle param slider
    const toggle = useSelector(store => store.paramView);

    //useRef to get audio file
    const audioRef = useRef();

    // onClick for audio playback
    const audioPlay = () => {
        console.log(audioRef.current);
        if (playing === 'false') {
            handleAudioPlay(audioRef, color, filter, mix, feedback, input, time, scale, volume, feedbackCheck, spread);
            playPause();
        } else {
            playPause();
        }
    };

    const playPause = () => {

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
            <Card sx={{ marginx: "1em", width: 1, display: "flex", justifyContent: "space-evenly" }}>
                {/* Create file selector */}
                <Box>
                <InputLabel id="audio">Choose a sound:</InputLabel>
                <Select
                    labelId="audio"
                    id="audio"
                    label="Sound"
                    onChange={handleAudioSelection}
                >
                    <MenuItem value="./export/media/SPADelayTest.mp3">Test 1</MenuItem>
                    <MenuItem value="./export/media/SPADelayTest2.mp3">Test 2</MenuItem>
                    <MenuItem value="./export/media/SPADelayTest3.mp3">Test 3</MenuItem>
                    <MenuItem value="./export/media/SPADelayTest4.mp3">Test 4</MenuItem>
                </Select>
                </Box>
                <br />
                {/* If file selected, render <audio> element and play button*/}
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
                    <Box>
                    <Button
                        variant="contained"
                        id="playButton"
                        role="switch"
                        aria-checked="false"
                        onClick={audioPlay}
                    >Play/Pause
                    </Button>
                    </Box>

                ) :
                    <></>
                }
                <AllParamsCheck />
                <SavePresetButton />
            </Card>
            <br />
            {toggle === '1' ? (
                <BasicViewSliders />
            ) :
                <AllSliders />
            }
            <br />
        </div>
    );
}


export default WebAudioTest3;