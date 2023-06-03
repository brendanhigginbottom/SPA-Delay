import { useSelector, useDispatch } from "react-redux";

// import for MUI
import Switch  from "@mui/material/Switch";

// Handles dispatch for Feedback On/Off param and returns Feedback On/Off toggle
function FeedbackCheck() {
    const dispatch = useDispatch();
    const feedbackCheck = useSelector(store => store.feedbackCheck);

    const handleFeedbackCheckChange = (e) => {
        const feedbackIsChecked = e.target;
        console.log(feedbackIsChecked.checked);
        // let inputValue;
        let feedbackValue=[
            "0",
            "1"
        ]
        if (feedbackIsChecked.checked === true) {
            dispatch({
                type: 'SET_FEEDBACK_CHECK',
                payload: feedbackValue[1],
            });
        } else {
            dispatch({
                type: 'SET_FEEDBACK_CHECK',
                payload: feedbackValue[0],
            });
        }
    };


    return (
        <>
            <label htmlFor="feedbackCheck">Feedback: </label>
            {feedbackCheck === "1" ? (
                <>On</>
            ) :
                <>Off</>
            }
            <Switch 
                defaultChecked
                id="feedbackCheck"
                onChange={handleFeedbackCheckChange}
            />
        </>
    );
}

export default FeedbackCheck;

