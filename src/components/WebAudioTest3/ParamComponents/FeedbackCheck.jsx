import { useSelector, useDispatch } from "react-redux";

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
        if (feedbackIsChecked.checked === false) {
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
            <label htmlFor="feedbackCheck">Feedback </label>
            <input type="checkbox" id="feedbackCheck" onChange={handleFeedbackCheckChange} />
            {feedbackCheck === "1" ? (
                <>On</>
            ) :
                <>Off</>
            }
        </>
    );
}

export default FeedbackCheck;

