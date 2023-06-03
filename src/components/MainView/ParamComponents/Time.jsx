import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Time param and returns Time slider
function Time() {
    const dispatch = useDispatch();
    const time = useSelector(store => store.time);

    const handleTimeChange = (e) => {
        const timeNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_TIME',
            payload: timeNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="time">Set Time value: {time}</label>
            <Slider
                size="small" 
                aria-label="Time" 
                id="time"
                min={0}
                max={100}
                value={time} 
                onChange={handleTimeChange} 
            />
        </div>
    );
}

export default Time;