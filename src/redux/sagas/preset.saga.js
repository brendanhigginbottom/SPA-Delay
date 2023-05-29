import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postPreset(action) {
    try {
        
        yield axios.post('/api/userPreset', action.payload);
        // yield put({ type: 'FETCH_PRESETS' });
        //We can pass functions through actions
        // action.setNewElement('');
    } catch (error) {
        console.log(`error in postElement ${error}`);
        alert('Something went wrong');
    }
}




function* presetSaga() {
    yield takeLatest('ADD_PRESET', postPreset);
  }



export default presetSaga;