import {
    cart,
    checkOut,
    decreaseQuantity,
    increaseQuantity,
    removeCartItem,
} from "../controllers/cart.js";
import { storeData } from "../controllers/cart.js";
export const cartRender = () => {
    let content = "";
    for (const item of cart) {
        content += `
        <tr>
            <td><img src="${item.image}" width="200px"/></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}
                <button class="btn btn-dark btn-increase mx-1" style="padding: 2px 8px" onclick="decrease(${item.id})">-</button>
                <button class="btn btn-dark btn-decrease" style="padding: 2px 6px" onclick="increase(${item.id})">+</button>
            </td>
            <td>${item.price * item.quantity}$</td>
            <td>
            <button class="btn btn-danger btn-del" onclick="remove(${item.id})">X</button></td>
        </tr>`;
    }
    let thanhToan = `
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Tổng tiền</td>
        <td></td>
        <td><button class="btn btn-success" id="btnCheckOut">Thanh Toán</button></td>
    </tr>
    `;
    if (cart.length !== 0) {
        thanhToan = calcTotal();
    }
    content += thanhToan;
    document.getElementById("cart").innerHTML = content;

    function increase(id) {
        increaseQuantity(id);
    }

    function decrease(id) {
        decreaseQuantity(id);
    }

    function remove(id) {
        removeCartItem(id);
    }
    window.increase = increase;
    window.decrease = decrease;
    window.remove = remove;
    document.getElementById("btnCheckOut").addEventListener("click", function() {
        checkOut();
    });
    storeData();
};

export const calcTotal = () => {
    let contentTotal = "";
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    contentTotal += `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Tổng tiền</td>
        <td>${total}$</td>
        <td><button class="btn btn-success" id="btnCheckOut">Thanh Toán</button></td>
    </tr>`;

    return contentTotal;
};