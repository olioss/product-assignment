import {
    FETCH_REQUEST,
    FETCH_USERS,
    FetchActionTypes,
    SET_USER_ACTIVATION,
    UserActionTypes,
    UsersInterface
} from "../types";

const initialState: UsersInterface = {
    data: [],
    total: 0,
    page: 0,
    loading: false
};

export function usersReducer(state: UsersInterface = initialState, action: UserActionTypes| FetchActionTypes): UsersInterface {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS:
            return {
                ...state,
                data: action.payload.page === 0 ? action.payload.data : [...state.data, ...action.payload.data],
                page: action.payload.page,
                total: action.payload.total,
                loading: false
            }
        case SET_USER_ACTIVATION:
            return {
                ...state,
                data: state.data.map(user=>{
                    return user.id === action.payload.userId ? {
                        ...user,
                        isActive: action.payload.isActive
                    } : user
                })
            }
        default:
            return state;
    }
}
