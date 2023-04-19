import React from "react";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const BarChartCard = ({
  data = [],
  group = [],
  title = "NO TITLE",
  subtitle,
}) => {
  return (
    <Card>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      <BarChart
        className="mt-6"
        data={data}
        index={group[0]}
        categories={group}
        colors={["blue"]}
        //valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default BarChartCard;
