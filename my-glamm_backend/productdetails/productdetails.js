import nav from "../productnav/productnav.js";

var container = document.getElementById("container");
container.innerHTML = nav() ;

let items = JSON.parse(localStorage.getItem("pdetails"));
let dict = items[0];
console.log(dict);

let img1 = document.getElementById("pimg1");
let img2 = document.getElementById("pimg2");
let img3 = document.getElementById("pimg3");
let img4 = document.getElementById("pimg4");

let img0 = document.getElementById("pimg0");

let img01 = document.createElement("img");
img01.src = dict.img1;
img1.append(img01);

let img02 = document.createElement("img");
img02.src = dict.img2;
img2.append(img02);

let img04 = document.createElement("img");
img04.src = dict.img4;
img4.append(img04);

let img03 = document.createElement("img");
img03.src = dict.img3;
img3.append(img03);

let img05 = document.createElement("img");
img05.src = dict.displayimg;
img0.append(img05);

img1.onmouseover = function()
{
    img0.innerHTML = null;
	let img_0=document.createElement("img");
	img_0.src=dict.img1;
	img0.append(img_0);    
}
img1.onmouseleave = function()
{
    outimg();
}

img2.onmouseover = function()
{
    img0.innerHTML = null;
	let img_0=document.createElement("img");
	img_0.src=dict.img2;
	img0.append(img_0);    
}
img2.onmouseleave = function()
{
    outimg();
}

img3.onmouseover = function()
{
    img0.innerHTML = null;
	let img_0=document.createElement("img");
	img_0.src=dict.img3;
	img0.append(img_0);    
}
img3.onmouseleave = function()
{
    outimg();
}

img4.onmouseover = function()
{
    img0.innerHTML = null;
	let img_0=document.createElement("img");
	img_0.src=dict.img4;
	img0.append(img_0);    
}
img4.onmouseleave = function()
{
    outimg();
}

function outimg()
{
        img0.innerHTML = null;
		let img_0=document.createElement("img");
		img_0.src=dict.displayimg;
		img0.append(img_0);
}

let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let rating = document.getElementById("rating");
let price = document.getElementById("price");

title.innerHTML = dict.title;
subtitle.innerHTML = dict.subtitle;
rating.innerHTML = "Rating : "+dict.rating;
price.innerHTML = "₹ "+dict.price;

let pbagbutton = document.getElementById("pbagbutton");
pbagbutton.onclick = function()
{
    if(localStorage.getItem("myglammCart")===null)
    {
        localStorage.setItem("myglammCart",JSON.stringify([]));
    }
    let myglammCart =JSON.parse(localStorage.getItem("myglammCart"));
                    
    myglammCart.push(dict);

    localStorage.setItem("myglammCart",JSON.stringify (myglammCart));
                    
    window.location.href = "/cart";
    //alert("Product added to cart");

}
