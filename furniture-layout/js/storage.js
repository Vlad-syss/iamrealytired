//========================================================================================================================================================================
//====================================================--CART---====================================================================================================================
//========================================================================================================================================================================
//===================
window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-add")) {
    const cartAdd = event.target.closest(".goods__body");
    const howMuch = document.querySelector("[data-counter]").innerHTML;
    const pId = cartAdd.dataset.id;
    // document.querySelector("[data-add]").classList.add("_active");
    document.querySelector(".success").classList.add("_active");
    document.body.classList.add("lock");
    setTimeout(function () {
      document.querySelector(".success").classList.remove("_active");
      document.body.classList.remove("lock");
    }, 2000);

    const storedData = JSON.parse(localStorage.getItem("productData")) || {};

    if (pId in storedData) {
      alert("Ви вже добавили такий товар");
      document.querySelector(".success").classList.remove("_active");
    } else {
      const pInfo = {
        1: {
          id: 1,
          name: "URBAN LUX HIGH CHAIR",
          image: "./img/script1.png",
          price: 266.15,
          count: howMuch,
        },
        2: {
          id: 2,
          name: "MORDERN BLACK HANGING LIGHT",
          image: "./img/script2.png",
          count: howMuch,
          price: 159.6,
        },
        3: {
          id: 3,
          name: "METRO FUSION TABLE",
          image: "./img/fil3.png",
          price: 223.3,
          count: howMuch,
        },
        4: {
          id: 4,
          name: "LUMIN DESK LAMP",
          image: "./img/script4.png",
          price: 147.8,
          count: howMuch,
        },
        5: {
          id: 5,
          name: "TIMELESS EDGE HANGING CLOCK",
          image: "./img/script5-1.png",
          price: 107.6,
          count: howMuch,
        },
        6: {
          id: 6,
          name: "ZENITH PENDANT LIGHT",
          image: "./img/script6.png",
          price: 206.59,
          count: howMuch,
        },
        7: {
          id: 7,
          name: "URBAN LUX HIGH CHAI",
          image: "./img/script7.png",
          price: 266.15,
          count: howMuch,
        },
        8: {
          id: 8,
          name: "METRO FUSION TABLE",
          image: "./img/script8.png",
          price: 223.3,
          count: howMuch,
        },
        9: {
          id: 9,
          name: "MORDERN BLACK HANGING LIGHT",
          image: "./img/script2.png",
          price: 159.6,
          count: howMuch,
        },
        10: {
          id: 10,
          name: "METRO FUSION TABLE",
          image: "./img/script3.png",
          price: 223.3,
          count: howMuch,
        },
      };
      storedData[pId] = pInfo[pId];

      localStorage.setItem("productData", JSON.stringify(storedData));
    }
  }
});
