import {API_URL, PREFIX_PRODUCT} from "./const.js";
import { createCardProduct } from "./createCardProduct.js";
import { cataloglist } from "./elements.js";
import { getData } from "./getData.js";

export const renderListProduct = async () => {
    cataloglist.textContent = "";
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
    const listCard = listProduct.map(createCardProduct);
    cataloglist.append(...listCard);
}