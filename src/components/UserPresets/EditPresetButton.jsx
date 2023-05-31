import { useDispatch } from 'react-redux';


// delete button for use in /userpresets
function EditPresetButton(presetId) {
    const dispatch = useDispatch();

    console.log(presetId.presetId)
    const editPreset = () => {
        
    }

    return (
        <>
            <button onClick={editPreset}>Edit Preset</button>
            
        </>
    );
}

export default EditPresetButton;