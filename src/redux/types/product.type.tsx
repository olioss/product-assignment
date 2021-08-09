export interface ProductInterface {
    id: String,
    name: String,
    description: String,
    price: number,
}

export const ADD_PRODUCT = "ADD_PRODUCT"

interface AddProductAction {
    type: typeof ADD_PRODUCT,
    payload: ProductInterface
}


export type ProductActionTypes = AddProductAction
