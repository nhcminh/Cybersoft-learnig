import {
    cart,
    checkOut,
    decreaseQuantity,
    increaseQuantity,
    removeCartItem,
} from "../controllers/cart.js";

export const cartRender = () => {
    let content = "";
    for (const item of cart) {
        content += `<tr>
            <td><img src="${item.image}" width="200px"/></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${
              item.quantity
            }<button class="btn btn-dark btn-increase mx-1" style="padding: 2px 6px" data-id="${
      item.id
    }">+</button><button class="btn btn-dark btn-decrease" style="padding: 2px 8px" data-id="${
      item.id
    }">-</button></td>
            <td>${item.price * item.quantity}$</td>
            <td><button class="btn btn-danger btn-del" data-id="${
              item.id
            }">X</button></td>
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
    document.querySelectorAll(".btn-increase").forEach((btn) => {
        btn.addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            increaseQuantity(id);
        });
    });
    document.querySelectorAll(".btn-decrease").forEach((btn) => {
        btn.addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            decreaseQuantity(id);
        });
    });
    document.querySelectorAll(".btn-del").forEach((btn) => {
        btn.addEventListener("click", function() {
            let id = this.getAttribute("data-id");
            removeCartItem(id);
        });
    });
    document.getElementById("btnCheckOut").addEventListener("click", function() {
        checkOut();
    });
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