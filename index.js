
//TO DO
// format all project ->  +
// Refactoring  showTable -> +
// Onload :  register all DOM elements and events  -> +
// index.html  - remove events ->+
// read about destructor https://learn.javascript.ru/destructuring-assignment  - (const { data } = getDataFromFile())
// Compare objects in JS 
// queryselector  bootstrap

import { genData,  sendUpdate, doSomeSteps, getDataFromFile } from './business.js'

let lSideOpen = false
let rSideOpen = false

window.onload = () => {
	//List all elements
	const 
		//Main page controls
		rightSlideBar 		= document.getElementById('rightSidebar'),
		leftSidebar 		= document.getElementById('leftSidebar'),
		lheader 			= document.getElementById('lheader'),
		leftSideBarClsBtn 	= document.getElementById('leftSideBarClsBtn'),
		jsonShow 			= document.getElementById('jsonShow'),
		rightSidebar 		= document.getElementById('rightSidebar'),
		tblArea 			= document.getElementById('tblArea'),
		btn_first 			= document.getElementById('btn_first'),
		btn_second 			= document.getElementById('btn_second'),
		btn_third 			= document.getElementById('btn_third'),
		//Modal window controls
		modalWindow 		= document.getElementById('mw'),
		sCloseModalBtn 		= document.getElementById('sCloseModalBtn'),
		btnGetData 			= document.getElementById('btnGetData'),
		btnRenderData 		= document.getElementById('btnRenderData'),
		btnDoSomeSteps		= document.getElementById('btnDoSomeSteps'),
		btnSendUpdate 		= document.getElementById('btnSendUpdate'),
		btnGenHref 			= document.getElementById('btnGenHref'),
		hrefcontainer 		= document.getElementById('hrefcontainer'),
		secrowjsonShow		= document.getElementById('secrowjsonShow')
	
	window.onkeyup = event => {
		if (event.keyCode == 27) {
			rightSlideBar.style.width = '0'
		}
	}

	leftSideBarClsBtn.onclick = () => {
		leftSidebar.style.width = '0'
  		lSideOpen = false
	}
	btn_first.onclick = () => {
		leftSidebar.style.width = '250px'
  		lSideOpen = true
	}
	btn_second.onclick = () => {
		rightSidebar.style.width = '300px'
  		rSideOpen = true
	}
	btn_third.onclick = () => {
		if(rSideOpen && lSideOpen) {
			getDataFromFile()
			modalWindow.style.display = 'block'
		}
	}
	sCloseModalBtn.onclick = () => modalWindow.style.display = 'none'
	btnGetData.onclick = () => {
		const dataJSON =  getDataFromFile()
		jsonShow.innerHTML = JSON.stringify(dataJSON, undefined, 2)
	}
	btnRenderData.onclick = () => {
		const 
			{ data }	= getDataFromFile(),  // destructor
			testMap 	= data.map(x => `<tr>
											<td>${ x.id }</td>
											<td>${ x.title }</td>
											<td>${ x.time }</td>
											<td>${ x.active }</td>
										</tr>`),
			template 	= document.createElement('template')

		template.innerHTML = 	`<table>
									<thead>
										<tr>
											<td>id</td>
											<td>title</td>
											<td>time</td>
											<td>active</td>
										</tr>
									</thead>
									<tbody>
										${ testMap.join( '' ) }  
									</tbody>
								</table>`
		tblArea.append(template.content.cloneNode(true))
	}

	btnSendUpdate.onclick = () => sendUpdate()

	btnDoSomeSteps.onclick = () => { 
		const jsonString = doSomeSteps()
		secrowjsonShow.innerHTML = JSON.stringify(jsonString, undefined, 2)
	}
	
	btnGenHref.onclick = () => {
		const 
			dataForJSONFile = genData(1010),
			dataRef = 'text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(dataForJSONFile)),
			aref = document.createElement('a')  

		aref.href = 'data:' + dataRef
		aref.download = 'data.json'
		aref.innerHTML = 'JSON'
		hrefcontainer.appendChild(aref)
	}
} // End onload event
//business module
window.genData = genData
window.getDataFromFile = getDataFromFile
window.sendUpdate = sendUpdate
window.doSomeSteps = doSomeSteps