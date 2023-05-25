import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Mix param and returns Mix slider
function Mix() {
    const dispatch = useDispatch();
    const mix = useSelector(store => store.mix);

    const handleMixChange = (e) => {
        const mixNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_MIX',
            payload: mixNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="mix">Set Mix value:</label>
            <input
                type="range"
                id="mix"
                min="0"
                max="100"
                step="1"
                defaultValue={50}         
                onChange={handleMixChange}
            />
            <p>Mix: {mix}</p>
        </div>
    );
}

export default Mix;