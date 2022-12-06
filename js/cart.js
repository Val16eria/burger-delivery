import { catalogList, countAmount, modalProductBtn } from "./elements.js";

const getCart = () => {
    const cartList = localStorage.getItem('cart');
    if (cartList) {
        return JSON.parse(cartList);
    } else {
        return [];
    }
};


const rendercartList = async () => {
    const cartList = getCart();
};

const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
    rendercartList();
};

const addCart = (id, count = 1) => {
    console.log(id, count);
    const cartList = getCart();
    const product = cartList.
};

const removeCart = (id) => {

};

const cartController = () => {
    catalogList.addEventListener('click', ({target}) => {
        if (target.closest('.product__add')) {
            addCart(target.closest('.product').dataset.idProduct);
        }
    });
    modalProductBtn.addEventListener('click', () => {
        addCart(
            modalProductBtn.dataset.idProduct,
            parseInt(countAmount.textContent)
        );
    })
};

export const cartInit = () => {
    cartController();
    rendercartList();
};