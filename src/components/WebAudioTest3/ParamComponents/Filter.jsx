import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Filter param and returns Filter slider
function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(store => store.filter);

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

     //! Return to this for QoL
    // Display filter text 
    // This is necessary because I need to pass abbreviations
    // to enumValue on delay but want user to see full name
    // const handleFilterText = () => {
    //     const filterNumValue = Number(document.querySelector('#filter').value);
    //     console.log(filterNumValue)
    //     const filterNames = [
    //         'None',
    //         'Low Pass',
    //         'High Pass',
    //         'Band Pass',
    //         'Notch'
    //     ];

    //     return filterNames[filterNumValue];

    // }

    return (
        <>
            <div>
                <label htmlFor="filter">Set Filter type:</label>
                <input
                    type="range"
                    id="filter"
                    min="0"
                    max="4"
                    step="1"
                    defaultValue={0}
                    onChange={handleFilterChange}
                />
                <p>Filter type: {filter}</p>
            </div>
        </>
    );
}

export default Filter;