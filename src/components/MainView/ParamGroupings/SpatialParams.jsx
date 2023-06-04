import Spread from "../ParamComponents/Spread";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const SpatialTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'black',
        maxWidth: "none",
        fontSize: theme.typography.pxToRem(20),
        border: '1px solid #dadde9',
    },
}));

// contains components for spatial-based params
function SpatialParams() {


    return (
        <>
            <Card 
                sx={{ margin: "auto", width: 1, display: "inline-block", }}
                style={{backgroundColor: '#545757', color: "whitesmoke"}}
            >
                <CardContent sx={{ mx: "1em" }}>
                    <SpatialTooltip
                    title={
                        <React.Fragment>
                            <em>Spread: Shifts the delays of left and right channels for stereo effect</em>
                        </React.Fragment>
                    }
                    arrow
                    placement="top"
                    >
                    <p>Spatial Parameters</p>
                    </SpatialTooltip>
                    <Spread />
                </CardContent>
            </Card>
        </>
    );
}

export default SpatialParams;