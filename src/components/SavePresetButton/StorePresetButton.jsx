import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Button displayed on /savepreset containing POST saga dispatch
function StorePresetButton() {

    const history = useHistory();
    const dispatch = useDispatch();

    // storing preset values as an object
    

    const storePreset = () => {
        dispatchEvent({
            type: 'ADD_PRESET',
            payload: 1,
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

