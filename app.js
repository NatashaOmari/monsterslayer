//function attack () {
 //   let x = Math.floor((Math.random() * 4+8));
 //   document.getElementById("controls").innerHTML = x;
 //   return attack();
//}
//function attack () {
 //   let Monster = Math.floor((Math.random()*4+8));
  //  let Me = Math.floor((Math.random()*3+12));
  //  return [Monster,Me];
//}
//alert(attack());


let statusBar1 = document.getElementById("myhealthbar__value");
let statusBar2 = document.getElementById("monsterhealthbar__value");
let clickCount = 0;

function updateStatusBars() {
  let randomNumber1 = Math.random() * 4 + 8;
  let randomNumber2 = Math.random() * 3 + 12;

  let currentWidth1 = statusBar1.offsetWidth;
  let currentWidth2 = statusBar2.offsetWidth;

  statusBar1.style.width = currentWidth1 - randomNumber1 + "px";
  statusBar2.style.width = currentWidth2 - randomNumber2 + "px";
  clickCount++;

  if (clickCount === 3) {
    let randomNumber3 = Math.random() * 5 + 20;
    statusBar1.style.width = currentWidth1 - randomNumber3 + "px";
    clickCount = 0;
  }
}

updateStatusBars();

function specialattack() {
    let randomNumber3 = Math.random() * 5 + 20;
    let currentWidth1 = statusBar1.offsetWidth;
    statusBar1.style.width = currentWidth1 - randomNumber3 + "px";
  };
  specialattack();

 
