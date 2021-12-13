// import { RESPONSE } from './business.js';
import { openLeftNav, closeLeftNav, openRightNav, showModalWindow, closeModalWindow} from './main.js';
import { genData, RESPONSE } from './business.js';
// document.getElementById("btn_first").onclick = window.ShowLeftPanel;
//window.ShowLeftPanel = main.ShowLeftPanel;

window.onkeyup = function(event){
  if (event.keyCode == 27){
    document.getElementById("rightSidebar").style.width = "0";
  }
}

let RESP = RESPONSE;
window.openLeftNav = openLeftNav;
window.closeLeftNav = closeLeftNav;
window.openRightNav = openRightNav;
window.showModalWindow = showModalWindow;
window.closeModalWindow = closeModalWindow;
window.genData = genData;