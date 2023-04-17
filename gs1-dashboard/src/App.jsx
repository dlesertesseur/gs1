import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useSelector } from "react-redux";
import { config } from "./config/Config";
import "./i18n";
import AppStack from "./routes/dashboard/AppStack";
import AuthStack from "./routes/auth/AuthStack";

const conf = {};
if (config.MODE === "development") {
  conf.assetsPath = config.ASSETS_PATH_DEV;
} else {
  conf.assetsPath = config.ASSETS_PATH;
}

function App() {
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const [colorScheme, setColorScheme] = useState("light");
  const { user } = useSelector((state) => state.auth.value);
  
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {user.token ? (
          <AppStack config={conf}/>
        ) : (
          <AuthStack />
        )}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
