function readJSONFromFile(callback){
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET','data.json',true);
}
export function getData(){

}