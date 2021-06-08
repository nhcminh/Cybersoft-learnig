import { products } from "../controllers/api.js";
export const productListRender = async(selector) => {
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
};
const render = (list) => {
    let content = "";
    for (const item of list) {
        content += item.render();
    }
    return (document.getElementById("productList").innerHTML = content);
};