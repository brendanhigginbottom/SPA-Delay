import Time from "../ParamComponents/Time";
import Scale from "../ParamComponents/Scale";
import React from "react";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


const TimeTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'black',
        width: 400,
        fontSize: theme.typography.pxToRem(20),
        border: '1px solid #dadde9',
    },
}));

// Grouping of audio param sliders for time-based effects
function TimeParams() {


    return (
        <>

            <Card
                sx={{ margin: "auto", width: 1, display: "inline-block", }}
                style={{ backgroundColor: '#545757', color: "whitesmoke" }}
            >
                <CardContent sx={{ mx: "1em" }}>
                    <TimeTooltip
                        title={
                            <React.Fragment>
                                <em>Time</em> <br />
                                <em>Test</em>
                            </React.Fragment>
                        }
                        arrow
                        placement="top"
                    >
                        <p>Time Parameters</p>
                    </TimeTooltip>
                    <Time />
                    <Scale />
                </CardContent>
            </Card>

        </>
    );
}

export default TimeParams;