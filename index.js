
//TO DO
// format all project ->  +
// Refactoring  showTable -> +
// Onload :  register all DOM elements and events  -> +
// index.html  - remove events ->+
// read about destructor https://learn.javascript.ru/destructuring-assignment  - (const { data } = getDataFromFile())
// Compare objects in JS 
// queryselector  bootstrap


// use bootstrap for modal window
// Read about apply, bind, call
// sCloseModalBtn.addEventListener('click', a)
// sCloseModalBtn.removeEventListener('click', a)

import { genData,  sendUpdate, doSomeSteps, getDataFromFile } from './business.js'


window.onload = () => {
	let lSideOpen = false
	let rSideOpen = false
	//List all elements
	const 
		//Main page controls
		rightSlideBar 		= document.querySelector('#rightSidebar'),
		leftSidebar 		= document.querySelector('#leftSidebar'),
		lheader 			= document.querySelector('#lheader'),
		leftSideBarClsBtn 	= document.querySelector('#leftSideBarClsBtn'),
		jsonShow 			= document.querySelector('#jsonShow'),
		rightSidebar 		= document.querySelector('#rightSidebar'),
		tblArea 			= document.querySelector('#tblArea'),
		btn_first 			= document.querySelector('#btn_first'),
		btn_second 			= document.querySelector('#btn_second'),
		btn_third 			= document.querySelector('#btn_third'),
		//Modal window controls
		modalWindow 		= document.querySelector('#mw'),
		sCloseModalBtn 		= document.querySelector('#sCloseModalBtn'),
		btnGetData 			= document.querySelector('#btnGetData'),
		btnRenderData 		= document.querySelector('#btnRenderData'),
		btnDoSomeSteps		= document.querySelector('#btnDoSomeSteps'),
		btnSendUpdate 		= document.querySelector('#btnSendUpdate'),
		btnGenHref 			= document.querySelector('#btnGenHref'),
		hrefcontainer 		= document.querySelector('#hrefcontainer'),
		secrowjsonShow		= document.querySelector('#secrowjsonShow')
	
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

	
	// sCloseModalBtn.onclick = () => modalWindow.style.display = 'none'
	// const onCloseModalClick = (param) => () => modalWindow.style.display = 'none'
	// const a = onCloseModalClick('ddd')
	// sCloseModalBtn.addEventListener('click', a)
	// sCloseModalBtn.removeEventListener('click', a)

	const addToEvent = function()  {
		//debugger
		const context = this
		modalWindow.style.display = 'none'
	}
	//debugger
	//addToEvent()
	const o = {
		a: 1,
		b: 2
	}

	// Read about apply, bind, call
	const addContext = addToEvent.bind(o)
	sCloseModalBtn.addEventListener('click', addContext)
	

	btnGetData.addEventListener('click', () =>{
		const dataJSON = getDataFromFile()
		jsonShow.innerHTML = JSON.stringify(dataJSON, undefined, 2)
	})
	// btnGetData.onclick = () => {
	// 	const dataJSON =  getDataFromFile()
	// 	jsonShow.innerHTML = JSON.stringify(dataJSON, undefined, 2)
	// }
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