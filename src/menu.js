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
  header.classList.add("header");
  header.textContent = "Menu";
  menu.appendChild(header);

  for (let i = 0; i < 20; i++) {
    const food = menuItemFactory("Food", "This is a good item with various ingredients that will please your tastebuds.", 14.99);
    food.classList.add("menu-item");
    menu.appendChild(food);
  }
  
  return { generateMenuDiv: function() { return menu }};
})();

export { menu }