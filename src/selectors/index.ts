import { products } from "../api/products";
import { sales } from "../api/sales";

export const getProductBrands = (value: string) =>
  products.filter((item) => item.category === value).map((item) => item.brand);
export const getProductRatings = (value: string) =>
  products.filter((item) => item.category === value).map((item) => item.rating);
export const getProductStock = (value: string) =>
  products.filter((item) => item.category === value).map((item) => item.stock);
export const getProductTitle = (value: string) =>
  products.filter((item) => item.category === value).map((item) => item.title);
export const getQuantity = (category: string) =>
  products
    .filter((item) => item.category === category)
    .reduce((acc: number, n) => acc + n.stock, 0);
export const getTotalSales = (year: number) =>
  sales.filter((sales) => sales.year === year).map((item) => item.total);
export const getTotalDiscount = (year: number) =>
  sales
    .filter((sales) => sales.year === year)
    .map((item) => item.discountedTotal);
export const getTotalQuantity = (year: number) =>
  sales
    .filter((sales) => sales.year === year)
    .map((item) => item.totalQuantity);
