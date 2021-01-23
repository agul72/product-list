import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "./actionTypes";

export function createProduct(product) {
    return {
        type: CREATE_PRODUCT,
        payload: product
    }
}

export function updateProduct(product) {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}

export function deleteProduct(index) {
    return {
        type: DELETE_PRODUCT,
        payload: index
    }
}
