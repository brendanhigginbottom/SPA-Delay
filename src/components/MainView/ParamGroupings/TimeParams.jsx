import Time from "../ParamComponents/Time";
import Scale from "../ParamComponents/Scale";

// imports for MUI
import { Card, CardContent } from "@mui/material";

// Grouping of audio param sliders for time-based effects
function TimeParams() {


    return (
        <>
            <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
                <CardContent sx={{ mx: "1em" }}>
                    <Time />
                    <Scale />
                </CardContent>
            </Card>
        </>
    );
}

export default TimeParams;