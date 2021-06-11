import { products } from "./api.js";
import { CartItem } from "../models/cartItem.js";
import { cartRender } from "../views/cartRender.js";

export let cart = [];
export const addToCart = (id_param) => {
    let { id, name, price, image } = products.find((item) => {
        if (item.id == id_param) return item;
    });
    if (cart.length < 1) {
        cart.push(new CartItem(id, name, price, image, 1));
    } else {
        let condition = true;
        cart.find((item) => {
            if (item.id == id_param) {
                item.quantity += 1;
                condition = false;
            }
        });
        if (condition) {
            cart.push(new CartItem(id, name, price, image, 1));
        }
    }
    cartRender();
    console.log(cart);
};
export const increaseQuantity = (id) => {
    for (const item of cart) {
        if (item.id == id) item.quantity += 1;
    }
    cartRender();
};
export const decreaseQuantity = (id) => {
    for (const item of cart) {
        if (item.id == id)
            if (item.quantity > 1) item.quantity -= 1;
            else removeCartItem(id);
    }
    cartRender();
};
export const removeCartItem = (id) => {
    for (const item of cart) {
        if (item.id == id) cart.pop(item);
    }
    cartRender();
};
export const checkOut = () => {
    cart = [];
    cartRender();
};

export const storeData = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const getData = () => {
    if (localStorage.getItem("cart"))
        cart = JSON.parse(localStorage.getItem("cart"));
};



//          JSON Object
// let cart = {};
// export const addToCart = (id) => {
// if (Object.keys(cart).length == 0 || !isExist(id)) {
//     return add(id, 1);
// }
// }
// const add = (id, quantity) => {
//     let cartItemTemp = products.find((item) => {
//         if (item.id === id) return item;
//     }, []);
//     let cartTemp = {
//         [cartItemTemp.name]: cartItemTemp,
//         ["quantity"]: quantity,
//     };
//     cart = {...cart, [cartItemTemp.id]: cartTemp };
// };
// const isExist = (id) => {
//     let condition = false;
//     Object.values(cart).forEach((cartItem) => {
//         if (Object.values(cartItem)[0].id == id) {
//             cartItem.quantity += 1;
//             return (condition = true);
//         }
//         return false;
//     });
//     return condition;
// };