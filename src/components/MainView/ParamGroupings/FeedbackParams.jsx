import FeedbackCheck from "../ParamComponents/FeedbackCheck";
import Feedback from "../ParamComponents/Feedback";

// imports for MUI
import { Card, CardContent } from "@mui/material";

// contains audio param components for feedback-based effects
function FeedbackParams() {


    return (
        <>
            <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
            <CardContent sx={{ mx: "1em" }}>
                <FeedbackCheck />
                <Feedback />
            </CardContent>
            </Card>
        </>
    );
}

export default FeedbackParams;