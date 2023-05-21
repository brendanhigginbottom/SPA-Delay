const { createDevice } = require('@rnbo/js');
//Creating device (delay line) from the exported JSON file
const setup = async(context, color, filter) => {
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

    const colorParam = device.parametersById.get("color");
    colorParam.value = color;
    console.log(colorParam.value);
    console.log(colorParam.min, colorParam.max);
    console.log(device.parameters[3].value);

    const filterParam = device.parametersById.get("filter");
    console.log(filterParam.enumValues);
    filterParam.enumValue = filter;
    console.log(filterParam.enumValue);


    return device;

    //Not sure what destination will end up being, noticing RNBO plays thru comp speakers even if I have
    //headphones connected
    // device.node.connect(context.destination);
    // console.log(device.node);
    // console.log(context.destination);

    // //logging parameters of device
    // device.parameters.forEach(parameter => {
    //     console.log(parameter.id);
    //     console.log(parameter.name);
    // })

    // console.log(device.parametersById.get("color"))
    // const color = device.parametersById.get("color");
    // console.log(color);
    // setColor(Number(device.parameters[3].value));
    // console.log(color.value);
    // color.value = 2;
    // console.log(color.min, color.max);
    // console.log(device.parameters[3].value);
    
};

export default setup;