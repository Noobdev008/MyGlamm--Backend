let navbar = `
<div class="top">
            <h4>MyGlamm Youthfull Launch</h4>
            <h3>SHOP NOW</h3>
            <h4>MyGlamm Store</h4>
         </div>
         <div class="mid">
             <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="">
             <input id="search" placeholder="Find Lipstick, Eyeliner, Makeup Tutorial etc." type="text">
             <button id="navbar-btn">Refer & Earn </button>
             <img id="cart" src="https://cdn-icons-png.flaticon.com/512/126/126515.png" alt="">
             <img id="login" src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="">
         </div>
         <div class="bottom">
             <h3 class="nav-link" onClick="window.location.href='products.html'">HOME</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">MAKEUP</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">HAIR CARE</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">SKIN CARE</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">SANITIZING CARE</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">COLLECTION</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">REWARDS</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">MYGLAMM STUDIO</h3>
             <h3 class="nav-link" onClick="window.location.href='products.html'">OFFERS</h3>
         </div>
         <div id="login-popup">
             <h2 id="popup-X">X</h2>
             <h4>Get 15% MyGlammXO Points back on every order</h4>
             <img src="https://www.myglamm.com/images/myglamm-logo.png" alt="">
             <h3>*Mobile Number</h3>
             <input type="number" name="" id="mobile">
             <button id="mobile-btn">CONTINUE</button>
             <p>Or Continue with</p>
             <div>
                 <img id="google"  src="./public/google.png" alt="">
                 <img id="facebook" src="./public/facebook.png" alt="">
             </div>
         </div>
`;
function ShowSignup() {
  let login = document.getElementById("login");
  let cart = document.getElementById("cart");
  let login_popup = document.getElementById("login-popup");
  let popup_X = document.getElementById("popup-X");
  login.addEventListener("click", () => {
    login_popup.style.display = "block";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  });
  popup_X.addEventListener("click", () => {
    login_popup.style.display = "none";
    // document.body.style.backgroundColor = "white";
  });
  cart.addEventListener("click", () => {
    window.location.href = "./Cart/cart.html";
  });
}
function Images_src_change() {
  let login = document.getElementById("login");
  let cart = document.getElementById("cart");
  let google = document.getElementById("google");
  let facebook = document.getElementById("facebook");
  login.src = "../public/account.png";
  cart.src = "../public/cart.png";
  google.src = "../public/google.png";
  facebook.src = "../public/facebook.png";
}
export { navbar, ShowSignup, Images_src_change };
