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
    // console.log(fare);
   
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
    
     totalCost(fare);
     grandTotalCost();

     
//      console.log(coupon1);
//     const couponConfirm = document.getElementById("coupon-confirm");
//     document.getElementById("coupon-holder").addEventListener("keyup",function(event){
//     const text =event.target.value;
//     setInnerText("grand-total",grandtotalcost);
//      if(text === coupon1){
//    const discount = totalCost* 0.15;
//    const grandtotalcost = totalCost - discount;
//    setInnerText("grand-total",grandtotalcost);
//    }else if(text === coupon2){
//     const discount = totalCost* 0.20;
//     const grandtotalcost = totalCost - discount;
    
    for (const btn of everybtn) {
      if (count > 3) {
        if (!btn.classList.contains("selected") ) {
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

function totalCost( value){
    const totalCost = parseInt( document.getElementById("total-cost").innerText);
    const sum =totalCost + parseInt(value);
    setInnerText("total-cost",sum);
}
function grandTotalCost(){
    const totalCost = parseInt( document.getElementById("total-cost").innerText);
    const coupon1 = document.getElementById("coupon1").innerText;
      const coupon2 = document.getElementById("coupon2").innerText;
      const couponConfirm = document.getElementById("coupon-confirm");
      setInnerText("grand-total",totalCost);

     document.getElementById("coupon-holder").addEventListener("keyup",function(event){
        const text =event.target.value;
        if(text === coupon1 ){
            couponConfirm.removeAttribute('disabled');
            
            couponConfirm.addEventListener("click",function(){
                const grandTotal= discount(15);
                setInnerText("grand-total",grandTotal);
            })
            
        }else if( text === coupon2){
            couponConfirm.removeAttribute('disabled');
            couponConfirm.addEventListener("click",function(){
                const grandTotal= discount(20);
                setInnerText("grand-total",grandTotal);
            })
        }
        else{
            couponConfirm.setAttribute('disabled',true);
        }
     })
   
    


}
  function nextpage(){
       
        hideElementById("navbar");
        hideElementById("home-screen");
        showElementById("confirm");
      }

function discount(num){
    const totalCost = parseInt( document.getElementById("total-cost").innerText);
    const amount = parseFloat(num);
    perDiscount = amount/100;
    totalDiscount=perDiscount *totalCost;
    grandTotal = totalCost - totalDiscount;
    return grandTotal;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-primary-color text-white');
    
}
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}