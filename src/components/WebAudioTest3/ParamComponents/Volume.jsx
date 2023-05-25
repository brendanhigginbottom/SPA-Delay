import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Volume param and returns Volume slider
function Volume() {
    const dispatch = useDispatch();
    const volume = useSelector(store => store.volume);

    const handleVolumeChange = (e) => {
        const volumeNumValue = Number(e.target.value);
        dispatch({
            type: 'SET_VOLUME',
            payload: volumeNumValue,
        })
    };

    return (
        <div>
            <label htmlFor="volume">Set Volume value:</label>
            <input
                type="range"
                id="volume"
                min="-100"
                max="100"
                step="1"
                defaultValue={0}         
                onChange={handleVolumeChange}
            />
            <p>Volume: {volume}</p>
        </div>
    );
}

export default Volume;