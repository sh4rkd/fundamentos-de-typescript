import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product) => products.push(product);

export const calcStock = ():number => products.reduce((total, product) => total + product.stock, 0);

export const calcStockBySize = (size: string):number => products.reduce((total, product) => {
    if (product.size === size) {
        return total + product.stock;
    }
    return total;
}, 0);