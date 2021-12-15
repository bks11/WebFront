let RESPONSE = new Object()

// to do {}  Array methods!!! reduce map 
// All dom  action move to index.js
// Change function  to => ,  remove  
// Add method to load data from file
// Read about back qoutes 


const genData = (recCount) => {
  let arr = new Array()
  for(let i = 0; i <= recCount; i++) {
    const b = i % 2 === 0 
    let d = new Date()
    let dStr = d.getUTCFullYear() +'/'+ 
                (d.getUTCMonth()+1) +'/'+ 
                 d.getUTCDate() + ' ' + 
                 d.getHours() + ':' + 
                 d.getUTCMinutes() + ':' + 
                 d.getUTCSeconds()
    let itm = {
            id : i,
            title : 'Titel' + i,
            time : dStr,
            active : b
    }
    arr[i] = itm   
	}
  RESPONSE.data = arr
  return arr
}

const getDataFromFile = () => {
  RESPONSE.data = readJSONFromFile( (text) => {
    let data = JSON.parse(text)
    return data
  })
  console.log(RESPONSE.data)
  return RESPONSE
  
}
// move work with DOM elements to index.js 
// only data calculation

const sendUpdate = () => {
  const activeRecords = RESPONSE.data.filter(a => a.active)
  console.log(activeRecords)
}

const doSomeSteps = (someData) => {
  someData = RESPONSE.data
	console.log(someData[0])
	console.log(someData.length)
	//Add last row copy to the end of array
	const lastRow = someData.at(-1) // get last row value
	console.log(lastRow) //Show last row value
  console.log(`Array length before push ${someData.length}`)
	const newLength = someData.push(lastRow) //Add to end of array  new element
  console.log(`New length someData array ${newLength}`)
	
	//Clone object someData someDataClone
	const someDateClone = JSON.parse(JSON.stringify(someData))
	//Change title for the first row
	someData[0].title = 'Title01'
  console.log(`Clone some data ${someDateClone[0].title}`)
  console.log(`Some data ${someData[0].title}`)

	//Add range from 0  to 5  -   slice splice  clone type ?  Мутирующие операции в методах массива
	let partData = someData.slice(0, 5)
  console.log(partData)
  let testMap = partData.map( (x) => {return `<tr><td>${x.id}</td><td>${x.title}</td><td>${x.time}</td><td>${x.active}</td></tr>`})
  console.log(testMap)
}
    
const readJSONFromFile = (callback) => {
  let xobj = new XMLHttpRequest()
  xobj.overrideMimeType("application/json")
  xobj.open('GET','/data.json',true)
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {

          // .open will NOT return a value but simply returns undefined in async mode so use a callback
          callback(xobj.responseText)
      }
  }
  xobj.send(null)
}

// readJSONFromFile(function(text){
//   let data = JSON.parse(text);
//   document.getElementById("jsonShow").innerHTML = JSON.stringify(data, undefined, 2);
// })

//Back quotes
//const template = document.createElement('template')
//const newrow = template.content.cloneNode(true)


// const table = `<table>
//   <thead>
// 		<tr>
// 				<td>id</td>
// 				<td>title</td>
// 				<td>time</td>
// 				<td>active</td>
// 		</tr>
// </thead>
// <tbody>
// 		${}  // reduce map
// </tbody>
// </table>`

// template.innerHTML = table
// container.append(template.content.cloneNode(true))


export {  genData,  sendUpdate,  doSomeSteps, getDataFromFile }

// function readJSONFromFile(callback){
//     let xobj = new XMLHttpRequest()
//     xobj.overrideMimeType('application/json')
//     xobj.open('GET','data.json',true)
//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == '200') {

//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
// //             callback(xobj.responseText)
// //         }
// //     }
// //     xobj.send(null)
// // }


// // function getData(){
// //     loadJSON(function(response) {
// //         // Do Something with the response e.g.
// //         let jsonresponse = JSON.parse(response)
        
// //         // Assuming json data is wrapped in square brackets as Drew suggests
// //         console.log(jsonresponse[0].name)
        
// //         }
// //     )
// // }

// function genereateObjects(){
//     let arr = new Array()
//     let b = i % 2 === 0 ? true : false

//     for(i = 0 i <=1000 i++){
//         let data = {
//             id = i,
//             title = 'Titel' + i,
//             time = new Date,
//             active =b
//         }
//         arr[i] = data
//     }
//     return arr
// }

// function generateJson(){
//     let arr = genereateObjects()
//     let jsonString = JSON.stringify(arr)
// }

// let data = {
//     id = 0,
//     title = 'Title3',
//     time = new Date().toUTCString,
//     active = true
// }
