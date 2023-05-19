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
        }
    };
   
    return (
        <div>
            {/* <input
                type="file"
                onChange={({target: {files}}) => files[0] && setFile[files[0]]}
            /> */}
            {/* {file &&  ( */}
                    <audio  
                        ref={audioRef}
                        onPlay={handleAudioPlay}
                        src={"./export/media/SPADelayTest.mp3"}
                        controls
                        type="audio/mpeg"
                    />
            {/* // )} */}
            <audio src="./export/media/SPADelayTest.mp3" />
        </div>
    );
}

export default WebAudioTest;