import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { toRGBA } from "../../utils/utils";
import { purple, green, orange } from "../../utils/consts";
import { getQuantity } from "../../selectors";
import { Card } from "../Card";
import { InitialState } from "../../type";
import classes from "./ProductsCustomStock.styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const initialState = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      backgroundColor: toRGBA(purple),
      borderColor: purple,
      borderWidth: 2,
    },
  ],
};

export const ProductsCustomStock = ({
  title,
  categories,
}: {
  title: string;
  categories: string[];
}) => {
  const [data, setData] = useState<InitialState>(initialState);
  const colors = [green, orange, purple];
  const backgroundColor = colors.map((color) => toRGBA(color));
  const quantity = categories.map((category: string) => getQuantity(category));

  useEffect(() => {
    const updatedData = {
      labels: categories,
      datasets: [
        {
          label: "All for women",
          data: [...quantity],
          backgroundColor,
          borderColor: colors,
          borderWidth: 2,
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
      <Doughnut data={data} />
    </Card>
  );
};
