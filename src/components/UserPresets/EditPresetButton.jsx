import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// delete button for use in /userpresets
function EditPresetButton(preset) {
    const dispatch = useDispatch();
    const history = useHistory();

    
    const editPreset = () => {
        dispatch({ type: 'TOGGLE_EDIT', payload: true });
        dispatch({ type: 'SET_PRESET_NAME', payload: preset.presetId.name});
        dispatch({ type: 'SET_PRESET_DESC', payload: preset.presetId.description});
        dispatch({ type: 'SET_EDIT_ID', payload: preset.presetId.id});
        history.push('/savepreset');
    }

    return (
        <>
            <Button 
                onClick={editPreset}
                sx={{backgroundColor: "#363737", color: "#F8A505"}}
                variant="outlined"
            >Edit Preset
            </Button>
        </>
    );
}

export default EditPresetButton;