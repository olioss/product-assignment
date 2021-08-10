export interface UserInterface {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    picture: string,
    isActive: boolean
}

export interface UsersInterface {
    data: UserInterface[],
    page: number,
    total: number,
    loading? : boolean
}

export interface UserActivationInterface {
    userId: string,
    isActive: boolean
}

export const FETCH_USERS = "FETCH_USERS"
export const SET_USER_ACTIVATION = "SET_USER_ACTIVATION"

interface FetchUsersAction {
    type: typeof FETCH_USERS,
    payload: UsersInterface
}

interface SetUserActivationAction {
    type: typeof SET_USER_ACTIVATION,
    payload: UserActivationInterface
}


export type UserActionTypes = FetchUsersAction|SetUserActivationAction
