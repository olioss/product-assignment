import {ADD_PRODUCT, ProductActionTypes, ProductInterface} from '../types';


interface ProductsState {
    products: ProductInterface[]
}

const initialState: ProductsState = {
    products: []
};

export function productsReducer(state: ProductsState = initialState, action: ProductActionTypes): ProductsState {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        }
        default:
            return state;
    }
}
