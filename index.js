
import { genData, RESPONSE, getData, renderData, sendUpdate, renderDataToTable } from './business.js'
// document.getElementById('btn_first').onclick = window.ShowLeftPanel Question?


window.onkeyup = event => {
  if (event.keyCode == 27) {
    document.getElementById('rightSidebar').style.width = '0'
  }
}

let lSideOpen = false
let rSideOpen = false

//let el = document.getElementById('rightSidebar')


const openLeftNav = () => {
  document.getElementById('leftSidebar').style.width = '250px'
  lSideOpen = true
}

function closeLeftNav() {
  document.getElementById('leftSidebar').style.width = '0'
  lSideOpen = false
}  

function openRightNav() {
  document.getElementById('rightSidebar').style.width = '300px'
  rSideOpen = true
}
  


function closeRightNav() {
  document.getElementById('rightSidebar').style.width = '0'
  rSideOpen = false
}
function showModalWindow()
{
  if(rSideOpen && lSideOpen) {
    genData(1010)
    let m = document.getElementById('mw')
    m.style.display = 'block'
  }
}

function closeModalWindow(){
  let m = document.getElementById('mw')
   m.style.display = 'none'
}


window.openLeftNav = openLeftNav
window.closeLeftNav = closeLeftNav
window.openRightNav = openRightNav
window.showModalWindow = showModalWindow
window.closeModalWindow = closeModalWindow
window.genData = genData
window.getData = getData
window.renderData = renderData
window.sendUpdate = sendUpdate
window.renderDataToTable = renderDataToTable


// const RESP = {
//   a: function(){
//     alert()
//   },
//   b: () => {

//   },
//   c() { 
//     this === RESP
//     this.a

//   }
// }