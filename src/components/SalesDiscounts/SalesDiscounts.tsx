import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card } from "../Card";
import classes from "./SalesDiscounts.styles";
import { months, purple, green } from "../../utils";
import { getTotalDiscount } from "../../selectors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const data = {
  labels: months,
  datasets: [
    {
      label: "2010",
      data: getTotalDiscount(2010),
      backgroundColor: green,
    },
    {
      label: "2011",
      data: getTotalDiscount(2011),
      backgroundColor: purple,
    },
  ],
};

export const SalesDiscounts = ({ title }: { title: string }) => {
  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title}</h5>
      </div>
      <Bar options={options} data={data} />
    </Card>
  );
};
