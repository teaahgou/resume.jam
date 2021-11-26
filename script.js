function addNewWEField() {
    //console.log("Adding New Field");

 let newNode = document.createElement("textarea");
 newNode.classList.add("form-control","form-control-lg");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 1);
 newNode.setAttribute("placeholder","Enter Here");

 let weOb = document.getElementById("we")
 let weAddButtonOb = document.getElementById("weAddButton")

 weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {
    //console.log("Adding New Field");

 let newNode = document.createElement("textarea");
 newNode.classList.add("form-control","form-control-lg");
 newNode.classList.add("aqField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 1);
 newNode.setAttribute("placeholder","Enter Here");

 let aqOb = document.getElementById("aq")
 let aqAddButtonOb = document.getElementById("aqAddButton")

 aqOb.insertBefore(newNode, aqAddButtonOb);

}

function addNewSKField() {
   //console.log("Adding New Field");

let newNode = document.createElement("textarea");
newNode.classList.add("form-control","form-control-lg");
newNode.classList.add("aqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 1);
newNode.setAttribute("placeholder","Enter Here");

let skOb = document.getElementById("sk")
let skAddButtonOb = document.getElementById("skAddButton")

skOb.insertBefore(newNode, skAddButtonOb);

}

//generating resume
function generateCV() {
    //console.log("generating CV")

 let nameField = document.getElementById("nameField").value;

 let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

 //name
 document.getElementById("nameT1").innerHTML = nameField;

 //contact
 document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
 ).value;

 //email
 document.getElementById("emailT").innerHTML = document.getElementById(
    "emailField"
 ).value;

 //address
 document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
 ).value;

 //links
 document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
 ).value;
 document.getElementById("igT").innerHTML = document.getElementById(
    "igField"
 ).value;
    

 //objective
 document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
 ).value;

 //work experience
 let wes = document.getElementsByClassName("weField");

 let str = "";

 for(let e of wes){
   str = str + `<li> ${e.value} </li>`;
 }

 document.getElementById("weT").innerHTML = str;

 //academic qualifications
 let aqs = document.getElementsByClassName("aqField");

 let str1 = ""; 

 for(let e of aqs)
 {
    str1 += `<li> ${e.value} </li>`;
 }

 document.getElementById("aqT").innerHTML = str1;

 //skills
  //academic qualifications
 let sks = document.getElementsByClassName("skField");

 let str2 = ""; 

 for(let e of sks)
 {
   str2 += `<li> ${e.value} </li>`;
 }

 document.getElementById("skT").innerHTML = str2;

 //uploading image
 let file = document.getElementById("imgField").files[0];

 console.log(file);

 let reader = new FileReader();

 reader.readAsDataURL(file);

 console.log(reader.result);

 //set image to template
 reader.onloadend = function () {
   document.getElementById("imgTemplate").src = reader.result;
 };


 document.getElementById("cv-form").style.display = "none";
 document.getElementById("cv-template").style.display = "block";
}

//print resume
function printCV() {
    window.print();
}