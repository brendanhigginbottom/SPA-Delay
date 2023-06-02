import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Preset from './Preset.jsx';

// /userpreset buttons import (DELETE and PUT)
import DeletePresetButton from './DeletePresetButton.jsx';
import EditPresetButton from './EditPresetButton.jsx';

// Displays user's saved presets which onClick will navigate user to 
// Delay view and populate delay with stored values
// Contains GET saga dispatch to get user's presets
function UserPresets() {
    const history = useHistory();
    const dispatch = useDispatch();

    const userPresets = useSelector(store => store.dBPresets);

    // gets presets from DB 
    useEffect(() => {
        dispatch({
            type: 'FETCH_PRESETS',
        })
    }, []);

    console.log(userPresets);
    // console.log(userPresets);

    // // Takes in selected preset's id and loops over user presets to
    // // update audio parameter reducers with the values store in JSON in DB
    // const loadPreset = (event) => {
    //     const presetId = event.target.dataset.id;
    //     console.log(presetId);
    //     for (let preset of userPresets) {
    //         if (preset.id == presetId) {
    //             let presetValues = JSON.parse(preset.user_preset_values);
    //             console.log(presetValues);
    //             dispatch({type: 'SET_COLOR', payload: presetValues.color});
    //             dispatch({type: 'SET_FEEDBACK', payload: presetValues.feedback});
    //             dispatch({type: 'SET_FEEDBACK_CHECK', payload: presetValues.feedbackCheck});
    //             dispatch({type: 'SET_FILTER', payload: presetValues.filter});
    //             dispatch({type: 'SET_INPUT', payload: presetValues.input});
    //             dispatch({type: 'SET_MIX', payload: presetValues.mix});
    //             dispatch({type: 'SET_SCALE', payload: presetValues.scale});
    //             dispatch({type: 'SET_SPREAD', payload: presetValues.spread});
    //             dispatch({type: 'SET_TIME', payload: presetValues.time});
    //             dispatch({type: 'SET_VOLUME', payload: presetValues.volume});
    //             history.push('/main');
    //         } 
    //     }
    // }

    return(
        <>
            <h1>My Presets</h1>
            {
                userPresets.map(preset => {
                    return (
                        <Preset
                            key={preset.id}
                            preset={preset}
                        />
                    )
                    // return (
                    //     <div key={preset.id}>
                    //         <p>{preset.name}</p>
                    //         <p>{preset.description}</p>
                    //         <button onClick={loadPreset} data-id={preset.id}>Select Preset</button>
                    //         <br />
                    //         <DeletePresetButton 
                    //             presetId={preset.id}
                    //         />
                    //         <EditPresetButton 
                    //             presetId={preset}
                    //         />
                    //     </div>
                    // )
                })
            }
        </>
    );
}

export default UserPresets;