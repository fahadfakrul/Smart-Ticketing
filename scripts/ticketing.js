const allbtn = document.getElementsByClassName("add-btn");
const everybtn = document.getElementsByClassName("add-btn");
let count = 0;
let seatLeft = 40;
for (const btn of allbtn) {
  btn.addEventListener("click", function (event) {
    count = count + 1;
    seatLeft = seatLeft - 1;
    event.target.classList.add("bg-primary-color", "text-white", "selected");
    setInnerText("selected-seat-count", count);
    setInnerText("seats-left", seatLeft);
    const seatType = "Economy";
    const fare = document.getElementById("fare").innerText;
    const seat = event.target.innerText;
    console.log(fare);
   
    const selectedContainer = document.getElementById("selected-seat-container");
    const li = document.createElement("li");
    const p1= document.createElement("p");
    p1.innerText=seat;
    const p2= document.createElement("p");
    p2.innerText= seatType;
    const p3= document.createElement("p");
    p3.innerText=fare;

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    
    selectedContainer.appendChild(li);


    for (const btn of everybtn) {
      if (count > 3) {
        if (!btn.classList.contains("selected")) {
          btn.classList.add("disabled");
          btn.disabled = true;
        } else {
          btn.classList.remove("disabled");
          btn.disabled = false;
        }
      }
    }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
  console.log(document.getElementById.innerText);
}

function handleBtn() {}
