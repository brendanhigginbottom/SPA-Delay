import { useSelector, useDispatch } from "react-redux";

// imports for MUI
import { Slider } from "@mui/material";

// Handles dispatch for Filter param and returns Filter slider
function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(store => store.filter);

    // contains objects for displying scale type below slider 
    const marks = [
        { value: 0, label: 'None', },
        { value: 1, label: 'Low Pass', },
        { value: 2, label: 'High Pass', },
        { value: 3, label: 'Band Pass', },
        { value: 4, label: 'Notch', },
    ];

    const filterText = (value) => {
        return `${value}`
    }

    const handleFilterChange = (e) => {
        const filterNumValue = Number(e.target.value);
        const filterNames = [
            'None',
            'LP',
            'HP',
            'BP',
            'Notch'
        ];
        const filterEnumForReducer = filterNames[filterNumValue]
        dispatch({
            type: 'SET_FILTER',
            payload: filterEnumForReducer,
        })
    };


    return (
        <>
            <div>
                <label htmlFor="filter">Set Filter type: {filter} </label>
                <Slider
                    size="small"
                    aria-label="Custom marks"
                    id="filter"
                    min={0}
                    max={4}
                    getAriaValueText={filterText}
                    step={1}
                    marks={marks}
                    onChange={handleFilterChange}
                    sx={{color: "#f06a11"}}
                />
            </div>
        </>
    );
}

export default Filter;