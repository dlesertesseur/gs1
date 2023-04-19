import React from "react";

import { Card, Title, DonutChart, Subtitle, Legend, Flex } from "@tremor/react";

const DonutCard = ({
  title = "NO TITLE",
  data = null,
  group = null,
  index = null,
  colors = ["slate", "violet", "indigo", "rose", "cyan", "amber"],
  subtitle,
  variant,
  categories,
}) => {
  return (
    <Card className="max-w-lg">
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      <DonutChart
        variant={variant ? variant : "donut"}
        className="mt-6"
        data={data}
        index={index}
        category={group}
        colors={colors}
      />
      <Legend
        className="mt-3"
        categories={data.map((row) => {
          return row.name;
        })}
        colors={colors}
      />
    </Card>
  );
};

export default DonutCard;
