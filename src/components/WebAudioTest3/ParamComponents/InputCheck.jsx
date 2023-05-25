import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Input param and returns Input toggle
function InputCheck() {
    const dispatch = useDispatch();
    const input = useSelector(store => store.input);

    const handleInputChange = (e) => {
        const inputIsChecked = e.target;
        console.log(inputIsChecked.checked);
        // let inputValue;
        let inputValue=[
            "0",
            "1"
        ]
        if (inputIsChecked.checked === false) {
            // inputValue = 1;
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue[1],
            });
        } else {
            // inputValue = 0;
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue[0],
            });
        }
    };


    return (
        <>
            <label htmlFor="input">Input </label>
            <input type="checkbox" id="input" onChange={handleInputChange} />
            {input}
        </>
    );
}

export default InputCheck;

