import InputCheck from "./ParamComponents/InputCheck";
import Mix from "./ParamComponents/Mix";
import Feedback from "./ParamComponents/Feedback";
import Time from "./ParamComponents/Time";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const BasicDelayTooltip = styled(({ className, ...props }) => (
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

// contains grouping of Basic View slider components
function BasicViewSliders() {


    return (
        <>
            <Box sx={{ width: .95, margin: "auto" }}>
                <Card
                    sx={{ margin: "auto", width: 1, display: "inline-block", }}
                    style={{ backgroundColor: '#545757', color: "whitesmoke" }}
                    variant="outlined"
                >
                    <CardContent sx={{ mx: "1em" }}>
                        <BasicDelayTooltip
                            title={
                                <React.Fragment>
                                    <em>Basic Delay</em> <br />
                                    <em>Test</em>
                                </React.Fragment>
                            }
                            arrow
                            placement="top"
                        >
                            <p>Basic Delay Parameters</p>
                        </BasicDelayTooltip>
                        <InputCheck />
                        <Time />
                        <Feedback />
                        <Mix />
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default BasicViewSliders;