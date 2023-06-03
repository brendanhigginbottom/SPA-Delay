import InputCheck from '../ParamComponents/InputCheck';
import Volume from '../ParamComponents/Volume';
import Mix from '../ParamComponents/Mix';

// imports for MUI
import { Card, CardContent } from "@mui/material";

// contains components for volume-based effects
function VolumeParams() {


    return (
        <>
            <Card sx={{ margin: "auto", width: 1, display: "inline-block", }}>
                <CardContent sx={{ mx: "1em" }}>
                    <InputCheck />
                    <Volume />
                    <Mix />
                </CardContent>
            </Card>
        </>
    );
}

export default VolumeParams;