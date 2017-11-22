//Variables
var code;
var JSONObj;
var arrayList = [];
var table = document.getElementById("lista");
var sum = 0;
//////////////////////////////////////////////////////
//Adding Product to the list/Table
function addList(){
    code = document.getElementById("code").value;
    console.log("El codigo ingresado es " + code);
    comparing();
}
//////////////////////////////////////////////////////
//Loading JSON data
function loadDocument(){
    console.log("App started")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("JSON loaded");//JSON file was succesfully loaded in the Web Browser
            var response = xhttp.responseText;//Save the JSOn request to variable
            JSONObj = JSON.parse(response);//Parsed the JSON data to JavaScript object in order to manipulate it
            console.log(JSONObj);//This is to probe the JSON was successfully parsed
        }
    };
    xhttp.open("GET","data.json",true);
    xhttp.send();
}
//////////////////////////////////////////////////////
//Comparing code vs JSOn Object
function comparing(){
    for (var i = 0; i < JSONObj.length; i++) {
        if (code === JSONObj[i].codigo) {
            console.log(JSONObj[i]);
            totalPrice(JSONObj[i]),
            arrayList.push("<tr><td>" + JSONObj[i].codigo + "</td>" + "<td>" + JSONObj[i].producto + "</td>"
            + "<td>" + JSONObj[i].precio + "</td>" + "<td>" + JSONObj[i].impuesto + "</td>" + "<td>" + total + "</td>");
            insertContent();
        }
    }
}
//////////////////////////////////////////////////////
//Inserting values to the table
function insertContent(){
    table.innerHTML = arrayList;
}
//////////////////////////////////////////////////////
//Multipliying taxes
function totalPrice(a){
    total = ((a.precio * a.impuesto)/100) + a.precio;
    sum = Number(sum) + Number(total);
    return total;
}
//////////////////////////////////////////////////////
//Pay
function pay(){
    var a = document.getElementById("total");
    a.innerHTML = sum;
}