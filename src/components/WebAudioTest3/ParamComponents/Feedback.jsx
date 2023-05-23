import { useSelector, useDispatch } from "react-redux";

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
            <label htmlFor="feedback">Set Feedback value:</label>
            <input
                type="range"
                id="feedback"
                min="0"
                max="100"
                step="1"
                defaultValue={50}
                onChange={handleFeedbackChange}
            />
            <p>Feedback: {feedback}</p>
        </div>
    );
}

export default Feedback;