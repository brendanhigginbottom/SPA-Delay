import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Filter param and returns Filter slider
function Scale() {
    const dispatch = useDispatch();
    const scale = useSelector(store => store.scale);

    const handleScaleChange = (e) => {
        const scaleNumValue = Number(e.target.value);
        const scaleValues = [
            '1/4',
            '1/2',
            '3/4',
            'x1',
            '3/2',
            'x2',
            'x4'
        ];
        const scaleEnumForReducer = scaleValues[scaleNumValue]
        dispatch({
            type: 'SET_SCALE',
            payload: scaleEnumForReducer,
        })
    };

    return (
        <>
            <div>
                <label htmlFor="scale">Set Scale type:</label>
                <input
                    type="range"
                    id="scale"
                    min="0"
                    max="6"
                    defaultValue={3}
                    step="1"
                    onChange={handleScaleChange}
                />
                <p>Scale value: {scale}</p>
            </div>
        </>
    );
}

export default Scale;