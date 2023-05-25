import { useSelector, useDispatch } from "react-redux";

// Handles dispatch for Input param and returns Input toggle
function InputCheck() {
    const dispatch = useDispatch();
    const input = useSelector(store => store.input);

    const handleInputChange = (e) => {
        const inputIsChecked = e.target.value;
        let inputValue;
        if (inputIsChecked.checked === false) {
            console.log('not checked')
            inputValue = 1;
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue,
            });
        } else {
            console.log('checked')
            inputValue = 0;
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue,
            });
        }
    };


    return (
        <>
            <label htmlFor="input">Input </label>
            <input type="checkbox" id="input" onChange={handleInputChange} />
        </>
    );
}

export default InputCheck;

