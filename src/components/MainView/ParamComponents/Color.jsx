import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Color param and returns Color slider
function Color() {
    const dispatch = useDispatch();
    const color = useSelector(store => store.color);

    const handleColorChange = (e) => {
        const colorForReducer = Number(e.target.value);
        dispatch({
            type: 'SET_COLOR',
            payload: colorForReducer,
        });
    };

    return (
        <div>
            <label htmlFor="color">Set Color value: {color}</label>
            <Slider
                size="small" 
                aria-label="Color" 
                id="color"
                min={0}
                max={100}
                value={color} 
                onChange={handleColorChange}
                sx={{color: "#f06a11"}}
            />
        </div>
    );
}

export default Color;