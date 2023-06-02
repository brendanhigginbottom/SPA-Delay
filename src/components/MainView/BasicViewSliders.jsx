import InputCheck from "./ParamComponents/InputCheck";
import Mix from "./ParamComponents/Mix";
import Feedback from "./ParamComponents/Feedback";
import Time from "./ParamComponents/Time";

// contains grouping of Basic View slider components
function BasicViewSliders() {


    return (
        <>
            <InputCheck />
            <Time />
            <Feedback />
            <Mix />
        </>
    );
}

export default BasicViewSliders;