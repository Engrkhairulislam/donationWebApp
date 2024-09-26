//  donation for noakhali flood.
document
   .getElementById("btn-donate-amount-noakhali")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const userBalance = getTextElementValueById("user-balance");
      const noakhaliTotalDonationBalance = getTextElementValueById(
         "balance-noakhali-flood",
      );
      const donateNowBalance = getInputElementValueById(
         "donate-amount-noakhali",
      );
      console.log(typeof donateNowBalance);

      //  validation error message show  downside of input element.

      // check input donation balance is number of anything.
      if (isNaN(donateNowBalance)) {
         document.getElementById("error-message").innerText =
            "input a valid number";
      } else {
         document.getElementById("error-message").style.display = "none";
      }
      // check input donation balance is zero or higher than user balance
      if (donateNowBalance > userBalance) {
         errorMassage.innerText =
            "Insufficient balance. please recharge balance.";
      } else {
         errorMassage.style.display = "none";
      }
      const updatedNoakhaliTotalDonationBalance =
         noakhaliTotalDonationBalance + donateNowBalance;
      document.getElementById("balance-noakhali-flood").innerText =
         updatedNoakhaliTotalDonationBalance;

      // now reduce donated balance form user main balance
      const userNewBalance = userBalance - donateNowBalance;
      // user balance update.
      document.getElementById("user-balance").innerText = userNewBalance;
   });
