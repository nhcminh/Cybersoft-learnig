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
        await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
            method: "post",
            data: product,
        });
        await getApi();
        render();
    } catch (err) {
        throw err;
    }
};
export const delProductApi = async(id) => {
    try {
        await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/" +
                id,
            method: "delete",
        });
        await getApi();
        render();
    } catch (e) {
        console.log(e.response);
    }
}
export const modifyProduct = async(id, product) => {
    try {
        await axios({
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${id}`,
            method: "put",
            data: product,
        });
        await getApi();
        render();
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