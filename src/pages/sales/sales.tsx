import { SalesDiscounts } from "../../components/SalesDiscounts";
import { SalesTotal } from "../../components/SalesTotal";
import { TotalQuantity } from "../../components/TotalQuantity";
import { PageLayout } from "../../layouts/PageLayout";
import classes from "./sales.styles";

export const SalesPage = () => {
  return (
    <PageLayout>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <SalesTotal title="Total Sales" />
        </div>
        <div className={classes.card}>
          <SalesDiscounts title="Sales Discounts" />
        </div>
        <div className={classes.card}>
          <TotalQuantity title="Sales Quantity" />
        </div>
      </div>
      <div className={classes.background}></div>
    </PageLayout>
  );
};
