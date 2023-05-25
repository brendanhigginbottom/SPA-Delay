import { useSelector, useDispatch } from "react-redux";

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
            <label htmlFor="spread">Set Spread value:</label>
            <input
                type="range"
                id="spread"
                min="-100"
                max="100"
                step="1"
                defaultValue={spread}         
                onChange={handleSpreadChange}
            />
            <p>Spread: {spread}</p>
        </div>
    );
}

export default Spread;