import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postPreset(action) {
    try {

        yield axios.post('/api/userPreset', action.payload);
        console.log(action.payload);
        // yield put({ type: 'FETCH_PRESETS' });
        //We can pass functions through actions
        // action.setNewElement('');
    } catch (error) {
        console.log(`error in postPreset ${error}`);
        alert('Something went wrong');
    }
}

function* getPreset(action) {
    try {

        const presets = yield axios.get('/api/userPreset');
        yield put({ type: 'SET_dBPresets', payload: presets.data });
        console.log(presets.data);
        console.log(JSON.parse(presets.data[0].user_preset_values));
        //We can pass functions through actions
        // action.setNewElement('');
    } catch (error) {
        console.log(`error in getPreset ${error}`);
        alert('Something went wrong');
    }
}


function* presetSaga() {
    yield takeLatest('ADD_PRESET', postPreset);
    yield takeLatest('FETCH_PRESETS', getPreset)
  }



export default presetSaga;