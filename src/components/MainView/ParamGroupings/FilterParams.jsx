import Filter from "../ParamComponents/Filter";
import Color from "../ParamComponents/Color";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const FilterTooltip = styled(({ className, ...props }) => (
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

// contains param sliders for filter-based effects
function FilterParams() {


    return (
        <>
            <Card
                sx={{ margin: "auto", width: 1, display: "inline-block", }}
                style={{ backgroundColor: '#545757', color: "whitesmoke" }}
            >
                <CardContent sx={{ mx: "1em" }}>
                    <FilterTooltip
                        title={
                            <React.Fragment>
                                <em>Filter</em> <br />
                                <em>Test</em>
                            </React.Fragment>
                        }
                        arrow
                        placement="top"
                    >
                        <p>Filter Parameters</p>
                    </FilterTooltip>
                    <Filter />
                    <Color />
                </CardContent>
            </Card>
        </>
    );
}

export default FilterParams;