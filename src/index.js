import "./styles/style.css";
import { navBar } from "./nav.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact";

const mainPanel = (() => {
  const content = document.querySelector("#content");
  let currentPanel = home.generateHomeDiv();
  content.appendChild(navBar.generateNavBar());
  content.appendChild(currentPanel);

  navBar.homeButton.addEventListener("click", switchToHome);
  navBar.menuButton.addEventListener("click", switchToMenu);
  navBar.contactButton.addEventListener("click", switchToContact);

  function switchToHome() {
    currentPanel.style.display = "none";
    currentPanel = home.generateHomeDiv();
    content.appendChild(currentPanel);
    currentPanel.style.display = "block";
  }
  function switchToMenu() {
    currentPanel.style.display = "none";
    currentPanel = menu.generateMenuDiv();
    content.appendChild(currentPanel);
    currentPanel.style.display = "block";
  }
  function switchToContact() {
    currentPanel.style.display = "none";
    currentPanel = contact.generateContactDiv();
    content.appendChild(currentPanel);
    currentPanel.style.display = "block";
  }
})();




