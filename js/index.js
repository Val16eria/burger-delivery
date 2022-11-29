const modalProduct = document.querySelector('.modal_product');
const cataloglist = document.querySelector('.catalog__list');

// открытие модального окна
cataloglist.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.product__detail')) {
        modalProduct.classList.add('modal_open');
    }
});

// закрытие модального окна
modalProduct.addEventListener('click', (event) => {
    const target = event.target;

    if(target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});