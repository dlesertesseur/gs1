import React from "react";
import { Bold, Button, Card, Flex, Metric, Text, TextInput, Title } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/Auth";
import * as Yup from "yup";

const SignInPanel = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { loading, error, errorMessage } = useSelector((state) => state.auth.value);

  const onClick = () => {
    dispatch(signIn({ email: email, password: password }));
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number")
  })

  return (
    <div className="">
      <Card className="p-4 w-96">
        <div>
          <img className="mx-auto h-20 w-auto" src="gs1-logo.png" alt="gs1-log"></img>
          <Flex className="my-6" justifyContent="center">
            <Metric className="mt-6">{t("auth.title")}</Metric>
          </Flex>
        </div>
        <div className="mt-6">
          <Bold className="mb-1">{t("label.email")}</Bold>
          <TextInput
            disabled={loading}
            placeholder={t("placeholder.email")}
            error={error ? true : false}
            errorMessage={errorMessage}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className="mt-6">
          <Bold className="mb-1">{t("label.password")}</Bold>
          <TextInput
            disabled={loading}
            type="password"
            placeholder={t("placeholder.password")}
            error={error ? true : false}
            errorMessage={errorMessage}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <Flex alignItems={"center"} justifyContent={"end"} className="mt-6">
          <Button size="xs" onClick={onClick} loading={loading}>
            {t("button.signIn")}
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default SignInPanel;
