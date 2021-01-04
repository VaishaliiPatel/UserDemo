import { USER, UserState, UserType } from "./types";

export const initialState: UserState = {
    users: [],
    GetUserDataResponse: {
        data: []
    },
    RequestUserData: {

    },
};
export const userReducer = (state = initialState, action: UserType) => {
    switch (action.type) {
        case USER.GET_USER_DATA_PENDING:
            return {
                ...state,
            }
        case USER.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                RequestUserData: action.payload
            }
        case USER.GET_USER_DATA_ERROR:
            return {
                ...state,
                error: action.error
            }
        case USER.ADD_USER:
            return {
                ...state,
                RequestUserData: [
                    ...state.RequestUserData,
                    {
                        firstName: action.payload.firstName,
                        picture: '',
                        id: action.payload.id,
                    }
                ]
            }
        case USER.DELETE_USER:
            if (state.RequestUserData) {
                console.log("MKMM", action.payload)
                console.log("Actionpayload", state.RequestUserData)
                return {
                    ...state,
                    RequestUserData: state.RequestUserData.filter((value, index) => {
                        console.log("data", value)
                        return value.id !== action.payload;
                    }),
                };
            }
        case USER.UPDATE_USER:
            var obj = {
                firstName: action.payload.firstName,
                picture: action.payload.picture,
                id: action.payload.id,
            }
            return Object.assign({}, state.RequestUserData, {
                RequestUserData: state.RequestUserData?.map(user => {
                    return user.id === action.payload.id ? (obj) : user
                })
            })
        default:
            return state;
    }
};

export default userReducer;
