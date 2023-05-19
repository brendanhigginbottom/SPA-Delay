import { useState, useEffect } from 'react';

function WebAudioTest() {

    const setup = () => {
         // Create instance of audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    // get the audio element
    const audioElement = document.querySelector("audio")
    console.log(document.querySelector("audio"));
    const track = audioContext.createMediaElementSource(audioElement);
    };

    useEffect(() => {
        setup();
    }, [])

   


   
    

    return (
        <>
            <h1>Test 123 ABC</h1>
            <audio id="audio" src="/export/media/SPADelayTest.mp3" />
        </>
    );
}

export default WebAudioTest;