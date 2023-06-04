import FeedbackCheck from "../ParamComponents/FeedbackCheck";
import Feedback from "../ParamComponents/Feedback";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const FeedbackTooltip = styled(({ className, ...props }) => (
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

// contains audio param components for feedback-based effects
function FeedbackParams() {


    return (
        <>
            <Card
                sx={{ margin: "auto", width: 1, display: "inline-block", }}
                style={{ backgroundColor: '#545757', color: "whitesmoke" }}
            >
                <CardContent sx={{ mx: "1em" }}>
                    <FeedbackTooltip
                        title={
                            <React.Fragment>
                                <em>Feedback</em> <br />
                                <em>Test</em>
                            </React.Fragment>
                        }
                        arrow
                        placement="top"
                    >
                        <p>Feedback Parameters</p>
                    </FeedbackTooltip>
                    <FeedbackCheck />
                    <Feedback />
                </CardContent>
            </Card>
        </>
    );
}

export default FeedbackParams;