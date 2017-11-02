/* Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/

var M1 = TweenMax.to('.character',1,{repeat:-1,backgroundPosition: "-2400px",ease:SteppedEase.config(16)});
// method 2 ( img/div tag x position ) :
var M2 = TweenMax.to('.character2',1,{repeat:-1,x:-2250,ease:SteppedEase.config(15)});
// you can use this methods even in GSAP timelines :


// Control functions ( you can add whatever you want ) :

function play(){ M1.play(); M2.play(); };

function pause(){ M1.pause(); M2.pause(); };

function restart(){ M1.restart(); M2.restart(); };

function reverse(){ M1.reverse(); M2.reverse(); };

function once(){ M1.repeat(1); M2.repeat(1); };

function infinity(){ M1.repeat(-1); M2.repeat(-1); };

function timeScale(X){
  TweenLite.to([M1,M2],1,{timeScale:X});
  //M1.timeScale(X); M2.timeScale(X);
};


window.onload=function() {
  // method 1 ( div background position ) :
  var M1 = TweenMax.to('.character',1,{repeat:-1,backgroundPosition: "-2400px",ease:SteppedEase.config(16)});
  // method 2 ( img/div tag x position ) :
  var M2 = TweenMax.to('.character2',1,{repeat:-1,x:-2250,ease:SteppedEase.config(15)});
};
