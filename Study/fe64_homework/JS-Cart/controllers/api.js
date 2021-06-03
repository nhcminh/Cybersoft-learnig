import { Product } from "../models/product.js";
import { render } from "../views/adminRender.js";
export let products = [];
export const getApi = async() => {
    try {
        let res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "get",
        });
        products = mapData(res.data);
        console.log(products);
    } catch (err) {
        console.log(err);
    }
};
export const newProductApi = async(product) => {
    try {
        let res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "post",
            data: product,
        });
        await getApi();
        render();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
export const delProductApi = async(id) => {
    try {
        let result = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/" +
                id,
            method: "delete",
        });
        console.log(result.statusText);
        await getApi();
        render();
    } catch (e) {
        console.log(e.response);
    }
}
export const modifyProduct = async(id, product) => {
    try {
        let res = await axios({
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${id}`,
            method: "put",
            data: product,
        });
        await getApi();
        render();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
const mapData = (productList) => {
    const mappedData = productList.map((item) => {
        let {
            id,
            name,
            price,
            screen,
            backCamera,
            frontCamera,
            img,
            desc,
            type,
            fontCamera,
            image,
            description,
            inventory,
            rating,
        } = item;

        return new Product(
            id,
            name,
            price,
            screen,
            backCamera,
            frontCamera,
            img,
            desc,
            type,
            fontCamera,
            image,
            description,
            inventory,
            rating
        );
    });
    return mappedData;
};