// Get createDevice from rnbo.js library
const { createDevice } = require('@rnbo/js');
// Storing init delay in state
import { useState, useEffect } from 'react';


function MainView() {
    const [delay, setDelay] = useState({});

    //Creating device (delay line) from the exported JSON file
    const setup = async() => {
        const patchExportURL = "/export/rnbo.filterdelay.json";
        console.log(patchExportURL);
        let rawPatcher = await fetch(patchExportURL,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          );
        let patcher = await rawPatcher.json();

        let device = await createDevice({ context, patcher });
        console.log(device);

        //Not sure what destination will end up being, noticing RNBO plays thru comp speakers even if I have
        //headphones connected
        device.node.connect(context.destination);
    };

    useEffect(() => {
        setup();
      }, []);
    

    //Creating WebAudio AudioContext
    let WAContext = window.AudioContext || window.webkitAudioContext;
    let context = new WAContext();

    //Resuming audiocontext with user gesture (the onClick)
    const resumeAudioContext = () => {
        context.resume();
        console.log('resuming audio context');
    }


    return (
        <>
            <h1>Main View!</h1>
            <button onClick={resumeAudioContext}>Test Button</button>
        </>
    );
}

export default MainView;