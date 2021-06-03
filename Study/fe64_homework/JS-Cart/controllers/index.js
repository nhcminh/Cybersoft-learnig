import { getApi } from "../controllers/api.js";
import { cartRender } from "../views/cartRender.js";
import { productListRender } from "../views/producListRender.js";
import { getData } from "./cart.js";

getData();
await getApi();
productListRender("all");

document.getElementById("filter").addEventListener("change", function() {
    productListRender(this.value);
});

cartRender();