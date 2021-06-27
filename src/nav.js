const navBar = (() => {
  const nav = document.createElement("nav");
  
  const navButtons = document.createElement("ul");
  nav.appendChild(navButtons);
  
  const homeButton = document.createElement("li");
  navButtons.appendChild(homeButton);
  homeButton.textContent = "Home";

  const menuButton = document.createElement("li");
  navButtons.appendChild(menuButton);
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("li");
  navButtons.appendChild(contactButton);
  contactButton.textContent = "Contact";
  
  return { generateNavBar: function() {
      return nav;
    } 
  }
})();

export { navBar }