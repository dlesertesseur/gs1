import React from "react";
import { BadgeDelta, Bold, Card, Flex, Metric, Text } from "@tremor/react";
import { useTranslation } from "react-i18next";

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const TotalCard = ({
  title = "NO TITLE",
  metric = 0,
  deltaType = "unchanged",
  delta = 0,
  onPress,
  color="blue",
  decoration
}) => {
  const { t } = useTranslation();
  return (
    <Card key={title} onClick={onPress} decoration={decoration} decorationColor={color}>
      <Bold>{title}</Bold>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3"
      >
        <Metric>{metric}</Metric>
      </Flex>
      <Flex justifyContent="start" className="space-x-2 mt-4">
        <BadgeDelta deltaType={deltaType} />
        <Flex justifyContent="start" className="space-x-1 truncate">
          <Text color={colors[deltaType]}>{delta}</Text>
          <Text className="truncate"> {t("label.toPreviousMonth")} </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TotalCard;
