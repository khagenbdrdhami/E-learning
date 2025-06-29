import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {  CartProvider } from "./Context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
    domain="dev-25cy0rmp540mq5i8.us.auth0.com"
    clientId="EKbHgcjy2FpVGlnuyVV9UNyMVEfk6NBG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);
