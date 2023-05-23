// import makeGainContext from "./makeGainContext";
import device from "./device";

let audioContext;
const mediaElementSource = new WeakMap();
const handleAudioPlay = async(source, audioRef, color, filter, mix, feedback) => {
    if (audioContext === undefined) {
        // create audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();
        console.log(audioContext);
        console.log(audioContext.state);
        if (!source.current) {
            // create MediaElementAudioSourceNode with current file
            // source.current = audioContext.createMediaElementSource(audioRef.current);
            source.current = audioContext.createMediaElementSource(audioRef.current);
            // mediaElementSource.set(audioRef.current, source.current);
            source.current.connect(audioContext.destination);
            // create delay
            const delay = await device(audioContext, color, filter, mix, feedback);
            console.log(device);
            // connect MediaElementAudioSourceNode to delay
            source.current.connect(delay.node).connect(audioContext.destination);
            console.log(audioContext);
            console.log(audioContext.state);
        // } else {
        //     // get mediaElementSource
        //     source.current = mediaElementSource.get(audioRef.current);
        //     console.log(source.current);
        //     // disconnect all previous audio nodes
        //     // source.current.disconnect();
        //     const delay = await device(audioContext, color, filter, mix, feedback);
        //     console.log(device);
        //     // connect MediaElementAudioSourceNode to delay
        //     source.current.connect(delay.node).connect(audioContext.destination);
        //     console.log(audioContext); 
        //     console.log(audioContext.state);
        //     }
        };
    }
}
export default handleAudioPlay;
