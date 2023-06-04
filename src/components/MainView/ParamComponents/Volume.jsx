import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Volume param and returns Volume slider
function Volume() {
    const dispatch = useDispatch();
    const volume = useSelector(store => store.volume);

    const handleVolumeChange = (e) => {
        const volumeNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_VOLUME',
            payload: volumeNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="volume">Set Volume value: {volume}</label>
            <Slider
                size="small" 
                aria-label="Volume" 
                id="volume"
                min={-100}
                max={100}
                value={volume} 
                onChange={handleVolumeChange} 
                sx={{color: "#f06a11"}}
            />
        </div>
    );
}

export default Volume;