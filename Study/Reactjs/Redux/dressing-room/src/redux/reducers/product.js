const inititalState = {
    productList: [
        // Top clothes
        {
            id: 'topcloth_1',
            type: "topclothes",
            name: "Top Cloth 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth1_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth1.png',
        },
        {
            id: 'topcloth_2',
            type: "topclothes",
            name: "Top Cloth 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth2_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth2.png',
        },
        {
            id: 'topcloth_3',
            type: "topclothes",
            name: "Top Cloth 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth3_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth3.png',
        },
        {
            id: 'topcloth_4',
            type: "topclothes",
            name: "Top Cloth 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth4_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth4.png',
        },
        {
            id: 'topcloth_5',
            type: "topclothes",
            name: "Top Cloth 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth5_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth5.png',
        },
        {
            id: 'topcloth_6',
            type: "topclothes",
            name: "Top Cloth ",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/topcloth6_show.jpg',
            imgSrc_png: './assets/img/clothes/topcloth6.png',
        },

        // Both clothes
        {
            id: 'botcloth_1',
            type: "botclothes",
            name: "Bot Cloth 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/botcloth1_show.jpg',
            imgSrc_png: './assets/img/clothes/botcloth1.png',
        },
        {
            id: 'botcloth_2',
            type: "botclothes",
            name: "Bot Cloth 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/botcloth2_show.jpg',
            imgSrc_png: './assets/img/clothes/botcloth2.png',
        },
        {
            id: 'botcloth_3',
            type: "botclothes",
            name: "Bot Cloth 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/botcloth3_show.jpg',
            imgSrc_png: './assets/img/clothes/botcloth3.png',
        },
        {
            id: 'botcloth_4',
            type: "botclothes",
            name: "Bot Cloth 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/botcloth4_show.jpg',
            imgSrc_png: './assets/img/clothes/botcloth4.png',
        },
        {
            id: 'botcloth_5',
            type: "botclothes",
            name: "Bot Cloth 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/clothes/botcloth5_show.jpg',
            imgSrc_png: './assets/img/clothes/botcloth5.png',
        },

        // Shoes
        {
            id: 'shoes_1',
            type: "shoes",
            name: "Shoes 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/shoes/shoes1_show.jpg',
            imgSrc_png: './assets/img/shoes/shoes1.png',
        },
        {
            id: 'shoes_2',
            type: "shoes",
            name: "Shoes 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/shoes/shoes2_show.jpg',
            imgSrc_png: './assets/img/shoes/shoes2.png',
        },
        {
            id: 'shoes_3',
            type: "shoes",
            name: "Shoes 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/shoes/shoes3_show.jpg',
            imgSrc_png: './assets/img/shoes/shoes3.png',
        },
        {
            id: 'shoes_4',
            type: "shoes",
            name: "Shoes 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/shoes/shoes4_show.jpg',
            imgSrc_png: './assets/img/shoes/shoes4.png',
        },
        {
            id: 'shoes_5',
            type: "shoes",
            name: "Shoes 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/shoes/shoes5_show.jpg',
            imgSrc_png: './assets/img/shoes/shoes5.png',
        },

        // Handbags
        {
            id: 'handbag_1',
            type: "handbags",
            name: "Handbag 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/handbags/handbag1_show.jpg',
            imgSrc_png: './assets/img/handbags/handbag1.png',
        },
        {
            id: 'handbag_2',
            type: "handbags",
            name: "Handbag 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/handbags/handbag2_show.jpg',
            imgSrc_png: './assets/img/handbags/handbag2.png',
        },
        {
            id: 'handbag_3',
            type: "handbags",
            name: "Handbag 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/handbags/handbag3_show.jpg',
            imgSrc_png: './assets/img/handbags/handbag3.png',
        },

        // Necklaces
        {
            id: 'necklace_1',
            type: "necklaces",
            name: "Necklace 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/necklaces/necklace1_show.jpg',
            imgSrc_png: './assets/img/necklaces/necklace1.png',
        },
        {
            id: 'necklace_2',
            type: "necklaces",
            name: "Necklace 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/necklaces/necklace2_show.jpg',
            imgSrc_png: './assets/img/necklaces/necklace2.png',
        },
        {
            id: 'necklace_3',
            type: "necklaces",
            name: "Necklace 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/necklaces/necklace3_show.jpg',
            imgSrc_png: './assets/img/necklaces/necklace3.png',
        },

        // Hairstyle
        {
            id: 'hairstyle_1',
            type: "hairstyle",
            name: "Hairstyle 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/hairstyle/hairstyle1_show.jpg',
            imgSrc_png: './assets/img/hairstyle/hairstyle1.png',
        },
        {
            id: 'hairstyle_2',
            type: "hairstyle",
            name: "Hairstyle 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/hairstyle/hairstyle2_show.jpg',
            imgSrc_png: './assets/img/hairstyle/hairstyle2.png',
        },
        {
            id: 'hairstyle_3',
            type: "hairstyle",
            name: "Hairstyle 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/hairstyle/hairstyle3_show.jpg',
            imgSrc_png: './assets/img/hairstyle/hairstyle3.png',
        },

        // Background
        {
            id: 'background_1',
            type: "background",
            name: "Background 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background1_show.jpg',
            imgSrc_png: './assets/img/background/background1.jpg',
        },
        {
            id: 'background_2',
            type: "background",
            name: "Background 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background2_show.jpg',
            imgSrc_png: './assets/img/background/background2.jpg',
        },
        {
            id: 'background_3',
            type: "background",
            name: "Background 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background3_show.jpg',
            imgSrc_png: './assets/img/background/background3.jpg',
        },
        {
            id: 'background_4',
            type: "background",
            name: "Background 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background4_show.jpg',
            imgSrc_png: './assets/img/background/background4.jpg',
        },
        {
            id: 'background_5',
            type: "background",
            name: "Background 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background5_show.jpg',
            imgSrc_png: './assets/img/background/background5.jpg',
        },
        {
            id: 'background_6',
            type: "background",
            name: "Background 6",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background6_show.jpg',
            imgSrc_png: './assets/img/background/background6.jpg',
        },
        {
            id: 'background_7',
            type: "background",
            name: "Background 7",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/img/background/background7_show.jpg',
            imgSrc_png: './assets/img/background/background7.jpg',
        },
    ],
    selectedProducts: {
        topclothes: "",
        botclothes: "",
        shoes: "",
        handbags: "",
        necklaces: "",
        hairstyle: "",
        background: "",
    },
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case "SEL_CLOTH":
            const cloneSelectedProducts = { ...state.selectedProducts }
            cloneSelectedProducts[action.payload.type] = action.payload.img;
            return { ...state, selectedProducts: cloneSelectedProducts };
        default:
            return state;
    }
};

export default reducer;