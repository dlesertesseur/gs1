import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/Auth";
import { IconAlertCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Components/Logo";

export function SignIn() {
  const { t } = useTranslation();
  const { loading, error, errorMessage } = useSelector((state) => state.auth.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // CANBIAR LA VALIDACION DE LA CLAVE a minimo 6 caracteres
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : t("validation.emailFormat")),
      password: (val) => (val.length <= 2 ? t("validation.passwordFormat") : null),
    },
  });

  return (
    <Container size={420} my={40}>
      <Logo/>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        {t("auth.title")}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {t("auth.doNotHaveAccount") + " "}
        <Anchor size="sm" onClick={(event) => navigate("/signup")}>
          {t("auth.createAccount")}
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            dispatch(signIn({ email: values.email, password: values.password }));
          })}
        >
          <TextInput
            label={t("label.email")}
            placeholder={t("placeholder.email")}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email}
          />
          <PasswordInput
            label={t("label.password")}
            placeholder={t("placeholder.password")}
            autoComplete="off"
            mt="md"
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password}
          />

          <Group position="apart" mt="md">
            <Checkbox label={t("label.keepMeConnected")} />
            <Anchor onClick={(event) => navigate("/changePassword")} size="sm">
              {t("auth.forgotPassword")}
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl" loading={loading} loaderPosition={"left"}>
            {t("button.signIn")}
          </Button>
        </form>
        {error ? (
          <Alert mt={"sm"} icon={<IconAlertCircle size={24} />} title={t("errors.title")} color="red" variant="outline">
            <Text color="red" size={"xs"}>{errorMessage}</Text> 
          </Alert>
        ) : null}
      </Paper>
    </Container>
  );
}
