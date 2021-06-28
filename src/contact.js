const contact = (() => {
  const contact = document.createElement("div");
  
  const header = document.createElement("h1");
  header.textContent = "Contact Info";
  contact.appendChild(header);

  return { generateContactDiv: function() {return contact}};
})();

export { contact }