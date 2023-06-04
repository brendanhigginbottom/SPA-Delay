import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Feedback param and returns Feedback slider
function Feedback() {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

    // Need to limit this to 80-90 to prevent user from blowing out their speakers
    const handleFeedbackChange = (e) => {
        const feedbackNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_FEEDBACK',
            payload: feedbackNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="feedback">Set Feedback value: {feedback}</label>
            <Slider
                size="small" 
                aria-label="Feedback" 
                id="feedback"
                min={0}
                max={100}
                value={feedback} 
                onChange={handleFeedbackChange}
                sx={{color: "#f06a11"}}
            />
        </div>
    );
}

export default Feedback;