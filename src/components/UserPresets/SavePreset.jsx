import { useSelector, useDispatch } from "react-redux";

// form that SaveUserPreset button takes user to to enter name and desc of preset
// contains dispatch for PUT saga 
function SavePreset() {
    // setup for redux
    const dispatch = useDispatch();
    // getting presetName and Desc for character limit
    const nameChars = useSelector(store => store.presetName).length;
    const descChars = useSelector(store => store.presetDesc).length;



    const putPreset = () => {
        // sends preset to DB

    }

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
            <h1>SavePreset</h1>
            <form onSubmit={putPreset}>
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
                <input type="submit" value="Save Preset" />
            </form>
        </>
    );
}

export default SavePreset; 