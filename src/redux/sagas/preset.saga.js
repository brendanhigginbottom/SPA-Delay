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

function* getPreset() {
    try {

        const presets = yield axios.get('/api/userPreset');
        yield put({ type: 'SET_dBPresets', payload: presets.data });
        console.log(presets.data);
    } catch (error) {
        console.log(`error in getPreset ${error}`);
        alert('Something went wrong');
    }
}

function* deletePreset(action) {
    try {
        yield axios.delete(`/api/userPreset/${action.payload}`);
        console.log('preset deleted');
        yield put({ type: 'FETCH_PRESETS'})
    } catch (error) {
        // console.log(`error in deletePreset ${error}`);
        alert('Something went wrong');
    }
} 

function* presetSaga() {
    yield takeLatest('ADD_PRESET', postPreset);
    yield takeLatest('FETCH_PRESETS', getPreset);
    yield takeLatest('DELETE_PRESET', deletePreset);
}

export default presetSaga;