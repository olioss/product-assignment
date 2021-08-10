import {ActionCreator} from 'redux';
import {ADD_PRODUCT, ProductActionTypes, ProductInterface} from "../types";

type DispatchType = (args: ProductActionTypes) => ProductActionTypes;

const addProductSuccess: ActionCreator<ProductActionTypes> = (product: ProductInterface) => {
    return { type: ADD_PRODUCT, payload: product };
}

export function addProduct(product: ProductInterface) {
    return (dispatch: DispatchType) => {
        dispatch(addProductSuccess(product))
    }
}
