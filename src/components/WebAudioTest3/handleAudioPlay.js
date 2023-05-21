// import makeGainContext from "./makeGainContext";
import device from "./device";

const handleAudioPlay = async(audioContext, source, audioRef, color, filter, mix, feedback) => {
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
            const delay = await device(audioContext, color, filter, mix, feedback);
            console.log(device);

            source.current.connect(delay.node).connect(audioContext.destination);
            console.log(audioContext);
            console.log(audioContext.state);
        }
    };
}

export default handleAudioPlay;