import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Spread param and returns Spread slider
function Spread() {
    const dispatch = useDispatch();
    const spread = useSelector(store => store.spread);

    const handleSpreadChange = (e) => {
        const spreadNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_SPREAD',
            payload: spreadNumValue,
        });
    };

    return (
        <div>
            <label htmlFor="spread">Set Spread value: {spread}</label>
             <Slider
                size="small" 
                aria-label="Spread" 
                id="spread"
                min={-100}
                max={100}
                value={spread} 
                onChange={handleSpreadChange} 
                sx={{color: "#f06a11"}}
            />
        </div>
    );
}

export default Spread;