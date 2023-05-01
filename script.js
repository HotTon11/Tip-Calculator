// Change color of Bill Total field to beige
let colorOfBillTotal = document.getElementById('billTotal');

colorOfBillTotal.onfocus = function(){
    colorOfBillTotal.style.backgroundColor = 'beige'
}
colorOfBillTotal.onblur = function(){
    colorOfBillTotal.style.backgroundColor = 'white'
}

colorOfBillTotal.onkeydown = function(event) {
    // handles the 'enter' key
    let key = event.charCode || event.keyCode || event.which || 0;     
    if (key == 13) {
        // prevents the browser from reloading
        event.preventDefault();
        // runs the function when 'Enter' is pressed
        returnTip()
    }
} 

// PREVENT browser from refreshing when submitting form - *** Add this function call on the form element itself in the HTML:

function func(e){
    event.preventDefault()
}


// MAIN FUNCTIONALITY BELOW

// function returnTip() {
//     // Step 1 - save user inputs as variables (using .value) = 
//     let billTotal = document.getElementById('billTotal').value;
//     let percentage = document.getElementById('percentage').value;

//     // // Step 2 - perform the calculations you wish to display in numberic value
//     let tipAmount = (billTotal * percentage);

//     // // Step 3 - convert numeric variables to currency
//     let tipCurrency = tipAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

//     // // Step 4 - create variables from the elements in HTML that you want to append results to
//     let tipResult = document.getElementById("tipResult");
    
//     // // Step 5 - return results - populate table
//     tipResult.innerHTML = (tipCurrency);
   
// }


function return18() {
    let billTotal = document.getElementById('billTotal').value;
    let tipAmount = (billTotal * .18);
    let totalAmount = Number(billTotal);
    let leaveThisAmount = (totalAmount + tipAmount);
    let tipCurrency = tipAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let leaveThisAmountCurrency = leaveThisAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let tipResult = document.getElementById("tipResult");
    tipResult.innerHTML = ("Tip: " + tipCurrency);
    totalResult.innerHTML = ("Leave this amount: " + leaveThisAmountCurrency);

}

function return20() {
    let billTotal = document.getElementById('billTotal').value;
    let tipAmount = (billTotal * .2);
    let totalAmount = Number(billTotal);
    let leaveThisAmount = (totalAmount + tipAmount);
    let tipCurrency = tipAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let leaveThisAmountCurrency = leaveThisAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let tipResult = document.getElementById("tipResult");
    tipResult.innerHTML = ("Tip: " + tipCurrency);
    totalResult.innerHTML = ("Leave this amount: " + leaveThisAmountCurrency);
}
function return25() {
    let billTotal = document.getElementById('billTotal').value;
    let tipAmount = (billTotal * .25);
    let totalAmount = Number(billTotal);
    let leaveThisAmount = (totalAmount + tipAmount);
    let tipCurrency = tipAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let leaveThisAmountCurrency = leaveThisAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let tipResult = document.getElementById("tipResult");
    tipResult.innerHTML = ("Tip: " + tipCurrency);
    totalResult.innerHTML = ("Leave this amount: " + leaveThisAmountCurrency);
}
function return30() {
    let billTotal = document.getElementById('billTotal').value;
    let tipAmount = (billTotal * .3);
    let totalAmount = Number(billTotal);
    let leaveThisAmount = (totalAmount + tipAmount);
    let tipCurrency = tipAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let leaveThisAmountCurrency = leaveThisAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let tipResult = document.getElementById("tipResult");
    tipResult.innerHTML = ("Tip: " + tipCurrency);
    totalResult.innerHTML = ("Leave this amount: " + leaveThisAmountCurrency);
}

function resetTipField() {
    tipResult.innerHTML = (' ');
    totalResult.innerHTML = (' ');
}
