import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postPreset(action) {
    try {

        yield axios.post('/api/userPreset', action.payload);
        console.log(action.payload);
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
        console.log(`error in deletePreset ${error}`);
        alert('Something went wrong');
    }
} 

function* putPreset(action) {
    // put saga
    try {
        yield axios.put(`/api/userPreset/${action.payload}`, action.data);
        console.log('preset edited');
        yield put({ type: 'FETCH_PRESETS'});
    } catch (error) {
        console.log(`Error in put ${error}`);
        alert('Something went wrong');
    }
}

function* presetSaga() {
    yield takeLatest('ADD_PRESET', postPreset);
    yield takeLatest('FETCH_PRESETS', getPreset);
    yield takeLatest('DELETE_PRESET', deletePreset);
    yield takeLatest('EDIT_PRESET', putPreset);
}

export default presetSaga;