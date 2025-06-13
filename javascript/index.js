// accessing my form that consits of three inputs.
const form=document.getElementById("form")

// adding an event listener -on submit
form.addEventListener("submit",function(e){

    // to prevent reloading of my page once submitted
    e.preventDefault();

 // access my label inputs   
const firstname=document.getElementById("fname").value;
const lastname=document.getElementById("lname").value;  
const radios=document.querySelector('input[name="radio"]:checked');

// getting access to the display section.
const attendies=document.getElementById("attendies");

//creating an unorderd list for appending my list of guests
const orderdlist=document.createElement("ul");
attendies.appendChild(orderdlist);

// creating a list of guests
const listItems=document.createElement("li");
orderdlist.appendChild(listItems);

//minimizing my lists of guest to 10 people maximum
if(orderdlist.children.length>=10){
    alert("maximum guest list achieved");
}


 // initializing my list to the values of the inputs.   
listItems.innerHTML=`${firstname}-${lastname}-${radios.value}`;

});