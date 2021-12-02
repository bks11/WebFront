const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let lSideOpen = false;
let rSideOpen = false;

let el = document.getElementById("rightSidebar");
window.onkeyup = function(event){
  if (event.keyCode == 27){
    document.getElementById("rightSidebar").style.width = "0";
  }
}

function ShowLeftPanel(){
    alert("Left panel");
}
function openLeftNav() {
    document.getElementById("leftSidebar").style.width = "250px";
    lSideOpen = true;
  }

  function openRightNav() {
    document.getElementById("rightSidebar").style.width = "250px";
    rSideOpen = true;
  }
  
function closeLeftNav() {
    document.getElementById("leftSidebar").style.width = "0";
    lSideOpen = false;
  }

function closeRightNav() {
    document.getElementById("rightSidebar").style.width = "0";
    rSideOpen = false;
  }
function showModalWindow()
{
    if(rSideOpen && lSideOpen){
        let m = document.getElementById("mw");
        m.style.display = "block";
    }
}

function closeModalWindow(){
    let m = document.getElementById("mw");
    m.style.display = "none";
}

let modal = document.getElementById("mw");
// let btn = document.getElementById("btn_third");
let spanCloseBtn = document.getElementById("sCloseModalBtn");

// btn.onclick = function() {
//     modal.style.display = "block";
//   }

// spanCloseBtn.onclick = function(){
//     modal.style.display = "none"
// }



  