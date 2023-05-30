import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Button displayed on /savepreset containing POST saga dispatch
function StorePresetButton() {

    const history = useHistory();
    const dispatch = useDispatch();

    // fetching preset values as an object, preset name, and preset description
    const presetValues = useSelector(store => store.presetValues);
    const presetName = useSelector(store => store.presetName);
    const presetDesc = useSelector(store => store.presetDesc);
    

    const storePreset = () => {
        dispatch({
            type: 'ADD_PRESET',
            payload: {presetValues, presetName, presetDesc},
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

