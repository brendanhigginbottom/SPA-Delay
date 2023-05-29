import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// button navigates user to /savepreset where the dispatch will 
// occur after adding name and description. sends all param values as an obj to reducer
function SavePresetButton() {
     // setting history
     const history = useHistory();
     const dispatch = useDispatch();

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

    const savePreset = () => {
        dispatch({
            type: 'SET_PRESET_VALUES',
            payload: user_delay,
        })
        history.push('/savepreset');
    }

    return (
        <>
            <button onClick={savePreset}>Save Preset</button>
        </>
    );
}

export default SavePresetButton;