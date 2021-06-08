import { getApi, newProductApi, products } from "./api.js";

import { Product } from "../models/product.js";
import { render } from "../views/adminRender.js";

await getApi();

render();
document.getElementById("btnAdd").onclick = async function() {
    let inputArr = document.querySelectorAll(".modal-body input");
    let typeInput = document.querySelector("select").value;
    let arr = {};
    for (const input of inputArr) {
        let { name, value } = input;
        console.log(name, value);
        arr = {...arr, [name]: value };
    }
    let { name, price, screen, backCamera, frontCamera, img, desc } = arr;
    let product = new Product(
        1,
        name,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        desc
    );
    product.id = products[products.length - 1].id * 1 + 1;
    product.type = typeInput;
    await newProductApi(product);
    console.log(product);
    $("#modelId").on('hide');
    document.getElementById("modifyForm").reset();
};
$("#modelId").on("hide.bs.modal", function() {
    document.getElementById("btnChange").setAttribute("disabled", "");
    document.getElementById("btnAdd").removeAttribute("disabled");
    document.getElementById("modifyForm").reset();
});