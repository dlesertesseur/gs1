import "./i18n";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPanel from "./routes/auth/SignInPanel";
import DefaultPanel from "./routes/panels/DefaultPanel";
import AssociatePanel from "./routes/panels/AssociatePanel";
import MainPanel from "./routes/panels/MainPanel";

function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      <div className="m-auto">
        <BrowserRouter basename="/gs1">
          <Routes>
            <Route exact path="/" element={<SignInPanel />} />
            <Route
              exact
              path="/menu"
              element={
                <ProtectedRoute>
                  <MainPanel />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/menu/associates"
              element={
                <ProtectedRoute>
                  <AssociatePanel />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/menu/default"
              element={
                <ProtectedRoute>
                  <DefaultPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
