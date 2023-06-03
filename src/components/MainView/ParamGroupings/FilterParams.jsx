import Filter from "../ParamComponents/Filter";
import Color from "../ParamComponents/Color";

// imports for MUI
import { Card, CardContent } from "@mui/material";

// contains param sliders for filter-based effects
function FilterParams() {


    return (
        <>
            <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
                <CardContent sx={{ mx: "1em" }}>
                    <Filter />
                    <Color />
                </CardContent>
            </Card>
        </>
    );
}

export default FilterParams;