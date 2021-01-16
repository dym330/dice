
var getdice6 = [
  "img/1.gif",
  "img/2.gif",
  "img/3.gif",
  "img/4.gif",
  "img/5.gif",
  "img/6.gif"
];

count = 20;	//　点滅させる回数
mSec = 50;	//　点滅速度（1秒＝1000）


function getDice1(){
    var dice1 = Math.floor(Math.random()*6);
    document.imgdice1.src =  getdice6[dice1];
    count--; //countを１減らしている
        if (count >=1 )  {
           tim = setTimeout("getDice1()",mSec);
           document.getElementById('condice1').innerHTML = "";
          }

        if (count ==0 )  { 
          count = 20 ;
          document.getElementById('condice1').innerHTML = (dice1 + 1);
        } 
}

function getDice2(){
  var dice2 = Math.floor(Math.random()*6);
  var dice3 = Math.floor(Math.random()*6);
  document.imgdice2.src =  getdice6[dice2];
  document.imgdice3.src =  getdice6[dice3];
  count--; //countを１減らしている
      if (count >=1 )  {
         tim = setTimeout("getDice2()",mSec);
         document.getElementById('condice2').innerHTML = "";
        }

      if (count ==0 )  { 
        count = 20 ;
        document.getElementById('condice2').innerHTML = (dice2 + dice3 + 2);
      } 
}