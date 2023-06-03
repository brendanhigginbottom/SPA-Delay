import FeedbackParams from "./ParamGroupings/FeedbackParams";
import FilterParams from './ParamGroupings/FilterParams';
import SpatialParams from "./ParamGroupings/SpatialParams";
import TimeParams from "./ParamGroupings/TimeParams";
import VolumeParams from "./ParamGroupings/VolumeParams";

// imports for MUI
import { Box } from "@mui/material";

// Contains audio param slider components grouped by
// effect type
function AllSliders() {


    return (
        <>
            <Box sx={{ width: .95, margin: "auto" }}>
                <VolumeParams />
                <FeedbackParams />
                <TimeParams />
                <FilterParams />
                <SpatialParams />
            </Box>
        </>
    );
}

export default AllSliders;