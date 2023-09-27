let Json = [
    {"datum": "25 sep", "namn":"Köttbullar"},
    {"datum": "26 sep", "namn":"Paprika"},
    {"datum": "27 sep", "namn":"Köttbullar2"},
    {"datum": "28 sep", "namn":"Paprika2"},
    {"datum": "30 sep", "namn":"Kött"}
];
let div;
let weekNumber;
let weekDay = ["Mondag" , "Tisdag", "Onsdag", "Torsdag", "Fredag"]
let lunch = ["mat1", "mat2", "mat3", "mat4", "mat5", "mat6", "mat7", "mat8", "mat9"]
let week;

function init(){
    div = document.getElementsByClassName('wrapper');
    week = document.querySelector('input');
    week.addEventListener("input" , event =>{
        getWeek();
  })
    let currentDate = new Date();

    let startDate = new Date(currentDate.getFullYear(),0,1);

    let days = Math.floor((currentDate-startDate)/(24*60*60*1000));

    weekNumber = Math.ceil(days/7);

    console.log(weekNumber);

    weeks();
    let dayIndex = 0;
    let dishesIndex = 0;
    Json.forEach(element=>{
        if((dishesIndex === 0) || (element.datum !== Json[dishesIndex-1].datum)){
           
            addDay(element,dayIndex);
            dayIndex++;
        }else{
            //Skapa en ny parargraf i section
            addP(element,dayIndex-1);
        }
        dishesIndex++;
    })
    //addDay();
    
    //addFood();
}
window.onload = init;

function weeks(){
let h2;
    h2 = document.getElementsByTagName("h2");
    console.log(h2);
    h2[0].innerText = "Vecka. " + weekNumber ;
}

function getWeek() {
    week = document.querySelector('input').value;
    console.log(week);
    let h2; 
        h2 = document.getElementsByTagName("h2");
        h2[0].innerText = "Vecka: " + week.substring(6);        
}

function addDay(el,index) {
    let section = document.createElement("section");
    section.id = "day"+index;
    addWeekDay(section, index);
    let p = document.createElement("p");
    p.innerHTML = el.namn;
    section.appendChild(p);
    div[0].appendChild(section);
    /*for (i = 0; i < 5; i++) {
        section.innerHTML = weekDay[i];
        h3.innerHTML = weekDay[i];
        div[0].append(h3);
    }*/
    
}

function addWeekDay(se,index){
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    h3.innerHTML=weekDay[index];
    section.appendChild(h3);
    se.appendChild(section);
}

function addFood() {
    var div = document.getElementsByClassName('wrapper');
    p = document.createElement("p"); 
    for (i = 0;i < 5; i++) {
        p.innerText = lunch[i];
        div[0].append(p);
    }
}

function addP(el,index){
    let section = document.getElementById("day"+index);
    let p = document.createElement("p");
    p.innerHTML = el.namn;
    section.appendChild(p);
    //div[0].appendChild(section);
}
 
