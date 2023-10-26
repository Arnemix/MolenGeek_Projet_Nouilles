const burger = document.getElementById("burger");
const nav = document.querySelectorAll(".link");

// burger.addEventListener("click", () => {
//   const nav = document.querySelectorAll(".link");
//   console.log(nav);
//   nav.forEach((element) => {
//     element.style = "display: block;";
//   });
// });

burger.addEventListener("click", () => {
  const nav = document.querySelectorAll(".link");
  const cross = document.getElementById("cross");

  burger.style.display = "none";
  cross.style.display = "block";

  nav.forEach((element) => {
    element.classList.toggle("linkOn");
  });

  cross.addEventListener("click", () => {
    nav.forEach((element) => {
      element.classList.remove("linkOn");
    });
    burger.style.display = "block";
    cross.style.display = "none";
  });
});
