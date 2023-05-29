import { useSelector, useDispatch } from "react-redux";

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
            <label htmlFor="color">Set Color value:</label>
            <input
                type="range"
                id="color"
                min="0"
                max="100"
                step="1"
                defaultValue={color}
                onChange={handleColorChange}
            />
            <p>Color: {color}</p>
        </div>
    );
}

export default Color;