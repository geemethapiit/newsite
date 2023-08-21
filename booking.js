// Description: JavaScript file for Tickets
//----------------------guest form------------------------------------//

const openform = document.getElementById("openform");
const myform = document.getElementById("myform");

openform.addEventListener("click", function(event){
    event.stopPropagation();
    myform.style.display = "block";
});
document.addEventListener("click", function(event){
    const clickedinsideform =myform.contains(event.target);
    if(!clickedinsideform){
        myform.style.display = "none";
    }
});
myform.addEventListener("click", function(event){
    event.stopPropagation();
})



//--------------------block to go details page if didnt give the inputs--------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const continuebtn = document.getElementById("continuebtn");

    continuebtn.addEventListener('click', function(event){
        calendarInput = document.getElementById('calendar').value;
        guestInput = document.getElementById('openform').value;
        const selectedOptions = Array.from(slotinput.selectedOptions);
        const totalCount = localStorage.getItem('totalCount');

         if(! calendarInput || ! guestInput){
            alert('Please fill in all fields');
            event.preventDefault();
         }else if (!totalCount){
            alert('Please select a ticket');
            event.preventDefault();
         }else if(selectedOptions.length == 0){
            alert('Please select a time slot');
            event.preventDefault();
         }else{
            window.location.href = "detailsnew.html";
        }  
    }); 
});

//-----------------------timeslot ----------------------------------//
const opentimeslot = document.getElementById("opentimeslot");
const timeslot = document.getElementById("slotinput");

opentimeslot.addEventListener("click", function(event){
    event.stopPropagation();
    timeslot.style.display = "block";
});
document.addEventListener("click", function(event){
    const clickedinsideform = timeslot.contains(event.target);
    if(!clickedinsideform){
        timeslot.style.display = "none";
    }
});
timeslot.addEventListener("click", function(event){
    event.stopPropagation();
})

//----------------------------okay open----------------------------------------//

const opentpkay = document.getElementById("opentimeslot");
const timeokay = document.getElementById("okay");

opentimeslot.addEventListener("click", function(event){
    event.stopPropagation();
    okay.style.display = "block";
});
document.addEventListener("click", function(event){
    const clickedinsideform = okay.contains(event.target);
    if(!clickedinsideform){
    okay.style.display = "none";
    }
});
okay.addEventListener("click", function(event){
    event.stopPropagation();
})

//---------------time - duration input to summary------------------//

document.addEventListener('DOMContentLoaded', function () {
const slotinput = document.getElementById("slotinput");

const okay = document.getElementById("okay");
const selectedHours = document.getElementById("selectedHours");


const savedNormalCount = localStorage.getItem('normalCount');
const savedPeakCount = localStorage.getItem('peakCount');
const savedHoursCount = localStorage.getItem('hoursCount');
const lastTime = localStorage.getItem('lastTime');
if(savedHoursCount && savedNormalCount && savedPeakCount){
    selectedHours.textContent = `${savedHoursCount} Hours ${savedNormalCount} Normal ${savedPeakCount} Peak`;
}
if(lastTime){
    selectedTime.textContent = lastTime;
}

okay.addEventListener('click', function () {
    const selectedOptions = Array.from(slotinput.selectedOptions);

    if(selectedOptions.length > 3){
        alert('You can only select 3 time slots');
        return;
    }
    let selectedValues = selectedOptions.map(Option => Option.textContent);
    //selectedTime.textContent = selectedValues.join(', ');

    localStorage.setItem('selectedValues', selectedValues.join(', '));

    const normalCount = selectedOptions.filter(Option => Option.value === 'normal').length;
    const peakCount = selectedOptions.filter(Option => Option.value === 'peak').length;
    const hoursCount = normalCount + peakCount;

    selectedHours.textContent = `${hoursCount} Hours ${normalCount} Normal ${peakCount} Peak`


    const selectedTime = document.getElementById("selectedTime");
    const numericValues  = selectedValues.map(value => parseInt(value));

    const maxValue = Math.max(...numericValues);
    const minValue = Math.min(...numericValues);

    let StartTime, EndTime;

    if(minValue < 13){
        StartTime = minValue + ":00 AM";
    }else{
        StartTime = (minValue -12) + ":00 PM";
    }

    if(maxValue < 13){
        EndTime = maxValue + ":00 AM";
    }else{
        EndTime = (maxValue - 11) + ":00 PM";
    }
    const lastTime = StartTime + " - " + EndTime;
    selectedTime.textContent = lastTime;


    localStorage.setItem('normalCount', normalCount);
    localStorage.setItem('peakCount', peakCount);
    localStorage.setItem('hoursCount', hoursCount);

    localStorage.setItem('maxValue', maxValue);
    localStorage.setItem('minValue', minValue);
    localStorage.setItem('lastTime', lastTime);
});
});




//----------------------------------------------------------//



//----------calendar----------------------------------------//

document.addEventListener('DOMContentLoaded', function () {

    const currentDate = new Date();
    // console.log(currentDate);
    const currentYear = currentDate.getFullYear();
    // console.log(currentYear);
    const currentMonth = currentDate.getMonth() + 1;
    // console.log(currentMonth);
    const currentDay = currentDate.getDate();
    // console.log(currentDay);

    const formatDate = `${currentYear}-0${currentMonth}-${currentDay}`;

    document.getElementById("selectedDate").innerHTML = formatDate;






    const calendarInput = document.getElementById('calendar');
    const result = document.getElementById('selectedDate');

    const savedValue = localStorage.getItem('selectedDate');
    if(savedValue){
        result.textContent = savedValue;
    }

    calendarInput.addEventListener('change', function () {
        const selectedDate = calendarInput.value;
        result.innerHTML =  selectedDate;

        localStorage.setItem('selectedDate', selectedDate);
    });
});






// ------------------------------------------------------------------------//

// let carts = document.querySelectorAll('.opt');

// let products = [
//     {
//         name: 'Sl Adult',
//         tag: 'sladult',
//         price: 4,
//         pricex: 6,
//         inCart: 0
//     },
//     {
//         name: 'Sl Child',
//         tag: 'slchild',
//         price: 4,
//         pricex: 6,
//         inCart: 0
//     },
//     {
//         name: ' Foreign Adult',
//         tag: 'foreignadult',
//         price: 4,
//         pricex: 6,
//         inCart: 0
//     },
//     {
//         name: 'Foreign Child',
//         tag: 'foreignchild',
//         price: 4,
//         pricex: 6,
//         inCart: 0
//     },
//     {
//         name: 'Infant',
//         tag: 'infant',
//         price: 4,
//         pricex: 6,
//         inCart: 0
//     },
// ]

// for(let i=0; i<carts.length; i++){
//     carts[i].addEventListener('click', () =>{
//         cartNumbers(products[i]);
//     })
// }

// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers){
//         document.getElementById("count").textContent = productNumbers;
//     }
// }
// function cartNumbers(product){

//     let productNumbers = localStorage.getItem('cartNumbers'); 
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers){
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.getElementById("count").textContent = productNumbers + 1;
//     }else{
//         localStorage.setItem('cartNumbers', 1);
//         document.getElementById("count").textContent = 1;
//     }
//     setItems(product);
//     displayCart();
// }


// function updateProductPrice(){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     console.log(cartItems);

//     let products = [
//       {
//         name: 'Sl Adult',
//         tag: 'sladult',
//         priceKey: 'totalCost1',
//         inCart: 0
//       },
//       {
//         name: 'Sl Child',
//         tag: 'slchild',
//         priceKey: 'totalCost2',
//         inCart: 0
//       },
//       {
//         name: ' Foreign Adult',
//         tag: 'foreignadult',
//         priceKey: 'totalCost3',
//         inCart: 0
//       },
//       {
//         name: 'Foreign Child',
//         tag: 'foreignchild',
//         priceKey: 'totalCost4',
//         inCart: 0
//       },
//       {
//         name: 'Infant',
//         tag: 'infant',
//         priceKey: 'totalCost5',
//         inCart: 0
//       },
//     ];
//     products.forEach(product => {
//         if(cartItems[product.tag]){
//             cartItems[prouduct.tag].price += parseFloat(localStorage.getItem(product.priceKey)) || 0;
//         }
//     });
//     localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//     //console.log(cartItems);

// }

// function setItems(product){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){
//         if(cartItems[product.tag] == undefined){
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart += 1;
//     }else{
//         product.inCart = 1;
//         cartItems ={
//         [product.tag]: product
//         }
//     }
//     localStorage.setItem('productsInCart', JSON.stringify(cartItems));
// }


// function totalCost(){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     let peakCount = localStorage.getItem('peakCount');
//     let normalCount = localStorage.getItem('normalCount');

//     //console.log(cartItems);
//     //console.log(peakCount);
//     //console.log(normalCount);
//     let totalCost = 0;
//     let totalCost1 = 0;
//     let totalCost2 = 0;
//     let totalCost3 = 0;
//     let totalCost4 = 0;
//     let totalCost5 = 0;

//     //console.log("this =>",cartItems.sladult);
//     if(cartItems && peakCount && normalCount){
//         if(cartItems.sladult){
//           totalCost1 = cartItems.sladult.inCart * (6 * peakCount + 4 * normalCount);
//           localStorage.setItem('totalCost1', totalCost1);
//         }else{
//           return;
//         }
//     }
//     if(cartItems && peakCount && normalCount){
//           if(cartItems.slchild){
//               totalCost2 = cartItems.slchild.inCart * (3 * peakCount + 2 * normalCount);
//               localStorage.setItem('totalCost2', totalCost2);
  
//           }else{
//               return;
//           }
//     }
//     if(cartItems && peakCount && normalCount){
//           if(cartItems.foreignadult){
//               totalCost3 = cartItems.foreignadult.inCart * (13 * peakCount + 10 * normalCount);
//               localStorage.setItem('totalCost3', totalCost3);
  
//           }else{
//               return;
//           }
//     }
//     if(cartItems && peakCount && normalCount){
//           if(cartItems.foreignchild){
//               totalCost4 = cartItems.foreignchild.inCart * (8 * peakCount + 5 * normalCount);
//               localStorage.setItem('totalCost4', totalCost4);
          
//           }else{
//               return;
//           }
//     }
//     if(cartItems && peakCount && normalCount){
//           if(cartItems.infant){
//               totalCost5 = cartItems.infant.inCart * (0 * peakCount + 0 * normalCount);
//               localStorage.setItem('totalCost5', totalCost5);
       
//           }else{
//               return;
//           }
//         }
//           totalCost = totalCost1 + totalCost2 + totalCost3 + totalCost4 + totalCost5;
//           localStorage.setItem('totalCost', totalCost);
//           document.getElementById("totalPrice").textContent = `$ ${totalCost}.00`;
    
//       }

    


    

// function displayCart(){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     const selectedTickets = document.getElementById("selectedTickets");
//     const selectedCount = document.getElementById("selectedCount");
//     const selectedPrice = document.getElementById("selectedPrice");

//     if(cartItems && selectedTickets){
//     selectedTickets.innerHTML = "";
//     Object.values(cartItems).map(item => {
//         selectedTickets.innerHTML += `${item.name} <br><br>`;
//     })};
//     if(cartItems && selectedCount){
//     selectedCount.innerHTML = "";
//     Object.values(cartItems).map(item => {
//         selectedCount.innerHTML += `${item.inCart} <br><br>`;
//     })};
//     if(cartItems && selectedPrice){
//     selectedPrice.innerHTML = "";
//     Object.values(cartItems).map(item => {
//         selectedPrice.innerHTML += `$${item.inCart * item.price} <br><br>`;
//     })};

//     totalCost();
//     onLoadCartNumbers();
//     }
    



//-----------------------------clear cart---------------------------------//


window.onload = function(){
   clearCart();
};
function clearCart(){
    localStorage.clear();
    document.getElementById("count").textContent = 0;
    document.getElementById("totalall").textContent = "$ 0.00";
    document.getElementById("listresult").innerHTML = "";
}


// //-----------------------------remove item---------------------------------//   

// document.addEventListener("DOMContentLoaded", () => {
//     clearCart();

//     // const deleteIcons = document.querySelectorAll(".delete");
//     // deleteIcons.forEach((icon) => {
//     //     icon.addEventListener('click',() => {
//     //         removeCartItem(index);
//     // });
// //});
// });

/*-----------------------add to cart-----------------------*/
 

