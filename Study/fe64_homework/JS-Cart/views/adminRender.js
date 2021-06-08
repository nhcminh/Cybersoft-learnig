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
                <td>
                    <button class="btn btn-primary btnModify" onclick="modify(${id})" data-toggle="modal" data-target="#modelId">Sửa</button>
                    <button class="btn btn-danger btnDel" onclick="remove(${id})">Xóa</button></td>
        </tr>
      `;
    }

    document.getElementById("tblAdmin").innerHTML = content;

    function remove(id) {
        delProductApi(id);
    }

    function modify(id) {
        let product = products.find((item) => {
            if (item.id == id) return item;
        });
        let inputArr = document.querySelectorAll(".modal-body input");
        let type = document.querySelector("select").value;
        for (const input of inputArr) {
            input.value = product[input.name];
        }
        type = product.type;
        document.getElementById("btnAdd").setAttribute("disabled", "");
        document.getElementById("btnChange").removeAttribute("disabled");
        document
            .getElementById("btnChange")
            .addEventListener("click", async function() {
                inputArr = document.querySelectorAll(".modal-body input");
                type = document.querySelector("select").value;
                let arr = {};
                for (const input of inputArr) {
                    let { name, value } = input;
                    arr = {...arr, [name]: value, type };
                }
                for (const i in arr) {
                    product[i] = arr[i];
                }
                await modifyProduct(id, product);
                $("#modelId").modal("hide");
            });
    }
    window.remove = remove;
    window.modify = modify;
};