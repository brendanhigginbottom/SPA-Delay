import { useSelector } from 'react-redux';

// Button displayed on /savepreset containing POST saga dispatch
function StorePresetButton() {

    // Redux getting parameter values set by user with sliders to pass to delay called within handleAudioPlay
    const color = useSelector(store => store.color);
    const filter = useSelector(store => store.filter);
    const mix = useSelector(store => store.mix);
    const feedback = useSelector(store => store.feedback);
    const input = useSelector(store => store.input);
    const time = useSelector(store => store.time);
    const scale = useSelector(store => store.scale);
    const volume = useSelector(store => store.volume);
    const feedbackCheck = useSelector(store => store.feedbackCheck);
    const spread = useSelector(store => store.spread);

    // might need to circle back and make sure enumValues are getting passed as strings
    // This also still isn't formatted in JSON correctly: {"name" : [{obj}, {obj}]}
    let user_delay = {
        "color": color,
        "filter": filter,
        "mix": mix,
        "feedback": feedback,
        "input": input,
        "time": time,
        "scale": scale,
        "volume": volume,
        "feedbackCheck": feedbackCheck,
        "spread": spread
    };


    return (
        <>
            <button id="storePreset">Save Preset</button>
        </>
    );
}

export default StorePresetButton;