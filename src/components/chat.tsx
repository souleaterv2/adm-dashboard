import dynamic from "next/dynamic";
import { theme } from "@chakra-ui/react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.00Z",
      "2021-03-19T00:00:00.00Z",
      "2021-03-20T00:00:00.00Z",
      "2021-03-21T00:00:00.00Z",
      "2021-03-22T00:00:00.00Z",
      "2021-03-23T00:00:00.00Z",
      "2021-03-24T00:00:00.00Z",
    ],
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

export const ApexChar = () => (
  <Chart type="area" options={options} series={series} />
);
