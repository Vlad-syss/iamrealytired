//========================================================================================================================================================================
//========================================================================================================================================================================
const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
});
//========================================================================================================================================================================
//========================================================================================================================================================================
const popupFollow = document.querySelector(".follow");
const popupClose = document.querySelectorAll(".follow__close,.follow__area");
const loveBtn = document.querySelector(".header__block_like");

if ((loveBtn, popupFollow)) {
  loveBtn.addEventListener("click", (e) => {
    popupFollow.classList.toggle("_active");
    document.body.classList.toggle("lock");
  });

  for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", (e) => {
      popupFollow.classList.remove("_active");
      document.body.classList.remove("lock");
    });
  }
}

//========================================================================================================================================================================
//========================================================================================================================================================================
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector(".header__row").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

document
  .querySelectorAll(".navigation__list_home .navigation__link")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScroll(item.getAttribute("href"));
      document.querySelector(".header__row").classList.remove("active");
      document.querySelector(".header").classList.remove("active");
      document.body.classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("active");
    });
  });

//========================================================================================================================================================================
//========================================================================================================================================================================

const slider = document.getElementById("slider");

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 2000],
    connect: true,
    range: {
      min: 0,
      max: 5000,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}

//========================================================================================================================================================================
//========================================================================================================================================================================
let tabs = document.querySelectorAll(".tabs__item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    tabs.forEach(function (t) {
      t.classList.remove("active");
    });

    this.classList.add("active");

    let targetId = this.getAttribute("href").substring(1);
    let targetTab = document.getElementById(targetId);

    if (targetTab) {
      let tabBlocks = document.querySelectorAll(".tabs__block");
      tabBlocks.forEach(function (block) {
        block.style.opacity = "0";
        block.style.position = "absolute";
        // block.style.display = "none";
      });

      // targetTab.style.display = "flex";
      targetTab.style.opacity = "1";
      targetTab.style.position = "static";
    }
  });
});

//========================================================================================================================================================================
//========================================================================================================================================================================
function toggleCartStatus() {
  const cartWrapper = document.querySelector(".follow__wrapper");
  const cartEmpty = document.querySelector("[data-cart-empty]");

  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add("none");
  } else {
    cartEmpty.classList.remove("none");
  }
}
//========================================================================================================================================================================
//========================================================================================================================================================================
const followWrapper = document.querySelector(".follow__wrapper");

followWrapper.addEventListener("click", (event) => {
  if (event.target.closest("[data-remove-id]")) {
    const productIdToRemove = event.target.closest(".follow__box");
    if (productIdToRemove) {
      const productId = productIdToRemove.getAttribute("data-remove-id");
      productIdToRemove.remove();

      const cartData = JSON.parse(localStorage.getItem("cart")) || [];

      const updatedCartData = cartData.filter((item) => item.id == productId);

      localStorage.setItem("cart", JSON.stringify(updatedCartData));

      toggleCartStatus();
    }
  }
});

const cartData = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
  followWrapper.innerHTML = "";

  cartData.forEach((product) => {
    const cartItem = `<div data-id="${product.id}" class="follow__box">
                        <a href="productCard.html?productId=${product.id}" class="follow__box_img">
                          <img src="${product.image}" alt="img" />
                        </a>
                        <div class="follow__box_about">
                          <h1 class="follow__box_title">
                            <a href="productCard.html?productId=${product.id}"
                              >${product.name}</a
                            >
                          </h1>
                          <ul class="follow__box_list">
                            <li class="_icon-star"></li>
                            <li class="_icon-star"></li>
                            <li class="_icon-star"></li>
                            <li class="_icon-star"></li>
                            <li class="_icon-star"></li>
                          </ul>
                          <div class="productCard__about_box much">
                            <p><span>261-</span> products sold</p>
                            <p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                                fill="none"
                              >
                                <circle cx="2" cy="2" r="2" fill="#7E7F7C" />
                              </svg>
                            </p>
                            <p><span>3,1k-</span> products watched</p>
                          </div>
                          <div class="follow__box_sum">
                            <a
                              href="productCard.html?productId=${product.id}"
                              class="follow__box_price"
                              >${product.price}</a
                            >
                            <a
                              href="productCard.html?productId=${product.id}"
                              class="follow__box_todo"
                              >GO TO CARD</a
                            >
                            <button class="follow__box_btn" data-remove-id="${product.id}">
                              <svg
                                data-remove-id="${product.id}"
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="30"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                data-remove-id="${product.id}"
                                  d="M2.78546 6.48293C2.97391 6.02795 3.25014 5.61456 3.59837 5.26633C3.94659 4.91811 4.35998 4.64188 4.81496 4.45342C5.26993 4.26497 5.75757 4.16797 6.25003 4.16797C6.74249 4.16797 7.23013 4.26497 7.68511 4.45342C8.14008 4.64188 8.55348 4.91811 8.9017 5.26633L10 6.36467L11.0984 5.26633C11.8016 4.56307 12.7555 4.16798 13.75 4.16798C14.7446 4.16798 15.6984 4.56307 16.4017 5.26633C17.105 5.9696 17.5001 6.92343 17.5001 7.918C17.5001 8.91257 17.105 9.8664 16.4017 10.5697L10 16.9713L3.59837 10.5697C3.25014 10.2214 2.97391 9.80805 2.78546 9.35308C2.597 8.8981 2.5 8.41046 2.5 7.918C2.5 7.42554 2.597 6.9379 2.78546 6.48293Z"
                                  stroke="#2F302C"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <line
                                data-remove-id="${product.id}"
                                  x1="0"
                                  y1="10"
                                  x2="20"
                                  y2="10"
                                  stroke="#2F302C"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  transform="rotate(40 10 10)"
                                />
                                <line
                                data-remove-id="${product.id}"
                                  x1="0"
                                  y1="10"
                                  x2="20"
                                  y2="10"
                                  stroke="#2F302C"
                                  stroke-width="1.2"
                                  stroke-linecap="round"
                                  transform="rotate(-40 10 10)"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>`;
    followWrapper.insertAdjacentHTML("beforeend", cartItem);
  });

  toggleCartStatus();
}

updateCartDisplay();

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-love")) {
    const cartLove = event.target.closest(".goods__body");
    const productId = cartLove.dataset.id;
    document.querySelector("[data-love]").classList.add("_active");

    const existingCard = followWrapper.querySelector(
      `[data-id="${productId}"]`
    );
    if (existingCard) {
      alert("Ви вже вподобали такий товар");
    } else {
      const productInfo = {
        1: {
          id: 1,
          name: "URBAN LUX HIGH CHAIR",
          image: "./img/script1.png",
          price: "$2668.15",
        },
        2: {
          id: 2,
          name: "MORDERN BLACK HANGING LIGHT",
          image: "./img/script2.png",
          price: "$1595.6",
        },
        3: {
          id: 3,
          name: "METRO FUSION TABLE",
          image: "./img/script3.png",
          price: "$2238.30",
        },
        4: {
          id: 4,
          name: "LUMIN DESK LAMP",
          image: "./img/script4.png",
          price: "$1477.80",
        },
        5: {
          id: 5,
          name: "TIMELESS EDGE HANGING CLOCK",
          image: "./img/script5-1.png",
          price: "$1071.6",
        },
        6: {
          id: 6,
          name: "ZENITH PENDANT LIGHT",
          image: "./img/script6.png",
          price: "$2069.59",
        },
        7: {
          id: 7,
          name: "URBAN LUX HIGH CHAI",
          image: "./img/script7.png",
          price: "$2668.15",
        },
        8: {
          id: 8,
          name: "METRO FUSION TABLE",
          image: "./img/script8.png",
          price: "$2238.30",
        },
        9: {
          id: 9,
          name: "MORDERN BLACK HANGING LIGHT",
          image: "./img/script2.png",
          price: "$1595.6",
        },
        10: {
          id: 10,
          name: "METRO FUSION TABLE",
          image: "./img/script3.png",
          price: "$2238.30",
        },
      };
      const products = productInfo[productId];
      const cartItem = `<div data-id="${products.id}" class="follow__box">
                          <a href="productCard.html?productId=${products.id}" class="follow__box_img">
                            <img src="${products.image}" alt="img" />
                          </a>
                          <div class="follow__box_about">
                            <h1 class="follow__box_title">
                              <a href="productCard.html?productId=${products.id}"
                                >${products.name}</a
                              >
                            </h1>
                            <ul class="follow__box_list">
                              <li class="_icon-star"></li>
                              <li class="_icon-star"></li>
                              <li class="_icon-star"></li>
                              <li class="_icon-star"></li>
                              <li class="_icon-star"></li>
                            </ul>
                            <div class="productCard__about_box much">
                              <p><span>261-</span> products sold</p>
                              <p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="4"
                                  height="4"
                                  viewBox="0 0 4 4"
                                  fill="none"
                                >
                                  <circle cx="2" cy="2" r="2" fill="#7E7F7C" />
                                </svg>
                              </p>
                              <p><span>3,1k-</span> products watched</p>
                            </div>
                            <div class="follow__box_sum">
                              <a
                                href="productCard.html?productId=${products.id}"
                                class="follow__box_price"
                                >${products.price}</a
                              >
                              <a
                                href="productCard.html?productId=${products.id}"
                                class="follow__box_todo"
                                >GO TO CARD</a
                              >
                              <button class="follow__box_btn" data-remove-id="${products.id}">
                                <svg
                                  data-remove-id="${products.id}"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="35"
                                  height="30"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                  data-remove-id="${products.id}"
                                    d="M2.78546 6.48293C2.97391 6.02795 3.25014 5.61456 3.59837 5.26633C3.94659 4.91811 4.35998 4.64188 4.81496 4.45342C5.26993 4.26497 5.75757 4.16797 6.25003 4.16797C6.74249 4.16797 7.23013 4.26497 7.68511 4.45342C8.14008 4.64188 8.55348 4.91811 8.9017 5.26633L10 6.36467L11.0984 5.26633C11.8016 4.56307 12.7555 4.16798 13.75 4.16798C14.7446 4.16798 15.6984 4.56307 16.4017 5.26633C17.105 5.9696 17.5001 6.92343 17.5001 7.918C17.5001 8.91257 17.105 9.8664 16.4017 10.5697L10 16.9713L3.59837 10.5697C3.25014 10.2214 2.97391 9.80805 2.78546 9.35308C2.597 8.8981 2.5 8.41046 2.5 7.918C2.5 7.42554 2.597 6.9379 2.78546 6.48293Z"
                                    stroke="#2F302C"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <line
                                  data-remove-id="${products.id}"
                                    x1="0"
                                    y1="10"
                                    x2="20"
                                    y2="10"
                                    stroke="#2F302C"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    transform="rotate(40 10 10)"
                                  />
                                  <line
                                  data-remove-id="${products.id}"
                                    x1="0"
                                    y1="10"
                                    x2="20"
                                    y2="10"
                                    stroke="#2F302C"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    transform="rotate(-40 10 10)"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>`;
      followWrapper.insertAdjacentHTML("beforeend", cartItem);

      cartData.push(products);
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
    toggleCartStatus();
  }
});
//========================================================================================================================================================================
//====================================================COUNTER====================================================================================================================
//========================================================================================================================================================================
document.addEventListener("click", function (event) {
  if (event.target.dataset.action) {
    const action = event.target.dataset.action;
    const countWrapper = event.target.closest(".productCard__type_equal");
    const count = countWrapper.querySelector("[data-counter]");

    if (action === "plus" && parseInt(count.innerText) < 20) {
      count.innerText++;
    }

    if (action === "minus" && parseInt(count.innerText) > 1) {
      count.innerText--;
    }
  }
});
