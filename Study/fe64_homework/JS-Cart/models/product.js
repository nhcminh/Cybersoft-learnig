export class Product {
    constructor(
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
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.screen = screen;
        this.backCamera = backCamera;
        this.frontCamera = frontCamera;
        this.img = img;
        this.desc = desc;
        this.type = type;
        this.fontCamera = fontCamera;
        this.image = image;
        this.description = description;
        this.inventory = inventory;
        this.rating = rating;
    }

    render() {
        let content = `<div class="col-4 my-1"><div class="card">
        <img class="card-img-top" src="${this.image}" height="300px" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">${this.desc}</p>
            <button class="btn btn-success btn-add" onclick="addCart(${this.id})">Add to cart</button>
        </div>
    </div></div>`;

        return content;
    }
}