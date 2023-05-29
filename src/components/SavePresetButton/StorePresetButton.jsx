import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Button displayed on /savepreset containing POST saga dispatch
function StorePresetButton() {


    const dispatch = useDispatch();
    const history = useHistory();
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

    // storing preset as obj to send to DB
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

    const storePreset = () => {
        dispatch({
            type: 'SET_PRESET_VALUES',
            payload: user_delay,
        })
        history.push('/mypresets');
    }

    return (
        <>
            <button id="storePreset" onClick={storePreset}>Save Preset</button>
        </>
    );
}

export default StorePresetButton;

