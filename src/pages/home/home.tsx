import { ProductQuantity } from "../../components/ProductQuantity";
import { ProductsCustomStock } from "../../components/ProductsCustomStock";
import { ProductsRating } from "../../components/ProductsRating";
import { ProductsStock } from "../../components/ProductsStock";
import { PageLayout } from "../../layouts/PageLayout";
import classes from "./home.styles";

export const HomePage = () => {
  const ratingCategories = [
    { label: "Fragrances", value: "fragrances" },
    { label: "Skincare", value: "skincare" },
    { label: "Groceries", value: "groceries" },
  ];

  const quantityCategories = [
    { label: "Motorcycle", value: "motorcycle" },
    { label: "Automotive", value: "automotive" },
    { label: "Sunglasses", value: "sunglasses" },
  ];

  const customCategories = [
    "womens-bags",
    "womens-jewellery",
    "womens-watches",
  ];

  return (
    <PageLayout>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <ProductsRating
            title="Products rating"
            categories={ratingCategories}
            defaultCategory="fragrances"
          />
        </div>
        <div className={classes.card}>
          <ProductsStock title="Products stock" category="lighting" />
        </div>
        <div className={classes.card}>
          <ProductQuantity
            title="Products quantity by categories"
            categories={quantityCategories}
            defaultCategory="motorcycle"
          />
        </div>
        <div className={classes.card}>
          <ProductsCustomStock
            title="Women Products Stock"
            categories={customCategories}
          />
        </div>
      </div>
      <div className={classes.background}></div>
    </PageLayout>
  );
};
