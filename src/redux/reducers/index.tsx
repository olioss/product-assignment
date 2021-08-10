import {combineReducers} from 'redux';
import {productsReducer} from "./products.reducer";
import {usersReducer} from "./users.reducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
