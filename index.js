//import * as bussinesModule from 'bussines.js'
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

// BUSSINES PART

function readJson(){
    let client = new XMLHttpRequest();
    client.open('GET', 'data.json');
    client.onreadystatechange = function() {
    alert(client.responseText);
}
client.send();
}

function readJSONFromFile(callback){
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET','data.json',true);
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {

          // .open will NOT return a value but simply returns undefined in async mode so use a callback
          callback(xobj.responseText);
      }
  }
  xobj.send(null);
}


function getData(){
  readJSONFromFile(function(response) {
      // Do Something with the response e.g.
      let jsonresponse = JSON.parse(response);
      
      // Assuming json data is wrapped in square brackets as Drew suggests
      console.log(jsonresponse[0].name);
      
      }
  );
}

  