import { Grid, Col, Text, Title, Flex, Button } from "@tremor/react";
import TotalCard from "../../components/TotalCard";
import BarChartCard from "../../components/BarChartCard";
import DonutCard from "../../components/DonutCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPanelByName } from "../../api/panels.api";

const AssociatePanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [panel, setPanel] = useState(null);

  const onBack = () => {
    navigate(-1);
  };

  const getData = async () => {
    const params = { name: "associates" };
    const ret = await getPanelByName(params);

    let group = t("panels.associate.KPI4.group");
    let format = ret.data.annualEvolution.map((row) => {
      const obj = {};
      obj["name"] = row.year;
      obj[group] = row.value;
      return obj;
    });
    ret.data.annualEvolution = format;

    group = t("panels.associate.KPI5.group");
    format = ret.data.byIndustry.map((row) => {
      const obj = {};
      obj["name"] = row.industry;
      obj[group] = row.value;
      return obj;
    });
    ret.data.byIndustry = format;

    group = t("panels.associate.KPI6.group");
    format = ret.data.satisfaction.map((row) => {
      const obj = {};
      obj["name"] = row.level;
      obj[group] = row.value;
      return obj;
    });
    ret.data.satisfaction = format;

    setPanel(ret);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-blue-100 p-6 sm:p-10 h-screen w-screen">
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
          <div className="mb-4">
            <TotalCard
              metric={panel?.data.total}
              title={t("panels.associate.KPI1.title")}
            />
          </div>
          <div className="mb-4">
            <TotalCard
              metric={panel?.data.averageAnnualIncome}
              title={t("panels.associate.KPI2.title")}
            />
          </div>
          <div className="">
            <TotalCard
              metric={panel?.data.averageAnnualTerminations}
              title={t("panels.associate.KPI3.title")}
            />
          </div>
        </Col>
        <Col numColSpan={1} numColSpanLg={2}>
          <BarChartCard
            group={[t("panels.associate.KPI4.group")]}
            title={t("panels.associate.KPI4.title")}
            data={panel?.data.annualEvolution}
          />
        </Col>
        <Col numColSpan={1}>
          <DonutCard
            title={t("panels.associate.KPI5.title")}
            group={t("panels.associate.KPI5.group")}
            index={"name"}
            data={panel ? panel.data.byIndustry:[]}
          />
          <div className="mt-4">
            <DonutCard
              title={t("panels.associate.KPI6.title")}
              group={t("panels.associate.KPI6.group")}
              index={"name"}
              data={panel ? panel.data.satisfaction : []}
              variant={"pie"}
            />
          </div>
        </Col>
      </Grid>
    </div>
  );
};

export default AssociatePanel;
