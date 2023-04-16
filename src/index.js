import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from './store/Store';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider domain="dev-gtcymnrm5bsx0viy.us.auth0.com" clientId="4nVYpZ8DsgbRTKggNrpvFgRWdTkBBU4r"  redirectUri={window.location.origin}>
    <Provider store={store}>
        <App />
    </Provider>
    </Auth0Provider>
);


