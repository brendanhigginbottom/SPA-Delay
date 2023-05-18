// Get createDevice from rnbo.js library
const { createDevice } = require('@rnbo/js');
// Storing init delay in state
import { useState, useEffect } from 'react';
let device;


function MainView() {
    const [delayJson, setDelayJson] = useState({});
    const [color, setColor] = useState(0);
    

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
        setDelayJson(patcher);
        console.log(patcher);
        console.log(delayJson);

        device = await createDevice({ context, patcher });
        console.log(device);

        //Not sure what destination will end up being, noticing RNBO plays thru comp speakers even if I have
        //headphones connected
        device.node.connect(context.destination);
        console.log(device.node);
        console.log(context.destination);

        //logging parameters of device
        device.parameters.forEach(parameter => {
            console.log(parameter.id);
            console.log(parameter.name);
        })

        console.log(device.parametersById.get("color"))
        const color = device.parametersById.get("color");
        console.log(color.value);
        color.value = 2;
        console.log(color.value);
    };

    useEffect(() => {
        setup();
      }, []);
    useEffect(() => {
        if(device) {
            device.parametersById.setColor(color);
        }
    }, [color]);
    console.log(delayJson);
    console.log(device);
    console.log(color);
    // console.log(device.parametersById.get("color"));
    

    //Creating WebAudio AudioContext
    let WAContext = window.AudioContext || window.webkitAudioContext;
    let context = new WAContext();

    //Resuming audiocontext with user gesture (the onClick)
    const resumeAudioContext = () => {
        context.resume();
        console.log('resuming audio context');
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
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