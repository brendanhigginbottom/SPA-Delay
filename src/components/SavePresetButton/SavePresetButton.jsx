import { useHistory } from 'react-router-dom';


// button navigates user to /savepreset where the dispatch will 
// occur after adding name and description
function SavePresetButton() {

    // setting history
    const history = useHistory();

    const savePreset = () => {
        history.push('/savepreset');
    }

    return (
        <>
            <button onClick={savePreset}>Save Preset</button>
        </>
    );
}

export default SavePresetButton;