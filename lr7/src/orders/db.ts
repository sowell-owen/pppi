import { IOrder } from "./types";

export const ORDER_LIST: IOrder[] = [{
    id: 1,
    products: [{ id: 1, name: 'Iphone 14', price: 1099 }, { id: 2, name: 'Iphone XS', price: 499 }, {
        id: 3,
        name: 'Iphone XR',
        price: 699
    },],
    totalPrice: 2297,
    totalItems: 3,
}, {
    id: 2,
    products: [{ id: 1, name: 'Iphone 14', price: 1099 }, { id: 2, name: 'Iphone XS', price: 499 }],
    totalPrice: 1598,
    totalItems: 2,
}, {
    id: 3,
    products: [{ id: 2, name: 'Iphone XS', price: 499 }],
    totalPrice: 499,
    totalItems: 1,
}, {
    id: 4,
    products: [{
        id: 3,
        name: 'Iphone XR',
        price: 699
    },],
    totalPrice: 699,
    totalItems: 1,
}, {
    id: 5,
    products: [{ id: 1, name: 'Iphone 14', price: 1099 }],
    totalPrice: 1099,
    totalItems: 1,
}, {
    id: 6,
    products: [{ id: 1, name: 'Iphone 14', price: 1099 }],
    totalPrice: 1099,
    totalItems: 1,
}]