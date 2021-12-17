let RESPONSE = {}

const genData = (recCount) => {
    let arr = new Array()
    for(let i = 0; i <= recCount; i++) {
      	const b = i % 2 === 0 
      	let d = new Date()
      	let dStr = 	d.getUTCFullYear() +'/'+ 
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
    return RESPONSE
}

const readJSONFromFile = (callback) => {
	const xobj = new XMLHttpRequest()
	xobj.overrideMimeType("application/json")
	xobj.open('GET','data.json',true)
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(xobj.responseText)
		}
  	}
  	xobj.send(null)
}

const getDataFromFile = () => { 
	readJSONFromFile( (text) => RESPONSE = JSON.parse(text)) 
	return RESPONSE
}

const sendUpdate = () => console.log(RESPONSE.data.filter(a => a.active))


const doSomeSteps = (someData) => {
	someData = RESPONSE.data
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
	const partData = someData.slice(0, 5)
	console.log(partData)
	// Change second row
	partData[1] = changeSecondRow(partData)
	console.log(partData[1])
	return partData[1]
}

const changeSecondRow = (prtData) => {
	for (let prop in prtData[0]) {
		if (prop != 'id') {
			prtData[1][prop] = prtData[0][prop]
		}
	}
	return prtData[1]
}
   
export {  genData,  sendUpdate,  doSomeSteps, getDataFromFile }