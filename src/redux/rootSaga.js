import { fetchMusicData } from "../services/musicFetcher";
import {takeLatest,call,put} from 'redux-saga/effects'
import { getMusicsRequest,getMusicsFailure, getMusicsSuccess } from "./slices/musicSlice";

function* fetchMusic(){
    try {
        const music=yield call(fetchMusicData);
        yield put(getMusicsSuccess(music.data));
    } catch (error) {
        // console.log("eroror occured",error);
        yield put(getMusicsFailure(error.message));
    }
}
export function* rootSaga() {
    yield takeLatest(getMusicsRequest.type, fetchMusic);
  }
/**
 const data=yield call(getMusicsRequest.type,fetchMusicData)
 * export function* watcherSaga(){
    yield takeLeading(GET_USER,handleGetUser);
}
 */

/**
 * 
function* fetchUserSaga(action) {
  try {
    const user = yield call(api.fetchUser, action.payload); // Assume api.fetchUser is a function that fetches user data
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* watchFetchUser() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}

export default watchFetchUser;
 */