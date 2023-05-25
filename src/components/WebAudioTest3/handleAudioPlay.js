// import makeGainContext from "./makeGainContext";
import device from "./device";

let delay;
let mediaElementSource;
let audioContext;

const handleAudioPlay = async (audioRef, color, filter, mix, feedback, input, time) => {
    // create audio context
    if (!mediaElementSource) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
        console.log(audioContext);
        console.log(audioContext.state);
        // create MediaElementAudioSourceNode with current file
        mediaElementSource = audioContext.createMediaElementSource(audioRef.current);
    } else {
        // disconnect from delay with previous settings
        mediaElementSource.disconnect();
    }
    // create delay
    delay = await device(audioContext, color, filter, mix, feedback, input, time);
    console.log(device);
    // connect MediaElementAudioSourceNode to delay
    mediaElementSource.connect(delay.node).connect(audioContext.destination);
    console.log(audioContext);
    console.log(audioContext.state);
}


export default handleAudioPlay;
