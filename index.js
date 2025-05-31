  const black=document.getElementById("black1");
  black.addEventListener("mousemove",function(e){
    var span=document.createElement("span");
    span.style.top= e.pageY +"px";
    span.style.left= e.pageX+"px";
    black.appendChild(span);
  })