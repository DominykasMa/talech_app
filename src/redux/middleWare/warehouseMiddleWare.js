import moment from "moment";

function getData() {
    return JSON.parse(localStorage.getItem('warehouseData'));
}

function setData(data) {
    return localStorage.setItem('warehouseData', JSON.stringify(data));
}

function warehouseMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === 'GET_PRODUCTS') {
                action.data = getData()
            }
            if (action.type === 'DELETE_PRODUCT') {
                action.data = getData();
                action.data.items = action.data.items.filter(item => item.id !== action.id);
                setData(action.data);
            }
            if (action.type === 'EDIT_PRODUCT') {
                action.data = getData();
                const index = action.data.items.findIndex((e) => e.id === action.product.id);
                action.data.items[index] = action.product;
                setData(action.data);

            }
            if (action.type === 'ADD_PRODUCT') {
                action.data = getData();
                const maxid = Math.max(...action.data.items.map(item => item.id));
                action.product.id = maxid + 1;
                action.data.items.push(action.product)
                setData(action.data);
            }
            if (action.type === 'ENABLE_DISABLE_PRODUCT') {
                action.data = getData();
                const index = action.data.items.findIndex((e) => e.id === action.id);
                action.data.items[index].active = !action.data.items[index].active
                setData(action.data);
            }
            if (action.type === 'EDIT_QUANTITY') {
                action.data = getData();
                const index = action.data.items.findIndex((e) => e.id === action.id);
                const maxid = Math.max(...action.data.items[index].productQuantity.map(quantity => quantity.id));
                action.productQuantity.id = maxid + 1;
                action.data.items[index].productQuantity.push(action.productQuantity);
                setData(action.data);
            }
            if (action.type === 'EDIT_PRICE') {
                action.data = getData();
                const index = action.data.items.findIndex((e) => e.id === action.id);
                const maxid = Math.max(...action.data.items[index].productPrice.map(price => price.id));
                action.productPrice.id = maxid + 1;
                action.productPrice.data = moment().format('DD-MM-YYYY')
                action.data.items[index].productPrice.push(action.productPrice);
                setData(action.data);
            }
            return next(action);
        };
    };
}

export default warehouseMiddleware
