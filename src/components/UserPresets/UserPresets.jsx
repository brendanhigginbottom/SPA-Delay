import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

// Displays user's saved presets which onClick will navigate user to 
// Delay view and populate delay with stored values
// Contains GET saga dispatch to get user's presets
function UserPresets() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PRESETS',
        })
    }, []);

    return(
        <>
            <h1>My Presets</h1>
        </>
    );
}

export default UserPresets;