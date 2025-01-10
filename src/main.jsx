import { StrictMode } from "react";
import 'leaflet/dist/leaflet.css';
import { createRoot } from "react-dom/client";
import "@fontsource/open-sans";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./redux/Store.jsx";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="226796085397-ato83kprolecovinp39ab5c6431f3b8r.apps.googleusercontent.com">
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
