import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// contains PUT dispatch to save edit to preset name and description
function StoreEditButton() {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useSelector(store => store.editPresetId);
    const name = useSelector(store => store.presetName);
    const desc = useSelector(store => store.presetDesc);


    const storePreset = () => {
        //dispatch for PUT saga
        dispatch({
            type: 'EDIT_PRESET',
            payload: id,
            data: { name, desc }
        });
        // toggle for conditional rendering of SavePreset component
        dispatch({ type: 'TOGGLE_EDIT', payload: false});
        history.push('/mypresets');
    };

    return (
        <>
            <button onClick={storePreset}>Edit Preset</button>
        </>
    )
};

export default StoreEditButton;