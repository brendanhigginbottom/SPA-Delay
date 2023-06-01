import { useSelector, useDispatch } from "react-redux";

import StorePresetButton from "../SavePresetButton/StorePresetButton.jsx";
import StoreEditButton from "./StoreEditButton.jsx";


// form that SaveUserPreset button takes user to to enter name and desc of preset
// Contains StoreUserPreset button that contains POST saga dispatch to POST preset
// and conditionally renders storeEditPreset button for edit/PUT use
function SavePreset() {
    // setup for redux
    const dispatch = useDispatch();
    // getting presetName and Desc for character limit
    const name = useSelector(store => store.presetName);
    const desc = useSelector(store => store.presetDesc);

    // getting editToggle for conditional rendering of other buttons
    const editToggle = useSelector(store => store.editToggle);


    const handleNameChange = (e) => {
        // send name to redux
        const presetName = e.target.value;
        dispatch({
            type: 'SET_PRESET_NAME',
            payload: presetName,
        });
    }

    const handleDescChange = (e) => {
        // send desc to redux
        const presetDesc = e.target.value;
        dispatch({
            type: 'SET_PRESET_DESC',
            payload: presetDesc,
        });
    }

    return (
        <>
            {
                editToggle === false ? (
                    <h1>Save Preset</h1>
                ) : <h1>Edit Preset</h1>
            }
                <label htmlFor="presetName">Preset Name:</label>
                <input 
                    type="text" 
                    id="presetName" 
                    onChange={handleNameChange} 
                    defaultValue={name}
                />
                <p>{name.length}/100</p>
                <br />
                <label htmlFor="presetDesc">Preset Description:</label>
                <br />
                <textarea 
                    id="presetDesc" 
                    rows="4" 
                    cols="50"
                    onChange={handleDescChange}
                    defaultValue={desc}
                />
                <p>{desc.length}/1000</p>
                <br />
                {
                    editToggle === false ? (
                        <StorePresetButton />
                    ) : 
                        <StoreEditButton />
                }
                
        </>
    );
}

export default SavePreset; 