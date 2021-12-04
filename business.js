// function readJSONFromFile(callback){
//     let xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET','data.json',true);
//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {

//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
//             callback(xobj.responseText);
//         }
//     }
//     xobj.send(null);
// }


// function getData(){
//     loadJSON(function(response) {
//         // Do Something with the response e.g.
//         let jsonresponse = JSON.parse(response);
        
//         // Assuming json data is wrapped in square brackets as Drew suggests
//         console.log(jsonresponse[0].name);
        
//         }
//     );
// }