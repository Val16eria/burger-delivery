const modalProduct = document.querySelector('.modal_product');
const cataloglist = document.querySelector('.catalog__list');

const product = {
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

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;

ingredientsList.textContent = '';

const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('.ingredients__item');
    li.textContent = item;
    return li;
});

ingredientsList.append(...ingredientsListItems);

//modalProductDescription
//modalProductCalories
//modalProductPriceCount

// открытие модального окна
cataloglist.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.product__detail') 
    || target.closest('.product__image')) {
    modalProduct.classList.add('modal_open');
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