const contact = (() => {
  const contact = document.createElement("div");
  
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = "Contact Info";
  contact.appendChild(header);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone Number: (123)123-1234";
  contact.appendChild(phoneNumber);

  const address = document.createElement("p");
  address.textContent = "4321 12th Street, New York, New York, 10001";
  contact.appendChild(address);

  return { generateContactDiv: function() {return contact}};
})();

export { contact }