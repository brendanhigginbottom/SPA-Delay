import { useState, useEffect, useRef } from 'react';

function WebAudioTest() {
    const [file, setFile] = useState(null);

    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();

    // onClick for audio playback
    const handleAudioPlay = () => {
        let audioContext = new AudioContext();
        if(!source.current) {
            source.current = audioContext.createMediaElementSource(audioRef.current);
            source.current.connect(audioContext.destination);
            console.log(audioContext);
        }
    };

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
            {/* <input
            //     type="dropdown"
            //     onChange={({target: {files}}) => files[0] && setFile[files[0]]}
            // /> */}
            {/* {file &&  ( */}
                    <audio  
                        ref={audioRef}
                        onPlay={handleAudioPlay}
                        src={file}
                        controls
                        type="audio/mpeg"
                    />
            {/* // )} */}
            <audio src="./export/media/SPADelayTest.mp3" />
        </div>
    );
}

export default WebAudioTest;