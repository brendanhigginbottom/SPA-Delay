import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Mix param and returns Mix slider
function Mix() {
    const dispatch = useDispatch();
    const mix = useSelector(store => store.mix);

    const handleMixChange = (e) => {
        const mixNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_MIX',
            payload: mixNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="mix">Set Mix value: {mix} </label>
            <Slider
                size="small" 
                aria-label="Mix" 
                id="mix"
                min={0}
                max={100}
                value={mix} 
                onChange={handleMixChange} 
            />
            <p>Mix: {mix}</p>
        </div>
    );
}

export default Mix;