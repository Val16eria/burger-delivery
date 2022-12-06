import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { 
    ingredientsList,
    modalProductTitle,
    modalProductImage, 
    modalProductDescription,
    ingredientsCalories, 
    modalProductPriceCount,
    modalProduct,
    modalProductBtn
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
    // заголовок продукта
    modalProductTitle.textContent = product.title;
    // картинка продукта
    modalProductImage.src = `${API_URL}/${product.image}`;

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

    modalProductBtn.dataset.idProduct = product.id;

    modalProduct.classList.add('modal_open');
};