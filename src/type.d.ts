type DataSets = {
  label: string;
  data: number[] | any[];
  backgroundColor: string | undefined;
  borderWidth: number;
  borderColor?: string | undefined;
};

export type ReactChildren = {
  children: ReactNode;
};

export type InitialState = {
  labels: string[];
  datasets: DataSets[];
};
