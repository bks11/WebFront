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
