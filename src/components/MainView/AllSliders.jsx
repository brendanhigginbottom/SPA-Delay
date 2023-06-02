import FeedbackParams from "./ParamGroupings/FeedbackParams";
import FilterParams from './ParamGroupings/FilterParams';
import SpatialParams from "./ParamGroupings/SpatialParams";
import TimeParams from "./ParamGroupings/TimeParams";
import VolumeParams from "./ParamGroupings/VolumeParams";

// Contains audio param slider components grouped by
// effect type
function AllSliders() {


    return (
        <>
            <VolumeParams />
            <FeedbackParams />
            <TimeParams />
            <FilterParams />
            <SpatialParams />

        </>
    );
}

export default AllSliders;