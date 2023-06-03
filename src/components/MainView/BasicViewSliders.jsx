import InputCheck from "./ParamComponents/InputCheck";
import Mix from "./ParamComponents/Mix";
import Feedback from "./ParamComponents/Feedback";
import Time from "./ParamComponents/Time";

// imports for MUI
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/material";

// contains grouping of Basic View slider components
function BasicViewSliders() {


    return (
        <>
            <Box sx={{ width: .95, margin: "auto" }}>
                <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
                    <CardContent sx={{ mx: "1em" }}>
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