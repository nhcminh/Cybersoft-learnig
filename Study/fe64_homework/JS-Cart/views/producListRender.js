import { products } from "../controllers/api.js";
import { addToCart } from "../controllers/cart.js";
export const productListRender = (selector) => {
    if (selector === "iphone") {
        let iphoneList = products.reduce((arr, item) => {
            if (item.type === "iphone") arr.push(item);
            return arr;
        }, []);
        render(iphoneList);
    } else if (selector === "all") {
        render(products);
    } else {
        let samsungList = products.reduce((arr, item) => {
            if (item.type !== "iphone") arr.push(item);
            return arr;
        }, []);
        render(samsungList);
    }
    document.querySelectorAll(".btn-add").forEach(function(item) {
        item.addEventListener("click", function() {
            addToCart(this.id);
        });
    });
};
const render = (list) => {
    let content = "";
    for (const item of list) {
        content += item.render();
    }
    return (document.getElementById("productList").innerHTML = content);
};