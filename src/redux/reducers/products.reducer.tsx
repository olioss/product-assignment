import {ADD_PRODUCT, ProductActionTypes, ProductInterface} from '../types';

const initialState: ProductInterface[] = []

export function productsReducer(state: ProductInterface[] = initialState, action: ProductActionTypes): ProductInterface[] {
    switch (action.type) {
        case ADD_PRODUCT: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}
