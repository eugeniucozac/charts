import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { toRGBA, rose, purple, green, blue, orange } from "../../utils";
import { getProductBrands, getProductStock } from "../../selectors";
import { Card } from "../Card";
import { Dropdown } from "../Dropdown";
import { InitialState } from "../../type";
import classes from "./ProductQuantity.styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const initialState = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      backgroundColor: toRGBA(rose),
      borderColor: rose,
      borderWidth: 2,
    },
  ],
};

export const ProductQuantity = ({
  title,
  categories,
  defaultCategory,
}: {
  title: string;
  categories: { label: string; value: string }[];
  defaultCategory: string;
}) => {
  const [value, setValue] = useState(defaultCategory);
  const [data, setData] = useState<any>(initialState);
  const colors = [orange, purple, green, blue, rose];
  const backgroundColor = colors.map((color) => toRGBA(color));

  useEffect(() => {
    const brands = getProductBrands(value);
    const stock = getProductStock(value);

    const updatedData = {
      labels: brands,
      datasets: [
        {
          label: value,
          data: stock,
          backgroundColor,
          borderColor: colors,
          borderWidth: 2,
        },
      ],
    };
    setData(updatedData);
  }, [value]);

  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title}</h5>
        <Dropdown onChange={setValue} value={value} options={categories} />
      </div>
      <Pie data={data} />
    </Card>
  );
};
