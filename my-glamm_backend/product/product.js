//import data from "../Data/products.data.js";
import nav from "../productnav/productnav.js";
var container = document.getElementById("container");
container.innerHTML = nav();

var data;

fetch("http://localhost:80/srng").then(function(res)
{
      return res.json(); 
}).then(function(res)
{
      data = res;
      console.log(data);
      myglamm(data);
}) 

function myglamm(data)
{

var pdata = document.getElementById("pdata");
var cathead = document.getElementById("cathead");

cathead.innerHTML = "  COLLECTION  ";

    data.forEach( i => 
    {
        
        let div = document.createElement("div");
    
        let img = document.createElement("img");
        let title = document.createElement("p");
        let subtitle = document.createElement("p");
        let price = document.createElement("p");

        let imgdiv = document.createElement("div");
        
        img.src = i.displayimg;
        imgdiv.append(img);

        title.innerText = i.title;
        subtitle.innerText = i.subtitle;
        subtitle.style.color = "rgb(147, 143, 143)";

        price.innerHTML = "₹ "+i.price;

        div.append(imgdiv,title,subtitle,price);

        div.onmouseover = function()
        {
            div.style.border = "3px solid rgb(167, 165, 165)";
            img.style.height = "170px";
            img.style.width = "200px";
            img.style.marginLeft = "10px";
        }

        div.onmouseleave = function()
        {
            div.style.border = null;
            img.style.height = null;
            img.style.width = null ;
            img.style.marginLeft = null;
        }

        div.onclick = function()
                {
                    if(localStorage.getItem("pdetails")===null)
                    {
                        localStorage.setItem("pdetails",JSON.stringify([]));
                    }
                    
                    let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                    
                    pdetails.pop()
                    pdetails.push(i);

                    localStorage.setItem("pdetails",JSON.stringify (pdetails));
                    
                    window.location.href = "/productsdetail";

                }

        pdata.append(div);
        
    });

    var makeup = document.getElementById("makeup");
    makeup.onmouseover = function()
    {
        makeup.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    makeup.onmouseleave = function()
    {
        makeup.style.borderBottom = null;
    }

    makeup.onclick = function()
    {
        pdata.innerHTML = null;
        cathead.innerHTML = "  MAKEUP  ";

        data.forEach(i =>
        {
            if(i.category == "makeup")
            {
                
                let div = document.createElement("div");
                
                let img = document.createElement("img");
                let title = document.createElement("p");
                let subtitle = document.createElement("p");
                let price = document.createElement("p");

                let imgdiv = document.createElement("div");
                
                img.src = i.displayimg;
                imgdiv.append(img);

                title.innerText = i.title;
                subtitle.innerText = i.subtitle;
                subtitle.style.color = "rgb(147, 143, 143)";

                price.innerHTML = "₹ "+i.price;

                div.append(imgdiv,title,subtitle,price);

                div.onmouseover = function()
                {
                    div.style.border = "3px solid rgb(167, 165, 165)";
                    img.style.height = "170px";
                    img.style.width = "200px";
                    img.style.marginLeft = "10px";
                }

                div.onmouseleave = function()
                {
                    div.style.border = null;
                    img.style.height = null;
                    img.style.width = null ;
                    img.style.marginLeft = null;
                }

                div.onclick = function()
                        {
                            if(localStorage.getItem("pdetails")===null)
                            {
                                localStorage.setItem("pdetails",JSON.stringify([]));
                            }
                            
                            let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                            
                            pdetails.pop()
                            pdetails.push(i);

                            localStorage.setItem("pdetails",JSON.stringify (pdetails));
                            
                            window.location.href = "/productsdetailv";

                        }

                pdata.append(div);
            }
        });
    }

    var haircare = document.getElementById("haircare");
    haircare.onmouseover = function()
    {
        haircare.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    haircare.onmouseleave = function()
    {
        haircare.style.borderBottom = null;
    }


    haircare.onclick = function()
    {
        pdata.innerHTML = null;
        cathead.innerHTML = "  HAIR CARE  ";

        data.forEach(i =>
        {
            if(i.category == "haircare")
            {
                
                let div = document.createElement("div");
                
                let img = document.createElement("img");
                let title = document.createElement("p");
                let subtitle = document.createElement("p");
                let price = document.createElement("p");

                let imgdiv = document.createElement("div");
                
                img.src = i.displayimg;
                imgdiv.append(img);

                title.innerText = i.title;
                subtitle.innerText = i.subtitle;
                subtitle.style.color = "rgb(147, 143, 143)";

                price.innerHTML = "₹ "+i.price;

                div.append(imgdiv,title,subtitle,price);

                div.onmouseover = function()
                {
                    div.style.border = "3px solid rgb(167, 165, 165)";
                    img.style.height = "170px";
                    img.style.width = "200px";
                    img.style.marginLeft = "10px";
                }

                div.onmouseleave = function()
                {
                    div.style.border = null;
                    img.style.height = null;
                    img.style.width = null ;
                    img.style.marginLeft = null;
                }

                div.onclick = function()
                        {
                            if(localStorage.getItem("pdetails")===null)
                            {
                                localStorage.setItem("pdetails",JSON.stringify([]));
                            }
                            
                            let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                            
                            pdetails.pop()
                            pdetails.push(i);

                            localStorage.setItem("pdetails",JSON.stringify (pdetails));
                            
                            window.location.href = "/productsdetail";

                        }

                pdata.append(div);
            }
        });
    }

    var sanitizingcare = document.getElementById("sant");
    sanitizingcare.onmouseover = function()
    {
        sanitizingcare.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    sanitizingcare.onmouseleave = function()
    {
        sanitizingcare.style.borderBottom = null;
    }

    sanitizingcare.onclick = function()
    {
        pdata.innerHTML = null;
        cathead.innerHTML = "  SANITIZING CARE  ";

        data.forEach(i =>
        {
            if(i.category == "sanitizingcare")
            {
                
                let div = document.createElement("div");
                
                let img = document.createElement("img");
                let title = document.createElement("p");
                let subtitle = document.createElement("p");
                let price = document.createElement("p");

                let imgdiv = document.createElement("div");
                
                img.src = i.displayimg;
                imgdiv.append(img);

                title.innerText = i.title;
                subtitle.innerText = i.subtitle;
                subtitle.style.color = "rgb(147, 143, 143)";

                price.innerHTML = "₹ "+i.price;

                div.append(imgdiv,title,subtitle,price);

                div.onmouseover = function()
                {
                    div.style.border = "3px solid rgb(167, 165, 165)";
                    img.style.height = "170px";
                    img.style.width = "200px";
                    img.style.marginLeft = "10px";
                }

                div.onmouseleave = function()
                {
                    div.style.border = null;
                    img.style.height = null;
                    img.style.width = null ;
                    img.style.marginLeft = null;
                }

                div.onclick = function()
                        {
                            if(localStorage.getItem("pdetails")===null)
                            {
                                localStorage.setItem("pdetails",JSON.stringify([]));
                            }
                            
                            let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                            
                            pdetails.pop()
                            pdetails.push(i);

                            localStorage.setItem("pdetails",JSON.stringify (pdetails));
                            
                            window.location.href = "/productsdetail";

                        }

                pdata.append(div);
            }
        });
    }

    var skincare = document.getElementById("skincare");
    skincare.onmouseover = function()
    {
        skincare.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    skincare.onmouseleave = function()
    {
        skincare.style.borderBottom = null;
    }


    skincare.onclick = function()
    {
        pdata.innerHTML = null;
        cathead.innerHTML = "  SKIN CARE  ";

        data.forEach(i =>
        {
            if(i.category == "skincare")
            {
                
                let div = document.createElement("div");
                
                let img = document.createElement("img");
                let title = document.createElement("p");
                let subtitle = document.createElement("p");
                let price = document.createElement("p");

                let imgdiv = document.createElement("div");
                
                img.src = i.displayimg;
                imgdiv.append(img);

                title.innerText = i.title;
                subtitle.innerText = i.subtitle;
                subtitle.style.color = "rgb(147, 143, 143)";

                price.innerHTML = "₹ "+i.price;

                div.append(imgdiv,title,subtitle,price);

                div.onmouseover = function()
                {
                    div.style.border = "3px solid rgb(167, 165, 165)";
                    img.style.height = "170px";
                    img.style.width = "200px";
                    img.style.marginLeft = "10px";
                }

                div.onmouseleave = function()
                {
                    div.style.border = null;
                    img.style.height = null;
                    img.style.width = null ;
                    img.style.marginLeft = null;
                }

                div.onclick = function()
                        {
                            if(localStorage.getItem("pdetails")===null)
                            {
                                localStorage.setItem("pdetails",JSON.stringify([]));
                            }
                            
                            let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                            
                            pdetails.pop()
                            pdetails.push(i);

                            localStorage.setItem("pdetails",JSON.stringify (pdetails));
                            
                            window.location.href = "/productsdetail";

                        }

                pdata.append(div);
            }
        });
    }

    
    var collection = document.getElementById("collection");
    collection.onmouseover = function()
    {
        collection.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    collection.onmouseleave = function()
    {
        collection.style.borderBottom = null;
    }

    collection.onclick = function()
    {
        window.location.href = "/products";
    }

    var home = document.getElementById("home");
    home.onmouseover = function()
    {
        home.style.borderBottom = "3px solid rgb(255, 21, 138)"
    }
    home.onmouseleave = function()
    {
        home.style.borderBottom = null;
    }

    home.onclick = function()
    {
        window.location.href = "/";
    }

    var user = document.getElementById("user");
    user.onclick = function()
    {
        window.location.href = "/";
    }
}