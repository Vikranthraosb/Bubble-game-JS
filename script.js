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
    document.querySelector("#timer").style.color=" color: rgb(0, 185, 0)";
  
  }
  else if(0<time<10){
    
    time--;
    document.querySelector("#timer").innerHTML=time
    document.querySelector("#timer").style.color="red"
  }
 }
 else {
  clearInterval(abc);
  document.querySelector("#panelbottom").innerHTML = `
    <div id="resultdisplay"> <h1 id="result" style="background-color: none;">Your Score is ${score}</h1>
    <button onclick="playagain();" id="btn" class="playagainbtn">PLAY AGAIN</button></div>
  `;
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

var flag = 1;

function lightDarkMode() {
  var x = document.querySelector("#panelbottom");
  var z = document.querySelector("#btn");
  if (flag === 1) {
    x.style.backgroundImage = "linear-gradient(to right, #767676, #284357)";
    z.innerHTML = "DARK MODE";
    flag = 0;
  } else {
    x.style.backgroundImage = "linear-gradient(to right, #131f2d, #081122)";
    z.innerHTML = "LIGHT MODE";
    flag = 1;
  }
}

function playagain(){

setTimeout(function() {
  location.reload();
}, 250);
}