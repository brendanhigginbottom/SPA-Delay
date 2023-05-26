

// form that SaveUserPreset button takes user to to enter name and desc of preset
// contains dispatch for PUT saga 
function SavePreset() {

    const putPreset = () => {
        // sends preset to DB

    }


    return (
        <>
            <h1>SavePreset</h1>
            <form onSubmit={putPreset}>
                <input type="text" />
                <input type="text" />
                <input type="submit" value="Save Preset" />
            </form>
        </>
    );
}

export default SavePreset; 