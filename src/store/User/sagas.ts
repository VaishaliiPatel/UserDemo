import { put,call, takeEvery } from 'redux-saga/effects';
import {getData, GetDataError, GetUserSuccess} from './actions'
import { GetUserDataPending, USER } from './types';

export function* getUserData(action:GetUserDataPending) {
    try {
        const response = yield call(getData)
        yield put(GetUserSuccess(response));
    }
    catch(error){
        yield put(GetDataError(error))
    }
}

export default function* watcherUserData(){
    yield takeEvery(USER.GET_USER_DATA_PENDING,getUserData)
}