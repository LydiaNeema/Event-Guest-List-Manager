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
let orderdlist=attendies.querySelector("ul");// checks of any existing ul
if(!orderdlist){
 orderdlist=document.createElement("ul");
attendies.appendChild(orderdlist);
}

// creating a list of guests
const listItems=document.createElement("li");
orderdlist.appendChild(listItems);

// initializing my list to the values of the inputs.   
listItems.innerHTML=`${firstname}  ${lastname} : -${radios.value}   `;
listItems.style.padding="5px";
listItems.style.fontSize="1rem";
listItems.style.color="red";



//minimizing my lists of guest to 10 people maximum
if(orderdlist.children.length >10 ){
    alert("maximum guest list achieved");
    return;
}
// add an edit/remove and rsvp button in my list

const remove=document.createElement("button");
const rsvp=document.createElement("button");


remove.innerHTML="Remove";
rsvp.innerHTML="Rsvp";


listItems.appendChild(remove);
listItems.appendChild(rsvp);

// created ids and style for my buttons

remove.id="remove";
rsvp.id="rsvp";

remove.style.backgroundColor="blue";
remove.style.color="white";
remove.style.width="80px";
remove.style.height="32px";
remove.style.marginLeft="10px";
remove.style.marginRight="10px";
remove.style.border="2px";



rsvp.style.backgroundColor="blue";
rsvp.style.color="white";
rsvp.style.width="80px";
rsvp.style.height="32px";
rsvp.style.marginLeft="10px";
rsvp.style.marginRight="10px";
rsvp.style.border="2px";




remove.addEventListener("click",function(e){
    listItems.remove(listItems);
})

rsvp.addEventListener("click",function(e){
 alert("confirmed attendance");
})





});