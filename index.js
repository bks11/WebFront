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



// let modal = document.getElementById("mw");
// let spanCloseBtn = document.getElementById("sCloseModalBtn");


// BUSSINES PART


function genData(recCount){
    let arr = new Array();
    for(i = 0; i <= recCount; i++){
        b = i % 2 === 0 ? true : false
        let itm = {
            id : i,
            title : "Titel" + i,
            time : new Date,
            active : b
        }
      arr[i] = itm;   
    }
    
    return arr;
}

function wrapToJSON(){
  let dataVal = genData(7);
  let dataObj = {
      data : dataVal
  };  
  let jsonString = JSON.stringify(dataObj);
  //debug
  console.log(jsonString);
  console.log(dataVal[5].active);
  console.log(dataVal[4].active);
  // end debug
  let dataRef = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObj));
  let aref = document.createElement('a');
  aref.href = 'data:' + dataRef;
  aref.download = 'data.json';
  aref.innerHTML = 'download JSON';

  let container = document.getElementById('hrefcontainer');
  container.appendChild(aref);
}

function showFormatedJSON(){
  let dataVal = genData(10);
  let dataObj = {
      data : dataVal
  };
  document.getElementById("jsonShow").innerHTML = JSON.stringify(dataObj, undefined, 2);
}

// function readJson(){
//     let client = new XMLHttpRequest();
//     client.open('GET', 'data.json');
//     client.onreadystatechange = function() {
//     alert(client.responseText);
//     }
// client.send();
// }

// function readJSONFromFile(callback){
//   let xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open('GET','data.json',true);
//   xobj.onreadystatechange = function () {
//       if (xobj.readyState == 4 && xobj.status == "200") {

//           // .open will NOT return a value but simply returns undefined in async mode so use a callback
//           callback(xobj.responseText);
//       }
//   }
//   xobj.send(null);
// }


  