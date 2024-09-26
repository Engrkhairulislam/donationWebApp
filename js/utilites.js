//  write a function to get a  text  element value by ID

const getTextElementValueById = function (balancePlaceId) {
   const donatedBalance = document.getElementById(balancePlaceId).innerText;
   const donatedBalanceNumber = parseFloat(donatedBalance);
   return donatedBalanceNumber;
};

//  write a function to get an input field element value by ID

const getInputElementValueById = function (balancePlaceId) {
   const donatedBalance = document.getElementById(balancePlaceId).value;
   const donatedBalanceNumber = parseFloat(donatedBalance);
   return donatedBalanceNumber;
};

// //  balance find out for separetly all total donated balance show position.
// // balance noakhali flood
// const balanceNoakhaliFlood = getTextElementValueById("balance-noakhali-flood");

// // balance feni flood
// const balanceFeniFlood = getTextElementValueById("balance-feni-flood");

// // balance student quota movement.
// const balanceQuotaMovement = getTextElementValueById("balance-quota-movement");
// // USER Balance.
// const userBalance = getTextElementValueById("user-balance");

// // write a function to donate for a specific donation scheme.
// console.log(
//    balanceFeniFlood,
//    balanceNoakhaliFlood,
//    balanceQuotaMovement,
//    userBalance,
// );

