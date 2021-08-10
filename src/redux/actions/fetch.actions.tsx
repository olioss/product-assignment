import {FETCH_FAILURE, FETCH_REQUEST, FetchActionTypes} from "../types"
import {ActionCreator} from "redux";

export const request: ActionCreator<FetchActionTypes> = () => {
    return { type: FETCH_REQUEST };
}
export const failure: ActionCreator<FetchActionTypes> = (error: any) => {
    return { type: FETCH_FAILURE, payload: error };
}
