import { delProductApi, modifyProduct, products } from "../controllers/api.js";
export const render = () => {
    let content = "";
    for (const item of products) {
        let {
            id,
            name,
            price,
            screen,
            backCamera,
            frontCamera,
            image,
            desc,
            type,
        } = item;
        content += `
        <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${screen}</td>
                <td>${backCamera}</td>
                <td>${frontCamera}</td>
                <td width="200px"><img width="100%" src="${image}" alt="${image}"></td>
                <td>${desc}</td>
                <td>${type}</td>
                <td><button class="btn btn-primary btnModify" data-id="${id}" data-toggle="modal" data-target="#modelId">Sửa</button><button class="btn btn-danger btnDel" data-id="${id}">Xóa</button></td>
        </tr>
      `;
    }

    document.getElementById("tblAdmin").innerHTML = content;
    document.querySelectorAll(".btnDel").forEach((button) => {
        button.addEventListener("click", async function() {
            let id = this.getAttribute("data-id");
            await delProductApi(id);
        });
    });
    document.querySelectorAll(".btnModify").forEach(function(button) {
        button.addEventListener("click", function() {
            let idProduct = this.getAttribute("data-id");
            let product = products.find((item) => {
                if (item.id === idProduct) return item;
            });
            let inputArr = document.querySelectorAll(".modal-body input");
            let typeInput = document.querySelector("select").value;
            arrLoop(product, inputArr);
            typeInput = product.type;
            document.getElementById("btnAdd").setAttribute("disabled", "");
            document.getElementById("btnChange").removeAttribute("disabled");
            document
                .getElementById("btnChange")
                .addEventListener("click", async function() {
                    inputArr = document.querySelectorAll(".modal-body input");
                    typeInput = document.querySelector("select").value;
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
                    product.type = typeInput;
                    await modifyProduct(product.id, product);
                    $("#modelId").modal("hide");

                });
        });
    });
};
const arrLoop = (product, inputArr) => {
    for (const input of inputArr) {
        switch (input.name) {
            case "name":
                input.value = product.name;
                break;
            case "price":
                input.value = product.price;
                break;
            case "screen":
                input.value = product.screen;
                break;
            case "backCamera":
                input.value = product.backCamera;
                break;
            case "frontCamera":
                input.value = product.frontCamera;
                break;
            case "image":
                input.value = product.image;
                break;
            case "desc":
                input.value = product.desc;
                break;
            default:
                break;
        }
    }
};