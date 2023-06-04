import { useSelector, useDispatch } from "react-redux";

// import for MUI
import Switch  from "@mui/material/Switch";
import { Box } from "@mui/material";

// Handles dispatch for toggling parameter slider view and returns param view toggle
function AllParamsCheck() {
    const dispatch = useDispatch();
    const toggle = useSelector(store => store.paramView);

    const handleChange = (e) => {
        const inputIsChecked = e.target;
        console.log(inputIsChecked.checked);
        // let inputValue;
        let inputValue=[
            "0",
            "1"
        ]
        if (inputIsChecked.checked === false) {
            dispatch({
                type: 'SET_PARAM_VIEW',
                payload: inputValue[1],
            });
        } else {
            dispatch({
                type: 'SET_PARAM_VIEW',
                payload: inputValue[0],
            });
        }
    };


    return (
        <Box>
            <label htmlFor="allParams">Parameter View: </label>
            {/* <input type="checkbox" id="allParams" onChange={handleChange} /> */}
            {toggle === "1" ? (
                <>Basic Parameters</>
            ) :
                <>All Parameters</>
            }
            <Switch 
                id="allParams"
                onChange={handleChange}
                color="warning"
            />
        </Box>
    );
}

export default AllParamsCheck;

