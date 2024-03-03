function handlenav(){
  var open = document.querySelector(".fa-bars");
  var close = document.querySelector(".fa-xmark");

  open.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector("body").style.opacity = 0.5;
    document.querySelector(".logo").style.display = "none";
    document.querySelector("#two").style.display = "none";
    document.querySelector("#one").style.display = "flex";
    document.querySelector(".nav-res-elements").style.display = "block";
  })

  close.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.opacity = 1;
    document.querySelector(".logo").style.display = "flex";
    document.querySelector("#two").style.display = "flex";
    document.querySelector("#one").style.display = "none";
    document.querySelector(".nav-res-elements").style.display = "none";
  })
}

handlenav();