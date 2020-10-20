import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Telegraf-Regular.woff";
import "./fonts/Telegraf-Bold.woff";
import "./images/appleWatchMessage.png";
import "./images/detailinTypography.jpg";
import "./images/elementsofTypographicStyle.jpg";
import "./images/friendship.jpg";
import "./images/friendship2.jpg";
import "./images/friendshipCover.jpg";
import "./images/harmonia.png";
import "./images/kaleidoscope.jpg";
import "./images/kaleidoscope2.jpg";
import "./images/oakLogo.png";
import "./images/raggerExample.png";
import "./images/spécimen.jpg";
import "./images/spécimen2.jpg";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
