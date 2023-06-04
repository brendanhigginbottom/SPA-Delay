import InputCheck from '../ParamComponents/InputCheck';
import Volume from '../ParamComponents/Volume';
import Mix from '../ParamComponents/Mix';
import React from 'react';

// imports for MUI
import { Card, CardContent, } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


const VolumeTooltip = styled(({ className, ...props }) => (
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

// contains components for volume-based effects
function VolumeParams() {


    return (
        <>
            <Card
                sx={{ margin: "auto", width: 1, display: "inline-block", }}
                style={{ backgroundColor: '#545757', color: "whitesmoke" }}
            >
                <CardContent sx={{ mx: "1em" }}>
                    <VolumeTooltip
                        title={
                            <React.Fragment>
                                <em>Volume and Input</em> <br />
                                <em>Test</em>
                            </React.Fragment>
                        }
                        arrow
                        placement="top"
                    >
                        <p>Input and Volume Parameters</p>
                    </VolumeTooltip>
                    <InputCheck />
                    <Volume />
                    <Mix />
                </CardContent>
            </Card>
        </>
    );
}

export default VolumeParams;