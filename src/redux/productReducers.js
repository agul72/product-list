import {combineReducers} from "redux";
import {localStorageProducts, mockProducts} from "../services/ProductService";
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "./actionTypes";

const initialProductsState = {
    // product: localStorageProducts ? localStorageProducts : [] // for production
    product: localStorageProducts ? localStorageProducts : mockProducts // for testing
};

function productReducer(state = initialProductsState, action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                product: [...state.product, action.payload]
        };

        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(
                    (product, index) =>
                        index !== action.payload)
            };

        case UPDATE_PRODUCT:
            return {
                ...state,
                product: state.product.map(product => {
                    if (product.id === action.payload.id) {
                        product = action.payload;
                    }
                    return product;
                })
            }

        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    product: productReducer
})
