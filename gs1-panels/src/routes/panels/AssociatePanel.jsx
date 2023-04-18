import { Grid, Col, Card, Text, Metric, Title, Flex, Button } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TotalCard from "../../components/TotalCard";
import BarChartCard from "../../components/BarChartCard";
import DonutCard from "../../components/DonutCard";

const AssociatePanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-slate-50 p-6 sm:p-10">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Title>{t("panels.associate.title")}</Title>
          <Text>{t("panels.associate.description")}</Text>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      <Grid numCols={1} numColsSm={2} numColsLg={4} className="gap-4 mt-6">
        <Col>
          <TotalCard />
          <TotalCard className={"mt-4"} />
          <TotalCard className={"mt-4"} />
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <BarChartCard />
        </Col>
        <Col numColSpan={1}>
          <DonutCard />

          <div className="mt-4">
            <DonutCard variant={"pie"} />
          </div>
        </Col>
      </Grid>
    </div>
  );
};

export default AssociatePanel;
