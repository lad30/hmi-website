const INITIAL_STATE = {
    sections: [{
        title: 'Toys',
        imageUrl: 'https://i.pinimg.com/originals/d5/4c/45/d54c457d5c8e02e36b484d690589c8ec.jpg',
        // imageUrl:"https://www.shutterstock.com/image-photo/homemade-protechttps://image.shutterstock.com/shutterstock/photos/1683745294/display_1500/stock-photo-homemade-protective-mask-and-pieces-of-cloth-on-a-gray-background-1683745294.jpgtive-mask-pieces-cloth-on-1683745294",
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'Cutlery & Utensils',
        imageUrl: 'https://i.pinimg.com/originals/48/a8/42/48a842554f82fca4e9c4ba06b51db89c.jpg',
        id: 2,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'Art',
        imageUrl: 'https://p0.pxfuel.com/preview/797/691/649/arts-and-crafts-artwork-arabic-crafts-saudi-arabia-royalty-free-thumbnail.jpg',
        id: 3,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'Chocolates',
        imageUrl: 'https://5.imimg.com/data5/ES/EA/MY-38426655/plain-chocolate-500x500.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'Bags',
        imageUrl: 'https://4.imimg.com/data4/GN/GB/MY-17949739/handmade-bags-500x500.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer