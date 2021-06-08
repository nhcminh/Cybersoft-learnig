import { getApi } from "../controllers/api.js";
import { cartRender } from "../views/cartRender.js";
import { productListRender } from "../views/producListRender.js";
import { getData, addToCart } from "./cart.js";


function addCart(id) {
    addToCart(id);
}

getData();
await getApi();
await productListRender("all");
window.addCart = addCart;
document.getElementById("filter").addEventListener("change", function() {
    productListRender(this.value);
});

cartRender();