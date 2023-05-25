import Color from './ParamComponents/Color.jsx';
import Feedback from './ParamComponents/Feedback.jsx';
import Mix from './ParamComponents/Mix.jsx';
import Filter from './ParamComponents/Filter.jsx';
import InputCheck from './ParamComponents/InputCheck.jsx';

function ParamSliders() {

    return (
        <>
            <br />
            <InputCheck />
            <Color />
            <Filter />
            <Feedback />
            <Mix />
        </>
    );
}

export default ParamSliders;