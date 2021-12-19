// All Import statements
import { catagory, sliderImages } from "../Data/index.data.js";
import { navbar, ShowSignup } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import data from "../Data/products.data.js";
// All DOM refferencing
let catagoryparent = document.getElementById("productbox-catagory");
let slider = document.getElementById("slider");
let nav = document.getElementById("navbar");
let bestseller = document.getElementById("product-parent");
let foot = document.getElementById("footer2");
// All Normal Variables
let sliderIndex = 1;
let bestsellerStart = 0;
let bestsellerEnd = 3;
// All The functions
function heading(str) {
  let str2 = "";
  for (let i = 0; i <= 12; i++) {
    str2 = str2 + str[i];
  }
  str2 = str2 + "...";
  return str2;
}
//Code for adding catagory sections rounded-images
nav.innerHTML = navbar;
foot.innerHTML = footer;
catagory.forEach((el) => {
  let img = document.createElement("img");
  img.src = el;
  catagoryparent.appendChild(img);
});
// Code for changing sliders
setInterval(() => {
  slider.src = sliderImages[sliderIndex];
  sliderIndex++;
  if (sliderIndex == sliderImages.length) {
    sliderIndex = 0;
  }
}, 4000);
ShowSignup();
// Code for showing bestseller products

function addBestseller(start, end) {
  bestseller.innerHTML = null;
  for (let i = start; i <= end; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = data[i].displayimg;
    card.appendChild(img);
    let h2 = document.createElement("h2");
    let title = "";
    if (data[i].title.length >= 12) {
      title = heading(data[i].title);
    } else {
      title = data[i].title;
    }
    h2.textContent = title;
    card.appendChild(h2);
    let p = document.createElement("p");
    p.textContent = data[i].subtitle;
    card.appendChild(p);
    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent = "₹ " + data[i].price;
    card.appendChild(price);
    card.addEventListener("click", () => {
      localStorage.setItem("pdetails", JSON.stringify([data[i]]));
      window.location.href = "productdetails.html";
      // console.log("ok");
    });
    bestseller.appendChild(card);
  }
}
addBestseller(bestsellerStart, bestsellerEnd);
setInterval(() => {
  bestsellerStart++;
  bestsellerEnd++;
  if (bestsellerEnd == data.length) {
    bestsellerStart = 0;
    bestsellerEnd = 3;
  }
  addBestseller(bestsellerStart, bestsellerEnd);
}, 3000);


// var s01 = document.getElementById("cart-length");
// s01.style.visibility = "hidden";

var s02 = document.getElementById("mobile-btn");
s02.onclick = function()
{
  window.location.href = "products.html";
}