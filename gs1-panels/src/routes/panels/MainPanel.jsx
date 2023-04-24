import TitleCard from "../../components/TitleCard";
import { Grid, Col, Text, Title } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MainPanel = () => {
  const navigate = useNavigate();
  
  const onPress = () => {
    navigate("associates");
  };

  const onPressDefault = () => {
    navigate("default");
  }

  const { t } = useTranslation();
  return (
    <div className="p-6 sm:p-10 w-screen">
      <Title>{t("panels.main.title")}</Title>
      <Text>{t("panels.main.description")}</Text>
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        <Col>
          <TitleCard title={t("panels.main.section1.title")} onPress={onPress} color={"blue"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section2.title")} onPress={onPressDefault} color={"red"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section3.title")} onPress={onPressDefault} color={"green"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section4.title")} onPress={onPressDefault} color={"yellow"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section5.title")} onPress={onPressDefault} color={"teal"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section6.title")} onPress={onPressDefault} color={"violet"} decoration={"left"} />
        </Col>
        <Col>
          <TitleCard title={t("panels.main.section7.title")} onPress={onPressDefault} color={"lime"} decoration={"left"} />
        </Col>
      </Grid>
    </div>
  );
};

export default MainPanel;
