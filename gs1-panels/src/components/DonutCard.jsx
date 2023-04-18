import React from "react";

import { Card, Title, DonutChart, Subtitle } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const DonutCard = ({title="NO TITLE", subtitle="NO SUBTITLE", variant}) => {
  return (
    <Card className="max-w-lg">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <DonutChart
        variant={variant ? variant : "donut"}
        className="mt-6"
        data={cities}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </Card>
  );
};

export default DonutCard;
