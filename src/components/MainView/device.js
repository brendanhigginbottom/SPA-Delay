const { createDevice } = require('@rnbo/js');
//Creating device (delay line) from the exported JSON file
const setup = async(context, color, filter, mix, feedback, input, time, scale, volume, feedbackCheck, spread) => {
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


    let device = await createDevice({ context, patcher });
    console.log(device);
    
    //color
    const colorParam = device.parametersById.get("color");
    colorParam.value = color;
    //filter
    const filterParam = device.parametersById.get("filter");
    filterParam.enumValue = filter;
    //mix
    const mixParam = device.parametersById.get("mix");
    mixParam.value = mix;
    // feedback On/Off
    const feedbackCheckParam = device.parametersById.get('fb');
    feedbackCheckParam.enumValue = feedbackCheck;
    //feedback
    const feedbackParam = device.parametersById.get('regen');
    feedbackParam.value = feedback
    //input
    const inputParam = device.parametersById.get('input');
    inputParam.enumValue = input;
    // time 
    const timeParam = device.parametersById.get('time');
    timeParam.value = time
    // scale
    const scaleParam = device.parametersById.get('scale');
    scaleParam.enumValue = scale;
    // volume
    const volumeParam = device.parametersById.get('volume');
    volumeParam.value = volume;
    // spread
    const spreadParam = device.parametersById.get('spread');
    spreadParam.value = spread;

    return device;
};

export default setup;