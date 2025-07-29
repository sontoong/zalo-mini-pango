// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./presentation/styles/app.scss";

// Custom zaui
import "./presentation/styles/zaui.scss";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./presentation/styles/swiper.scss";

// Import tailwind styles
import "./presentation/styles/tailwind.css";

// Custom antd css
import "./presentation/styles/antd.scss";

// Font
import "./presentation/styles/fonts.css";

// Leaflet stylesheet
import "leaflet/dist/leaflet.css";

import "zmp-ui/zaui.css";

import "./presentation/styles/Topbar.scss";

// Import App Component
import App from "./main";
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
