import { Grid, Col, Card, Text, Metric, Title } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TotalCard from "../../components/TotalCard";

const MainPanel = () => {
  const navigate = useNavigate();
  const onPress = () => {
    navigate("associates");
  };
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50 p-6 sm:p-10">
      <Title>{t("panels.main.title")}</Title>
      <Text>{t("panels.main.description")}</Text>
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        <Col>
            <TotalCard title={t("panels.main.KPI1.title")} deltaType="moderateIncrease" delta={5} metric={21039} onPress={onPress}/>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 4</Metric>
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 5</Metric>
        </Card>
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 1</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 2</Metric>
        </Card>
      </Grid>
    </div>
  );
};

export default MainPanel;
