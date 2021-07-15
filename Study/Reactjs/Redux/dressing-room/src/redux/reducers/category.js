/* eslint-disable default-case */
const inititalState = {
    categoryList: [
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
        { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
        // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
        { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
        { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
    ],
    selectedCategory: "topclothes",
}
const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            state.selectedCategory = action.payload;
            return {...state};
        default: 
        return state;
    }
};

export default reducer;