import Spread from "../ParamComponents/Spread";

// imports for MUI
import { Card, CardContent } from "@mui/material";

// contains components for spatial-based params
function SpatialParams() {


    return (
        <>
            <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
                <CardContent sx={{ mx: "1em" }}>
                    <Spread />
                </CardContent>
            </Card>
        </>
    );
}

export default SpatialParams;