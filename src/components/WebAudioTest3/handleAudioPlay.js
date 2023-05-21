import makeGainContext from "./makeGainContext";

const handleAudioPlay = (audioContext, source, audioRef, gain) => {
    if (audioContext === undefined) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();
        console.log(audioContext);
        console.log(audioContext.state);
        if (!source.current) {
            source.current = audioContext.createMediaElementSource(audioRef.current);
            source.current.connect(audioContext.destination);

           const gainNode = makeGainContext(audioContext, gain);
           console.log(gainNode.gain.value);
            
           source.current.connect(gainNode).connect(audioContext.destination);
            console.log(audioContext);
            console.log(audioContext.state);
        }
    };
}

export default handleAudioPlay;