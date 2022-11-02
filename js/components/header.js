const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("open");
  console.log("menu clicked");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("open");
  console.log("close clicked");
});
