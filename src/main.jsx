import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChangeContent } from "./Context/ChangeContent.jsx";
import { StudioSignupProvider } from "./Context/IsOpenStudioSignup.jsx";
import { IsOpenStudioLogin } from "./Context/IsOpenStudioLogin.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StudioSignupProvider>
      <IsOpenStudioLogin>
        <ChangeContent>
          <App />
        </ChangeContent>
      </IsOpenStudioLogin>
    </StudioSignupProvider>
  </BrowserRouter>
);
