import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// /userpreset buttons import (DELETE and PUT)
import DeletePresetButton from './DeletePresetButton.jsx';
import EditPresetButton from './EditPresetButton.jsx';
import { Card, Grid } from '@mui/material';

// Individual user presets
function Preset(preset) {
    const dispatch = useDispatch();
    const history = useHistory();

    // gets userPresets
    const userPresets = useSelector(store => store.dBPresets);

    // Takes in selected preset's id and loops over user presets to
    // update audio parameter reducers with the values store in JSON in DB
    const loadPreset = (event) => {
        const presetId = event.target.dataset.id;
        console.log(presetId);
        for (let preset of userPresets) {
            if (preset.id == presetId) {
                let presetValues = JSON.parse(preset.user_preset_values);
                console.log(presetValues);
                dispatch({type: 'SET_COLOR', payload: presetValues.color});
                dispatch({type: 'SET_FEEDBACK', payload: presetValues.feedback});
                dispatch({type: 'SET_FEEDBACK_CHECK', payload: presetValues.feedbackCheck});
                dispatch({type: 'SET_FILTER', payload: presetValues.filter});
                dispatch({type: 'SET_INPUT', payload: presetValues.input});
                dispatch({type: 'SET_MIX', payload: presetValues.mix});
                dispatch({type: 'SET_SCALE', payload: presetValues.scale});
                dispatch({type: 'SET_SPREAD', payload: presetValues.spread});
                dispatch({type: 'SET_TIME', payload: presetValues.time});
                dispatch({type: 'SET_VOLUME', payload: presetValues.volume});
                history.push('/main');
            } 
        }
    }

    return (
        <>
            <Grid item xs={3} marginX={'2em'}>
                <Card sx={{marginx: "1em"}} variant='outlined'>
                <p>{preset.preset.name}</p>
                <p>{preset.preset.description}</p>
                <button onClick={loadPreset} data-id={preset.preset.id}>Select Preset</button>
                <br />
                <DeletePresetButton
                    presetId={preset.preset.id}
                />
                <EditPresetButton
                    presetId={preset.preset}
                />
                </Card>
            </Grid>
        </>
    );
}

export default Preset;