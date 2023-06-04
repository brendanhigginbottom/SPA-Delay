import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Preset from './Preset.jsx';

// /userpreset buttons import (DELETE and PUT)
import DeletePresetButton from './DeletePresetButton.jsx';
import EditPresetButton from './EditPresetButton.jsx';
import { Grid } from '@mui/material';
import Footer from '../Footer/Footer.jsx';

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


    return(
        <>
            <h1>My Presets</h1>
            <Grid container spacing={2} sx={{marginx: "1em"}}>
            {
                userPresets.map(preset => {
                    return (
                        <Preset
                            key={preset.id}
                            preset={preset}
                        />
                    )
                })
            }
            </Grid>
        </>
    );
}

export default UserPresets;