import { useState, useEffect, useRef } from 'react';
const { createDevice } = require('@rnbo/js');

function WebAudioTest() {
    const [file, setFile] = useState(null);
    const [delayJson, setDelayJson] = useState({});
    const [color, setColor] = useState(0);
    let [device, setDevice] = useState({});


    //useRef to get audio file
    const audioRef = useRef();
    const source = useRef();

    // onClick for audio playback
    const handleAudioPlay = () => {
        let audioContext = new AudioContext();
        if (!source.current) {
            source.current = audioContext.createMediaElementSource(audioRef.current);
            source.current.connect(audioContext.destination);
            console.log(audioContext);
        }
        //Creating device (delay line) from the exported JSON file
        const setup = async () => {
            //Creating WebAudio AudioContext
            let WAContext = window.AudioContext || window.webkitAudioContext;
            let context = new WAContext();
            const patchExportURL = "/export/rnbo.filterdelay.json";
            let rawPatcher = await fetch(patchExportURL, {
                headers: {
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
            await setDevice(device);
            console.log(device);

            //Not sure what destination will end up being, noticing RNBO plays thru comp speakers even if I have
            //headphones connected
            device.node.connect(source.current);
            console.log(device.node);
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
        setup();

    };

    const handleAudioSelection = (e) => {
        setFile(e.target.value);
        console.log(file);
    }

    return (
        <div>
            <label htmlFor="audio">Choose a sound:</label>

            <select onChange={handleAudioSelection} name="audio" id="audio">
                <option>Select a sound</option>
                <option value="./export/media/SPADelayTest.mp3">Test 1</option>
                <option value="./export/media/SPADelayTest2.mp3">Test 2</option>
            </select>
            {file ? (
                <audio
                    ref={audioRef}
                    onPlay={handleAudioPlay}
                    src={file}
                    controls
                    type="audio/mpeg"
                />
            ) :
                <></>
            }

        </div>
    );
}

export default WebAudioTest;