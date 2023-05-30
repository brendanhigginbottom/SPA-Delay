import { useDispatch } from 'react-redux';

// delete button for use in /userpresets
function DeletePresetButton(presetId) {

    const dispatch = useDispatch();

    const deletePreset = () => {
        console.log(presetId.presetId);
        dispatch({
            type: 'DELETE_PRESET',
            payload: presetId.presetId,
        });
        dispatch({
            type: 'FETCH_PRESETS',
        });
    }

    return (
        <>
            <button onClick={deletePreset}>Delete Preset</button>
        </>
    );
}

export default DeletePresetButton;