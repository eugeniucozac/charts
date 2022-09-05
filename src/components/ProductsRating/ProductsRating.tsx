import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { toRGBA, rose, yellow, purple, randomNumber } from "../../utils";
import { getProductBrands, getProductRatings } from "../../selectors";
import { Card } from "../Card";
import { Dropdown } from "../Dropdown";
import { InitialState } from "../../type";
import classes from "./ProductsRating.styles";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

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

export const ProductsRating = ({
  title,
  categories,
  defaultCategory,
}: {
  title: string;
  categories: { label: string; value: string }[];
  defaultCategory: string;
}) => {
  const [value, setValue] = useState(defaultCategory);
  const [data, setData] = useState<InitialState>(initialState);
  const colors = [rose, yellow, purple];
  const index = randomNumber(3);

  useEffect(() => {
    const brands = getProductBrands(value);
    const rating = getProductRatings(value);

    const updatedData = {
      labels: brands,
      datasets: [
        {
          label: value,
          data: rating,
          backgroundColor: toRGBA(colors[index]),
          borderColor: colors[index],
          borderWidth: 2,
        },
      ],
    };
    setData(updatedData);
  }, [value]);

  console.log(data);

  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title}</h5>
        <Dropdown onChange={setValue} value={value} options={categories} />
      </div>
      <Radar data={data} />
    </Card>
  );
};
