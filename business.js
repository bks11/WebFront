let RESPONSE = new Object();

function genData(recCount){
    let arr = new Array();
    for(let i = 0; i <= recCount; i++){
        const b = i % 2 === 0 
        let d = new Date();
        let dStr = d.getUTCFullYear() +"/"+ 
                    (d.getUTCMonth()+1) +"/"+ 
                    d.getUTCDate() + " " + 
                    d.getHours() + ":" + 
                    d.getUTCMinutes() + ":" + 
                    d.getUTCSeconds();
        let itm = {
            id : i,
            title : "Titel" + i,
            time : dStr,
            active : b
        }
      arr[i] = itm;   
    }
    RESPONSE.data = arr;
    return arr;
}

function wrapToJSON(){
  // let dataVal = genData(7);
  // let dataObj = {
  //     data : dataVal
  // };  
  //let jsonString = JSON.stringify(RESPONSE);
  //debug
  //console.log(jsonString);
  //console.log(dataVal[5].active);
 // console.log(dataVal[4].active);
  // end debug
  let dataRef = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(RESPONSE));
  let aref = document.createElement('a');  // const
  aref.href = 'data:' + dataRef;
  aref.download = 'data.json';
  aref.innerHTML = 'download JSON';

  let container = document.getElementById('hrefcontainer');
  container.appendChild(aref);
}

function getData(){
  // let dataVal = genData(1005);
  // let dataObj = {
  //     data : dataVal
  // };
  document.getElementById("jsonShow").innerHTML = JSON.stringify(RESPONSE, undefined, 2);
}
const renderDataToTable = () => {
    const tblData = RESPONSE.data;
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
function renderData(){
  //   let da = genData(1100);
  //   let dataObj = {
  //   data : da
  // };
    let tblCont = document.getElementById("tblArea");
    let tblData = RESPONSE.data;
    //let ii = tblData.length;
    //console.log(ii);

    //read about  Template  
    //document.createElement('template')
        
    //Create table
    let tbl = document.createElement('table');

    let tblHeaderRow = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.appendChild(document.createTextNode("id"));
    let titleHeader = document.createElement('th');
    titleHeader.appendChild(document.createTextNode("title"));
    let timeHeader = document.createElement('th');
    timeHeader.appendChild(document.createTextNode("time"));
    let activeHeader = document.createElement('th');
    activeHeader.appendChild(document.createTextNode("active"));

    tblHeaderRow.appendChild(idHeader);
    tblHeaderRow.appendChild(titleHeader);
    tblHeaderRow.appendChild(timeHeader);
    tblHeaderRow.appendChild(activeHeader);
    tbl.appendChild(tblHeaderRow);
  
    for(let i = 0; i < tblData.length; i++) {
        let tblRow = document.createElement('tr');  

        let idData = tblData[i].id;
        let titleData = tblData[i].title;
        let timeData = tblData[i].time;
        let activeData = tblData[i].active;
        
        let idCell = document.createElement('td');
        let titleCell = document.createElement('td');
        let timeCell  = document.createElement('td');
        let activeCell = document.createElement('td');

        idCell.appendChild(document.createTextNode(idData));
        titleCell.appendChild(document.createTextNode(titleData));
        timeCell.appendChild(document.createTextNode(timeData));
        activeCell.appendChild(document.createTextNode(activeData));

        tblRow.appendChild(idCell);
        tblRow.appendChild(titleCell);
        tblRow.appendChild(timeCell);
        tblRow.appendChild(activeCell);

        tbl.appendChild(tblRow);
    }
    tblCont.appendChild(tbl);
}

function sendUpdate(){
    let activeRecords = RESPONSE.data.filter(a => a.active);
    console.log(activeRecords);
}

function doSomeSteps(){
    showAlert(someData);
}

export { RESPONSE, getData, genData, renderData, sendUpdate, renderDataToTable };

// function readJSONFromFile(callback){
//     let xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET','data.json',true);
//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {

//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
// //             callback(xobj.responseText);
// //         }
// //     }
// //     xobj.send(null);
// // }


// // function getData(){
// //     loadJSON(function(response) {
// //         // Do Something with the response e.g.
// //         let jsonresponse = JSON.parse(response);
        
// //         // Assuming json data is wrapped in square brackets as Drew suggests
// //         console.log(jsonresponse[0].name);
        
// //         }
// //     );
// // }

// function genereateObjects(){
//     let arr = new Array();
//     let b = i % 2 === 0 ? true : false;

//     for(i = 0; i <=1000; i++){
//         let data = {
//             id = i,
//             title = "Titel" + i,
//             time = new Date,
//             active =b
//         }
//         arr[i] = data;
//     }
//     return arr;
// }

// function generateJson(){
//     let arr = genereateObjects();
//     let jsonString = JSON.stringify(arr);
// }

// let data = {
//     id = 0,
//     title = "Title3",
//     time = new Date().toUTCString,
//     active = true
// }
