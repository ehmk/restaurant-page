import cozyRestaurant from "./images/cozy-restaurant-1.jpg";

const home = (() => {
  const home = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Restaurant Name Placeholder";
  headline.classList.add("header");
  home.appendChild(headline);

  const restaurantDescription = document.createElement("p");
  restaurantDescription.textContent = "Description Placeholder: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  home.appendChild(restaurantDescription);

  const restaurantImage = new Image();
  restaurantImage.src = cozyRestaurant;
  restaurantImage.classList.add("gallery-image");
  home.appendChild(restaurantImage);

  return { generateHomeDiv: function() {
      return home;
    }
  } 
})();

export { home };