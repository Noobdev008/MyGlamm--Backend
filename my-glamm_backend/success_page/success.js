function success01()
{
    window.location.href = "/";
}


var msg = document.getElementById("msg");
msg.innerHTML = "...";

function showmsg()
{
    msg.innerHTML = null;
    msg.innerHTML = "Payment Successful...";
}


setInterval(function(){
    
    showmsg();

    }, 3000);