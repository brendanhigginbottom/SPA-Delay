import { useSelector, useDispatch } from "react-redux";

import StorePresetButton from "../SavePresetButton/StorePresetButton.jsx";


// form that SaveUserPreset button takes user to to enter name and desc of preset
// Contains StoreUserPreset button that contains POST saga dispatch to POST preset
function SavePreset() {
    // setup for redux
    const dispatch = useDispatch();
    // getting presetName and Desc for character limit
    const nameChars = useSelector(store => store.presetName).length;
    const descChars = useSelector(store => store.presetDesc).length;


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
            <h1>/SavePreset</h1>
            <form>
                <label htmlFor="presetName">Preset Name:</label>
                <input type="text" id="presetName" onChange={handleNameChange}/>
                <p>{nameChars}/100</p>
                <br />
                <label htmlFor="presetDesc">Preset Description:</label>
                <br />
                <textarea 
                    id="presetDesc" 
                    rows="4" 
                    cols="50"
                    onChange={handleDescChange}
                />
                <p>{descChars}/1000</p>
                <br />
                <StorePresetButton />
            </form>
        </>
    );
}

export default SavePreset; 