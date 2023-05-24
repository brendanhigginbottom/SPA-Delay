// import makeGainContext from "./makeGainContext";
import device from "./device";
import { useEffect } from 'react';

let delay;
let mediaElementSource;
let audioContext;

const handleAudioPlay = async (test, audioRef, color, filter, mix, feedback) => {
    // if (audioContext === undefined) {
    // create audio context

    if (!mediaElementSource) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
        console.log(audioContext);
        console.log(audioContext.state);
        // create MediaElementAudioSourceNode with current file
        mediaElementSource = audioContext.createMediaElementSource(audioRef.current);
        // mediaElementSource.set(audioRef.current, source.current);
        // mediaElementSource.connect(audioContext.destination);

        // } else {
        //     // get mediaElementSource
        //     // source.current = mediaElementSource.get(audioRef.current);
        //     // console.log(test);
        //     // disconnect all previous audio nodes
        //     // test.disconnect(delay.node);
        // //     audioContext = new AudioContext();
        // // source.current = audioContext.createMediaElementSource(audioRef.current);
        // // source.current.connect(audioContext.destination);
        // test.disconnect([1]);
        // delay = await device(audioContext, color, filter, mix, feedback);
        // test.connect(delay.node).connect(audioContext.destination);
        // console.log(device);
        // // connect MediaElementAudioSourceNode to delay

        // source.current.connect(delay.node).connect(audioContext.destination);
        // console.log(audioContext); 
        // console.log(audioContext.state);
    } else {
        mediaElementSource.disconnect();
    }
    // create delay
    delay = await device(audioContext, color, filter, mix, feedback);
    console.log(device);
    // connect MediaElementAudioSourceNode to delay
    mediaElementSource.connect(delay.node).connect(audioContext.destination);
    console.log(audioContext);
    console.log(audioContext.state);
}
// };


export default handleAudioPlay;
