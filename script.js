var time=35;
var score=0;
var hitno=0;
function makebubble(){
  var clutter="";
  for(i=0;i<120;i++){
      var random= Math.floor(Math.random()*10);
    clutter += ` <div id="bubble">${random}</div>`
  }
  document.querySelector("#panelbottom").innerHTML=clutter;

}
makebubble(); 
function runtimer(){
var abc=setInterval(function(){
 if(time>0){
  if(time>10){ 
    time--;
    document.querySelector("#timer").innerHTML=time
    document.querySelector("#timer").style.color="green"

  }
  else if(0<time<10){
    
    time--;
    document.querySelector("#timer").innerHTML=time
    document.querySelector("#timer").style.color="red"
  }
 }
  else{
    clearInterval(abc);
    document.querySelector("#panelbottom").innerHTML=`<h1 id="result">Your Score is ${score} <h1>`
  }
}, 1000)

}
runtimer();
function hitscore(){
hitno=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hitno;
}
hitscore();
function scoreincrese(){
  score=score+10;
  document.querySelector("#score").textContent=score;
}

function clickbubble(){
var a=document.querySelector("#panelbottom");
a.addEventListener("click", function(abcd){
  var clickednum= Number(abcd.target.textContent);
if(clickednum==hitno){
  scoreincrese();
  makebubble();
  hitscore();

}
})
}
clickbubble();
