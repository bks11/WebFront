
import { genData,  sendUpdate, doSomeSteps } from './business.js'
// document.getElementById('btn_first').onclick = window.ShowLeftPanel Question?

window.onkeyup = event => {
  if (event.keyCode == 27) {
    document.getElementById('rightSidebar').style.width = '0'
  }
}

let lSideOpen = false
let rSideOpen = false

const openLeftNav = () => {
  document.getElementById('leftSidebar').style.width = '250px'
  lSideOpen = true
}

const closeLeftNav = () => {
  document.getElementById('leftSidebar').style.width = '0'
  lSideOpen = false
}  

const openRightNav = () => {
  document.getElementById('rightSidebar').style.width = '300px'
  rSideOpen = true
}
  


const closeRightNav = () => {
  document.getElementById('rightSidebar').style.width = '0'
  rSideOpen = false
}
const showModalWindow = () => {
  if(rSideOpen && lSideOpen) {
    genData(1010)
    const m = document.getElementById('mw')
    m.style.display = 'block'
  }
}

const closeModalWindow = () => {
  const m = document.getElementById('mw')
  m.style.display = 'none'
}

const wrapToJSON = () => {
  let dataForJSONFile = new Object()
  dataForJSONFile.data = genData(1010)
  let dataRef = 'text/jsoncharset=utf-8,' + encodeURIComponent(JSON.stringify(dataForJSONFile))
  const aref = document.createElement('a')  // const
  aref.href = 'data:' + dataRef
  aref.download = 'data.json'
  aref.innerHTML = 'download JSON'

  const container = document.getElementById('hrefcontainer')
  container.appendChild(aref)
}

const getData = () => {
  let dataJSON = new Object()
  dataJSON.data = genData(1010)
  document.getElementById('jsonShow').innerHTML = JSON.stringify(dataJSON, undefined, 2)
}


const renderDataToTable = () => {
  let dataJSON = new Object()
  dataJSON.data = genData(1010)
  const tblData = dataJSON.data
  if('content' in document.createElement('template')) {
  	const tbody = document.querySelector('tbody')
    const template = document.querySelector('#recordrow')

    for(let i = 0; i < tblData.length; i++) {
      const newrow = template.content.cloneNode(true)
      const td = newrow.querySelectorAll('td')
      td[0].textContent = tblData[i].id
      td[1].textContent = tblData[i].title
      td[2].textContent = tblData[i].time
      td[3].textContent = tblData[i].active

      tbody.appendChild(newrow)
    }
    } else {
        alert('Broser not supports template')
    }
}

window.openLeftNav = openLeftNav
window.closeLeftNav = closeLeftNav
window.openRightNav = openRightNav
window.showModalWindow = showModalWindow
window.closeModalWindow = closeModalWindow
window.wrapToJSON = wrapToJSON
window.getData = getData
window.renderDataToTable = renderDataToTable

//business module
window.genData = genData
//window.renderData = renderData
window.sendUpdate = sendUpdate
window.doSomeSteps = doSomeSteps

const RESP = {
  a: function(){
    alert()
  },
  b: () => {

  },
  c() { 
    this === RESP
    this.a

  }
}



// const renderData = () => {
//   const tblCont = document.getElementById('tblArea')
//   let tblData = RESPONSE.data
//     //Create table
//   const tbl = document.createElement('table')
//   const tblHeaderRow = document.createElement('tr')
//   const idHeader = document.createElement('th')
//   idHeader.appendChild(document.createTextNode('id'))
//   const titleHeader = document.createElement('th')
//   titleHeader.appendChild(document.createTextNode('title'))
//   const timeHeader = document.createElement('th')
//   timeHeader.appendChild(document.createTextNode('time'))
//   const activeHeader = document.createElement('th')
//   activeHeader.appendChild(document.createTextNode('active'))

//   tblHeaderRow.appendChild(idHeader)
//   tblHeaderRow.appendChild(titleHeader)
//   tblHeaderRow.appendChild(timeHeader)
//   tblHeaderRow.appendChild(activeHeader)
//   tbl.appendChild(tblHeaderRow)
  
//   for(let i = 0; i < tblData.length; i++) {
//     let tblRow = document.createElement('tr')  

//     let idData = tblData[i].id
//     let titleData = tblData[i].title
//     let timeData = tblData[i].time
//     let activeData = tblData[i].active
        
//     const idCell = document.createElement('td')
//     const titleCell = document.createElement('td')
//     const timeCell  = document.createElement('td')
//     const activeCell = document.createElement('td')

//     idCell.appendChild(document.createTextNode(idData))
//     titleCell.appendChild(document.createTextNode(titleData))
//     timeCell.appendChild(document.createTextNode(timeData))
//     activeCell.appendChild(document.createTextNode(activeData))

//     tblRow.appendChild(idCell)
//     tblRow.appendChild(titleCell)
//     tblRow.appendChild(timeCell)
//     tblRow.appendChild(activeCell)

//     tbl.appendChild(tblRow)
//   }
//   tblCont.appendChild(tbl)
// }
// const ff = () => {
//   let a = getData()
// }