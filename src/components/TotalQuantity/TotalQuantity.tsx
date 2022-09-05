import { Card } from "../Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { months, toRGBA, orange } from "../../utils";
import { getTotalQuantity } from "../../selectors";
import classes from "./TotalQuantity.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const data = {
  labels: months,
  datasets: [
    {
      fill: true,
      label: "2010",
      data: getTotalQuantity(2010),
      borderColor: orange,
      backgroundColor: toRGBA(orange),
    },
  ],
};

export const TotalQuantity = ({ title }: { title: string }) => {
  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title}</h5>
      </div>
      <Line options={options} data={data} />
    </Card>
  );
};
