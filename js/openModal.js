import { 
    ingredientsList,
    modalProductTitle,
    modalProductImage, 
    modalProductDescription,
    ingredientsCalories, 
    modalProductPriceCount,
    modalProduct
} from "./elements.js";

export const openModal = (product) => {
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