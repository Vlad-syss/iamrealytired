//========================================================================================================================================================================
//====================================================PRODUCT CARD====================================================================================================================
//========================================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  const products = {
    1: {
      id: 1,
      name: "URBAN LUX HIGH CHAIR",
      image: "./img/script1.png",
      price: "$266.15",
    },
    2: {
      id: 2,
      name: "MORDERN BLACK HANGING LIGHT",
      image: "./img/script2.png",
      price: "$159.6",
    },
    3: {
      id: 3,
      name: "METRO FUSION TABLE",
      image: "./img/script3.png",
      price: "$223.30",
    },
    4: {
      id: 4,
      name: "LUMIN DESK LAMP",
      image: "./img/script4.png",
      price: "$147.80",
    },
    5: {
      id: 5,
      name: "TIMELESS EDGE HANGING CLOCK",
      image: "./img/script5-1.png",
      price: "$107.6",
    },
    6: {
      id: 6,
      name: "ZENITH PENDANT LIGHT",
      image: "./img/script6.png",
      price: "$206.59",
    },
    7: {
      id: 7,
      name: "URBAN LUX HIGH CHAI",
      image: "./img/script7.png",
      price: "$266.15",
    },
    8: {
      id: 8,
      name: "METRO FUSION TABLE",
      image: "./img/script8.png",
      price: "$223.30",
    },
    9: {
      id: 9,
      name: "MORDERN BLACK HANGING LIGHT",
      image: "./img/script2.png",
      price: "$159.6",
    },
    10: {
      id: 10,
      name: "METRO FUSION TABLE",
      image: "./img/script3.png",
      price: "$223.30",
    },
  };

  const productInfo = products[productId];

  if (productInfo) {
    document.getElementById("productName").textContent = productInfo.name;
    document.querySelector(".breadcrumbs__current").textContent =
      productInfo.name;
    document.querySelector(".goods__body").dataset.id = productInfo.id;
    document.getElementById("productPrice").textContent = productInfo.price;
    // document.getElementById("productImage").src = productInfo.image;
    document.querySelectorAll(".goods__img img").forEach((element) => {
      element.src = productInfo.image;
    });
    document.querySelectorAll(".goods__mini-img img").forEach((element) => {
      element.src = productInfo.image;
    });
  }
});

// const obj = {
//   name: "Vlad",
//   age: "16",
// };
// localStorage.setItem("student", JSON.stringify(obj));

// const raw = localStorage.getItem("student");
// const student = JSON.parse(raw);

// student.name = "Mukola";

// console.log(student);
