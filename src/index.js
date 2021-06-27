import "./styles/style.css";
import { homeContent } from "./home.js";

const content = document.querySelector("#content");
content.appendChild(homeContent.generateHomeDiv());

