import { getApi, newProductApi, products } from "./api.js";

import { Product } from "../models/product.js";
import { render } from "../views/adminRender.js";

await getApi();

render();
document.getElementById("btnAdd").onclick = async function(event) {
    let inputArr = document.querySelectorAll(".modal-body input");
    let typeInput = document.querySelector("select").value;
    let arr = {};
    // Validation
    const form = $("#modifyForm")
    let valid = true;
    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
        valid &= false;
    }
    form.addClass('was-validated');
    if(valid){ // if valid true add new product
        for (const input of inputArr) {
            let { name, value } = input;
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
        $("#modelId").on('hide');
        document.getElementById("modifyForm").reset();
    }else{ //if false do nothing
        return;
    }
};
$("#modelId").on("hide.bs.modal", function() {
    document.getElementById("btnChange").setAttribute("disabled", "");
    document.getElementById("btnAdd").removeAttribute("disabled");
    document.getElementById("modifyForm").reset();
});