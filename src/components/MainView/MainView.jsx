// Get createDevice from rnbo.js library
const { createDevice } = require('@rnbo/js');
// Storing init delay in state
import { useState, useEffect, useRef } from 'react';
// let device;
const audioContext = new AudioContext();
const bufferId = "Test"



function MainView() {
    const [delayJson, setDelayJson] = useState({});
    const [color, setColor] = useState(0);
    let [device, setDevice] = useState({});
    
    //Creating WebAudio AudioContext
    let WAContext = window.AudioContext || window.webkitAudioContext;
    let context = new WAContext();

    //Creating device (delay line) from the exported JSON file
    const setup = async() => {
        const patchExportURL = "/export/rnbo.filterdelay.json";
        let rawPatcher = await fetch(patchExportURL,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
          );
        let patcher = await rawPatcher.json();
        // Setting delay in state with content of JSON file
        //! Will need to restore to JSON format when capturing user preset
        setDelayJson(rawPatcher);
        console.log(patcher);

        device = await createDevice({ context, patcher });
        // await setDevice(device);
        console.log(device);
        console.log(device.node);

        //Not sure what destination will end up being, noticing RNBO plays thru comp speakers even if I have
        //headphones connected
        device.node.connect(context.destination);
        
        console.log(context.destination);

        //logging parameters of device
        device.parameters.forEach(parameter => {
            console.log(parameter.id);
            console.log(parameter.name);
        })

        console.log(device.parametersById.get("color"))
        const color = device.parametersById.get("color");
        console.log(color);
        setColor(Number(device.parameters[3].value));
        console.log(color.value);
        color.value = 2;
        console.log(color.min, color.max);
        console.log(device.parameters[3].value);
        
    };

    

    useEffect(() => {
        setup();
      }, []);
   
    // useEffect(() => {
    //     if(device) {
    //         device.parameters[3].value = color;
    //     }
    // }, [color]);
    console.log(delayJson);
    console.log(device);
    console.log(color);
    

    //Resuming audiocontext with user gesture (the onClick)
    const resumeAudioContext = () => {
        context.resume();
        console.log('resuming audio context');
    }

    const handleColorChange = (e) => {
        console.log(device.parameters[3]); 
        setColor(Number(e.target.value));
        console.log(color);
    }



    return (
        <>
            <h1>Main View!</h1>
            <button onClick={resumeAudioContext}>Test Button</button>
            <br />
            <input type="range" min="0" max="100" onChange={handleColorChange} />
        </>
    );
}

export default MainView;