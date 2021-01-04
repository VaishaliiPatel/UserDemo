import {AddUserAction, DeleteUserAction, GetUserDataError, GetUserDataPending, GetUserDataResponse, GetUserDataSuccess, RequestUpdateUserData, RequestUserData, UpdateUserAction, USER, UserType} from './types';
import axios from 'axios';

export const GetUserData = (): GetUserDataPending => {
  return {
    type: USER.GET_USER_DATA_PENDING
  };
};

export const GetUserSuccess = (response:RequestUserData) : GetUserDataSuccess => ({
    type:USER.GET_USER_DATA_SUCCESS,
    payload:response
})

export const GetDataError = (err:any) : GetUserDataError =>({
    type:USER.GET_USER_DATA_ERROR,
    error:err
})
export const addUser = (user: RequestUserData): AddUserAction => {
    return {
        type: USER.ADD_USER,
        payload: user
    }

}
export const deleteUser = (user: any): DeleteUserAction => {
  return {
      type: USER.DELETE_USER,
      payload: user
  }

}
export const upadteUser = (user:RequestUpdateUserData) : UpdateUserAction =>{
  return{
      type:USER.UPDATE_USER,
      payload:user
  }
}

export const getData = async () => {
    const BASE_URL = 'https://dummyapi.io/data/api';
        const APP_ID = '5fef0aad33f6063bf1e01f29';
    try {
      const response = await fetch(`${BASE_URL}/user?limit=100`, { headers: { 'app-id': APP_ID } });
      const data = await response.json();
      console.log("Data------------------123",data.data)
      return data.data;
    } catch (error) {
      console.log("error",error);
    }
  };
