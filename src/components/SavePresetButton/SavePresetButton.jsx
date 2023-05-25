import { useSelector } from 'react-redux';


// button user clicks to save a preset
function SavePresetButton() {

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

    let presetValues = {
        color: color,
        filter: filter,
        mix: mix,
        feedback: feedback,
        input: input,
        time: time,
        scale: scale,
        volume: volume,
        feedbackCheck: feedbackCheck,
        spread: spread,
    }

    console.log(presetValues.color);

    return (
        <>
            <button>Save Preset</button>
        </>
    );
}

export default SavePresetButton;