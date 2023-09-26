const lunch = ["köttbullar1", "köttbullar2", "köttbullar3", "köttbullar4", "köttbullar5", "köttbullar6", "köttbullar7", "köttbullar8", "köttbullar9"];

function setFood() {
    lunch = document.getElementsByTagName("p");
    console.log("lunch"); 
    p[0].innerText = "Lunch 1:" + lunch[0];
}

function getWeek() {
    let vecka = document.querySelector('input').value;
    console.log(vecka);
    let h2; 
        h2 = document.getElementsByTagName("h2");
        h2[0].innerText = "Vecka: " + vecka.substring(6);
        
  }


 
