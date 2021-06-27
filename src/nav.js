const navBar = (() => {
  const nav = document.createElement("nav");
  
  const navButtons = document.createElement("ul");
  nav.appendChild(navButtons);
  
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  navButtons.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  navButtons.appendChild(menuButton);
  
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  navButtons.appendChild(contactButton);
  
  return { generateNavBar: function() {
      return nav;
    },
    homeButton, 
    menuButton,
    contactButton,
  }
})();

export { navBar }
