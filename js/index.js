const modalProduct = document.querySelector('.modal_product');
const cataloglist = document.querySelector('.catalog__list');

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

const openModal = (product) => {
    const modalProductTitle = document.querySelector('.modal-product__title');
    const modalProductImage = document.querySelector('.modal-product__image');
    const modalProductDescription = document.querySelector('.modal-product__description');
    const ingredientsList = document.querySelector('.ingredients__list');
    const ingredientsCalories = document.querySelector('.ingredients__calories');
    const modalProductPriceCount = document.querySelector('.modal-product__price-count');

    // заголовок продукта
    modalProductTitle.textContent = product.title;
    // картинка продукта
    modalProductImage.src = product.image;

    // ингредиенты продукта
    ingredientsList.textContent = '';

    const ingredientsListItems = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('.ingredients__item');
        li.textContent = item;
        return li;
    });

    ingredientsList.append(...ingredientsListItems);

    // описание продукта
    modalProductDescription.textContent = product.description;

    // калории продукта
    ingredientsCalories.textContent = `${product.weight} г, ккал ${product.calories}`;

    // цена продукта
    modalProductPriceCount.textContent = product.price;

    modalProduct.classList.add('modal_open');
};

const createCardProduct = (product) => {
    const li = document.createElement('li');
    li.classList.add('catalog__item');

    li.innerHTML = `
        <article class="product">
            <img class="product__image" src="${product.image}" alt="Мясная бомба">

            <p class="product__price">689<span class="currency">₽</span></p>

            <h3 class="product__title">
                <button class="product__detail">Мясная бомба</button>
            </h3>

            <p class="product__weight">520г</p>

            <button class="product__add">Добавить</button>
        </article>
    `;

    return li;
};

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