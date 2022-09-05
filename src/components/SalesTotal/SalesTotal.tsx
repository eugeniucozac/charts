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
import { months, toRGBA, purple, yellow } from "../../utils";
import { getTotalSales } from "../../selectors";
import classes from "./SalesTotal.styles";

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

export const SalesTotal = ({ title }: { title: string }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: "2010",
        data: getTotalSales(2010),
        borderColor: yellow,
        backgroundColor: toRGBA(yellow),
      },
      {
        label: "2011",
        data: getTotalSales(2011),
        borderColor: purple,
        backgroundColor: toRGBA(purple),
      },
    ],
  };

  return (
    <Card>
      <div className={classes.wrapper}>
        <h5 className={classes.title}>{title} $</h5>
      </div>
      <Line options={options} data={data} />
    </Card>
  );
};
