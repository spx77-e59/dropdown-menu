import "./styles.css";

const allMenuDiv = document.querySelectorAll(".dropdown-menu");

allMenuDiv.forEach((menuDiv) => {
  const menuButton = menuDiv.querySelector("button");
  const itemListElement = menuDiv.querySelector("ul");
  const itemListLists = itemListElement.querySelectorAll("li");

  menuButton.classList.add("menu-button");
  itemListElement.classList.add("item-list");

  itemListLists.forEach((item) => {
    item.classList.add("item");
  });

  const toggleMenu = () => {
    itemListElement.classList.toggle("visible");
  };

  menuButton.addEventListener("click", toggleMenu);
  itemListLists.forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
});
