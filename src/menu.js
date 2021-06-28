const menu = (() => {

  const menuItemFactory = function(name, description, price) {
    const menuItemDiv = document.createElement("div");
    
    const menuItemName = document.createElement("h2");
    menuItemName.textContent = name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = description;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.textContent = price;

    menuItemDiv.appendChild(menuItemName);
    menuItemDiv.appendChild(menuItemDescription);
    menuItemDiv.appendChild(menuItemPrice);

    return menuItemDiv;
  }
  
  const menu = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Menu";
  menu.appendChild(header);

  const pizza = menuItemFactory("Pizza", "A whole pizza with your choice of toppings.", 14.99);
  menu.appendChild(pizza);

  return { generateMenuDiv: function() { return menu }};
})();

export { menu }