

// form that SaveUserPreset button takes user to to enter name and desc of preset
// contains dispatch for PUT saga 
function SavePreset() {

    const putPreset = () => {
        // sends preset to DB

    }

    const handleNameChange = (e) => {
        // send name to redux
    }

    const handleDescChange = (e) => {
        // send desc to redux
    }
    
    return (
        <>
            <h1>SavePreset</h1>
            <form onSubmit={putPreset}>
                <label htmlFor="presetName">Preset Name:</label>
                <input type="text" id="presetName" onChange={handleNameChange}/>
                <br />
                <label htmlFor="presetDesc">Preset Description:</label>
                <input type="text" id="presetDesc" onChange={handleDescChange}/>
                <br />
                <input type="submit" value="Save Preset" />
            </form>
        </>
    );
}

export default SavePreset; 