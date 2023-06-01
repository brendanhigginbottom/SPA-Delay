import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// delete button for use in /userpresets
function EditPresetButton(preset) {
    const dispatch = useDispatch();
    const history = useHistory();

    
    const editPreset = () => {
        console.log(preset);
        dispatch({ type: 'TOGGLE_EDIT', payload: true });
        dispatch({ type: 'SET_PRESET_NAME', payload: preset.presetId.name});
        dispatch({ type: 'SET_PRESET_DESC', payload: preset.presetId.description});
        dispatch({ type: 'SET_EDIT_ID', payload: preset.presetId.id});
        history.push('/savepreset');
    }

    return (
        <>
            <button onClick={editPreset}>Edit Preset</button>
        </>
    );
}

export default EditPresetButton;