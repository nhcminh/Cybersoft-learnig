import {
    getApi,
    newProductApi,
    products,
} from "./api.js";

import { Product } from "../models/product.js";
import { render } from "../views/adminRender.js";

await getApi();


render();
document.getElementById("btnAdd").onclick = async function() {
    let inputArr = document.querySelectorAll(".modal-body input");
    let type = document.querySelector('select').value;
    let product = new Product();
    for (const input of inputArr) {
        let { name, value } = input;
        console.log(name, value);
        switch (name) {
            case "name":
                product.name = value;
                break;
            case "price":
                product.price = value;
                break;
            case "screen":
                product.screen = value;
                break;
            case "backCamera":
                product.backCamera = value;
                break;
            case "frontCamera":
                product.frontCamera = value;
                break;
            case "image":
                product.image = value;
                break;
            case "desc":
                product.desc = value;
                break;
            default:
                break;
        }
    }
    product.id = products[products.length - 1].id * 1 + 1;
    product.type = type;
    await newProductApi(product);
    console.log(product);
}
$('#modelId').on('hide.bs.modal', function() {
    let inputArr = document.querySelectorAll(".modal-body input");
    document.getElementById("btnChange").setAttribute("disabled", "");
    document.getElementById("btnAdd").removeAttribute("disabled");
    for (const input of inputArr) {
        input.value = '';
    }
})