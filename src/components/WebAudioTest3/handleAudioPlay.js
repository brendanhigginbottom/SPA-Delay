import makeGainContext from "./makeGainContext";
import device from "./device";

const handleAudioPlay = async(audioContext, source, audioRef, gain) => {
    if (audioContext === undefined) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();
        console.log(audioContext);
        console.log(audioContext.state);
        if (!source.current) {
            source.current = audioContext.createMediaElementSource(audioRef.current);
            source.current.connect(audioContext.destination);


            // const gainNode = makeGainContext(audioContext, gain);
            // console.log(gainNode.gain.value);
            const delay = await device(audioContext);
            console.log(device);

            source.current.connect(delay.node).connect(audioContext.destination);
            console.log(audioContext);
            console.log(audioContext.state);
        }
    };
}

export default handleAudioPlay;