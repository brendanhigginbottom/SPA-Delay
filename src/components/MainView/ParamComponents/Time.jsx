import { useSelector, useDispatch } from "react-redux";

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
            <label htmlFor="time">Set Time value:</label>
            <input
                type="range"
                id="time"
                min="0"
                max="100"
                step="1"
                defaultValue={50}         
                onChange={handleTimeChange}
            />
            <p>Time: {time}</p>
        </div>
    );
}

export default Time;