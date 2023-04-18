import React from "react";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

const BarChartCard = ({title="NO TITLE", subtitle="NO SUBTITLE"}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default BarChartCard;
