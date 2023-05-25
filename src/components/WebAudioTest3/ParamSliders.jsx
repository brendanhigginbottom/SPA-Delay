// Import parameter components
import Color from './ParamComponents/Color.jsx';
import Feedback from './ParamComponents/Feedback.jsx';
import Mix from './ParamComponents/Mix.jsx';
import Filter from './ParamComponents/Filter.jsx';
import InputCheck from './ParamComponents/InputCheck.jsx';
import Time from './ParamComponents/Time.jsx';
import Scale from './ParamComponents/Scale.jsx';
import Volume from './ParamComponents/Volume.jsx';
import FeedbackCheck from './ParamComponents/FeedbackCheck.jsx';
import Spread from './ParamComponents/Spread.jsx';

function ParamSliders() {

    return (
        <>
            <br />
            {/* Input to delay on/off */}
            <InputCheck />
            {/* Time-based parameters */}
            <Time />
            <Scale />
            {/* Feedback parameters */}
            <FeedbackCheck />
            <Feedback />
            {/* Filter parameters */}
            <Filter />
            <Color />
            {/* Volume and Spatial parameters */}
            <Spread />
            <Volume />
            <Mix />
        </>
    );
}

export default ParamSliders;