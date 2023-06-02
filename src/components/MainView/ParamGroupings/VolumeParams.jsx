import InputCheck from '../ParamComponents/InputCheck';
import Volume from '../ParamComponents/Volume';
import Mix from '../ParamComponents/Mix';

// contains components for volume-based effects
function VolumeParams() {


    return (
        <>
            <InputCheck />
            <Volume />
            <Mix />
        </>
    );
}

export default VolumeParams;