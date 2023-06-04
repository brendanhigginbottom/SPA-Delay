import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

// delete button for use in /userpresets
function DeletePresetButton(presetId) {

    const dispatch = useDispatch();

    const deletePreset = () => {
        dispatch({
            type: 'DELETE_PRESET',
            payload: presetId.presetId,
        });
    }

    return (
        <>
            <Button 
                onClick={deletePreset}
                sx={{backgroundColor: "#363737", color: "#F8A505"}}
            >Delete Preset
            </Button>
        </>
    );
}

export default DeletePresetButton;