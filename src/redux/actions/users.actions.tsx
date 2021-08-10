import {ActionCreator} from 'redux';
import {
    FETCH_USERS,
    FetchActionTypes,
    SET_USER_ACTIVATION,
    UserActionTypes,
    UserActivationInterface,
    UsersInterface
} from "../types";
import userService from "../../services/user.service";
import {failure, request} from "./fetch.actions";

type DispatchType = (args: UserActionTypes|FetchActionTypes) => UserActionTypes|FetchActionTypes;

const fetchUsersSuccess: ActionCreator<UserActionTypes> = (data: UsersInterface) => {
    return { type: FETCH_USERS, payload: data };
}

const setUserStatus: ActionCreator<UserActionTypes> = (data: UserActivationInterface) => {
    return { type: SET_USER_ACTIVATION, payload: data };
}

export function fetchUsers(page: number = 0) {
    return async (dispatch: DispatchType) => {
        dispatch(request())
        try{
            const response = await userService.fetchUser(page);
            const payload = {
                data: response.data.map(user=>{
                    return {
                        ...user,
                        isActive: true
                    }
                }),
                page: response.page,
                total: response.total,
            }
            dispatch(fetchUsersSuccess(payload))
        }catch (e) {
            dispatch(failure(e))
        }
    }
}

export function setUserActivationStatus({value, userId}:{value: boolean, userId: string}) {
    return (dispatch: DispatchType) => {
        //User status should stored in server
        dispatch(setUserStatus({userId, isActive: value}))
    }
}
