import "./styles/style.css";
import { navBar } from "./nav.js";
import { homeContent } from "./home.js";

const mainPanel = (() => {
  const content = document.querySelector("#content");
  content.appendChild(navBar.generateNavBar());
  content.appendChild(homeContent.generateHomeDiv());

  navBar.homeButton.addEventListener("click", switchPanel);
  navBar.menuButton.addEventListener("click", switchPanel);
  navBar.contactButton.addEventListener("click", switchPanel);

  function switchPanel() {
    console.log("Switching panels. Please wait.");
  }
})();




