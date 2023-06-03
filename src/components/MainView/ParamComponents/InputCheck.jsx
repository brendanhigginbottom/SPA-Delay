import { useSelector, useDispatch } from "react-redux";

// import for MUI
import Switch  from "@mui/material/Switch";

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
        if (inputIsChecked.checked === true) {
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue[1],
            });
        } else {
            dispatch({
                type: 'SET_INPUT',
                payload: inputValue[0],
            });
        }
    };


    return (
        <>
            <label htmlFor="input">Input: </label>
            {input === "1" ? (
                <>On</>
            ) :
                <>Off</>
            }
            <Switch 
                defaultChecked
                id="input"
                onChange={handleInputChange}
            />
        </>
    );
}

export default InputCheck;

