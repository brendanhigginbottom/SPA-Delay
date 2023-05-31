// import makeGainContext from "./makeGainContext";
import device from "./device";

let delay;
let mediaElementSource;
let audioContext;


const handleAudioPlay = async (audioRef, color, filter, mix, feedback, input, time, scale, volume, feedbackCheck, spread) => {
    // create audio context
    if (!mediaElementSource) {
        console.log(window);
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
        // create MediaElementAudioSourceNode with current file
        mediaElementSource = audioContext.createMediaElementSource(audioRef.current);
        console.log('logging in if', mediaElementSource);
    } else {
        // disconnect from delay with previous settings
        mediaElementSource.disconnect();
        console.log('disconnected old delay');
        console.log(Object.keys(audioContext).length);
    }
    // create delay with param values from reducers
    delay = await device(audioContext, color, filter, mix, feedback, input, time, scale, volume, feedbackCheck, spread);
    console.log(device);
    console.log('logging outside if', mediaElementSource);
    // connect MediaElementAudioSourceNode to delay
    mediaElementSource.connect(delay.node).connect(audioContext.destination);
    console.log(audioContext);
    console.log(audioContext.state);
    console.log(window.history);
}


export default handleAudioPlay;
