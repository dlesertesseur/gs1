import "./i18n";
import AuthStack from "./routes/auth/AuthStack";
import PanelsStack from "./routes/panels/PanelsStack";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth.value);
  return (
    <div className="flex h-screen bg-slate-50">
      <div className="m-auto">
        {user.token ? <PanelsStack /> : <AuthStack />}
      </div>
    </div>
  );
}

export default App;
