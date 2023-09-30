let card = document.querySelectorAll(".card");
let filterList = document.querySelectorAll(".filter__list li");

document.querySelector(".filter__list").addEventListener("click", (event) => {
  if (event.target.tagName != "LI") return false;

  let cardClass = event.target.dataset["f"];

  filterList.forEach((li) => {
    li.classList.remove("active");
  });

  event.target.classList.add("active");

  card.forEach((el) => {
    el.classList.remove("hide");
    if (!el.classList.contains(cardClass) && cardClass != "all") {
      el.classList.add("hide");
    }
  });
});
