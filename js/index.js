import { 
    modalProduct, 
    catalogList, 
} from "./elements.js";
import { createCardProduct } from "./createCardProduct.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";
import { navigationListController } from "./navigationListController.js";

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

// открытие модального окна
catalogList.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.product__detail') 
    || target.closest('.product__image')) {
        const id = target.closest('.product').dataset.idProduct;
        openModal(id);
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

const init = () => {
    renderListProduct();
    navigationListController(renderListProduct);
};

init();