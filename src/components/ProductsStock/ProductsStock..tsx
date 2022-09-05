import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { toRGBA, rose, purple, green, blue, orange } from "../../utils";
import { getProductStock, getProductTitle } from "../../selectors";
import { Card } from "../Card";
import classes from "./ProductsStock.styles";
import { InitialState } from "../../type";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const initialState = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      backgroundColor: toRGBA(rose),
      borderWidth: 2,
    },
  ],
};

export const ProductsStock = ({
  title,
  category,
}: {
  title: string;
  category: string;
}) => {
  const [data, setData] = useState<any>(initialState);
  const colors = [
    toRGBA(rose),
    toRGBA(orange),
    toRGBA(purple),
    toRGBA(green),
    toRGBA(blue),
  ];
  const labels = getProductTitle(category);
  const stock = getProductStock(category);

  useEffect(() => {
    const updatedData = {
      labels: labels,
      datasets: [
        {
          label: category,
          data: stock,
          backgroundColor: colors,
          borderWidth: 1,
        },
      ],
    };
    setData(updatedData);
  }, []);

  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title}</h5>
      </div>
      <PolarArea data={data} />
    </Card>
  );
};
