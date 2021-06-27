import "./styles/style.css";
import { navBar } from "./nav.js";
import { homeContent } from "./home.js";

const content = document.querySelector("#content");
content.appendChild(navBar.generateNavBar());
content.appendChild(homeContent.generateHomeDiv());

console.log("1");

