export enum USER {
  GET_USER_DATA_PENDING = 'GET_USER_DATA_PENDING',
  GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS',
  GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR',
  ADD_USER = "ADD_USER",
  DELETE_USER = "DELETE_USER",
  UPDATE_USER="UPDATE_USER"
}

export interface UserState {
  GetUserDataResponse: GetUserDataResponse;
  users:any[];
  RequestUserData?:RequestUserData;
}
export interface GetUserDataResponse {
  data: any[];
}
export interface GetUserDataPending {
  type: USER.GET_USER_DATA_PENDING;
}

export interface GetUserDataError {
    type:USER.GET_USER_DATA_ERROR,
    error:any
}

export interface GetUserDataSuccess{
    type:USER.GET_USER_DATA_SUCCESS,
    payload:RequestUserData
}
export interface RequestUserData {
  firstName?: any,
  picture?: any,
  id?: any,
}
export interface AddUserAction {
  type: USER.ADD_USER,
  payload: RequestUserData
}
export interface DeleteUserAction{
  type:USER.DELETE_USER,
  payload:any
} 
export interface RequestUpdateUserData {
  firstName?: any,
  picture?: any,
  id?: any,
}
export interface UpdateUserAction{
  type:USER.UPDATE_USER,
  payload:RequestUpdateUserData
}

export type UserType = GetUserDataPending | GetUserDataError | GetUserDataSuccess | AddUserAction | DeleteUserAction | UpdateUserAction;
