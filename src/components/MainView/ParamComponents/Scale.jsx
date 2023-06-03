import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";


// Handles dispatch for Filter param and returns Filter slider
function Scale() {
    const dispatch = useDispatch();
    const scale = useSelector(store => store.scale);

    // contains objects for displying scale type below slider 
    const marks = [
        { value: 0, label: '1/4', },
        { value: 1, label: '1/2', },
        { value: 2, label: '3/4', },
        { value: 3, label: 'x1', },
        { value: 4, label: '3/2', },
        { value: 5, label: 'x2', },
        { value: 6, label: 'x4', },
    ];

    const scaleText = (value) => {
        return `${value}`
    }

    // gets nubmer value from slider and dispatchs string for eNum value in delay
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
                <label htmlFor="scale">Set Scale type: {scale} </label>
                <Slider
                    size="small"
                    aria-label="Custom marks"
                    id="scale"
                    min={0}
                    max={6}
                    getAriaValueText={scaleText}
                    step={1}
                    marks={marks}
                    onChange={handleScaleChange}
                />
            </div>
        </>
    );
}

export default Scale;