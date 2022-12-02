import { 
    modalProduct, 
    cataloglist, 
} from "./elements.js";
import { createCardProduct } from "./createCardProduct.js";
import { openModal } from "./openModal.js";

const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 150000,
    description: 'Огромный бургер, съешь сам или поделись с компанией',
    image: '../img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка', 
        'Мега котлета из говядины',
        'Много сыра',
        'Салат айсберг',
        'Cоус чилли'
    ]
}

cataloglist.textContent = "";

// отрисовка продукта на сайте
const card = [
    createCardProduct(burgerMax),
    createCardProduct(burgerMax),
    createCardProduct(burgerMax),
    createCardProduct(burgerMax),
    createCardProduct(burgerMax)
]

cataloglist.append(...card);

// открытие модального окна
cataloglist.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.product__detail') 
    || target.closest('.product__image')) {
        openModal(burgerMax);
    }
});

// закрытие модального окна
modalProduct.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.modal__close') 
    || target === modalProduct) {
    modalProduct.classList.remove('modal_open');
    }
});