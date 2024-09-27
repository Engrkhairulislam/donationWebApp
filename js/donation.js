//  donate for noakhali flood.
document
   .getElementById("btn-donate-amount-noakhali")
   .addEventListener("click", function (event) {
      event.preventDefault();
      // User balance.
      const userBalance = getTextElementValueById("user-balance");
      const totalDonationForNoakhali = getTextElementValueById(
         "balance-noakhali-flood",
      );
      const donateNowNoakhali = getInputElementValueById(
         "donate-amount-noakhali",
      );
      //error message shown  element in noakhali donation section
      const errorMassageNokhaliDonation = document.getElementById(
         "error-message-noakhali",
      );
      // validation for donation.
      if (donateNowNoakhali > userBalance) {
         errorMassageNokhaliDonation.innerText =
            "Insufficient Balance. Recharge first.";
         errorMassageNokhaliDonation.style.color = "red";
      }
      // when balance  is lower than 1 dollar
      else if (donateNowNoakhali < 2) {
         errorMassageNokhaliDonation.innerText =
            "You Can't Donate lower than 2 dollar.";
         errorMassageNokhaliDonation.style.color = "red";
      } else {
         errorMassageNokhaliDonation.style.display = "none";

         // donation logic
         const updatedTotalDonationForNoakhali =
            totalDonationForNoakhali + donateNowNoakhali;
         //   user balance reduction
         const updatedUserBalance = userBalance - donateNowNoakhali;

         //  balance update in the DOM
         document.getElementById("user-balance").innerText = updatedUserBalance;

         document.getElementById("balance-noakhali-flood").innerText =
            updatedTotalDonationForNoakhali;
      }
   });

//  donate for feni flood.
document
   .getElementById("btn-donate-amount-feni")
   .addEventListener("click", function (event) {
      event.preventDefault();
      // User balance.
      const userBalance = getTextElementValueById("user-balance");
      const totalDonationForFeni =
         getTextElementValueById("balance-feni-flood");
      const donateNowFeni = getInputElementValueById("donate-amount-feni");
      //error message shown  element in noakhali donation section
      const errorMassageFeniDonation = document.getElementById(
         "error-message-feni-input-field",
      );
      // validation for donation.
      if (donateNowFeni > userBalance) {
         errorMassageFeniDonation.innerText =
            "Insufficient Balance. Recharge first.";
         errorMassageFeniDonation.style.color = "red";
      }
      // when balance  is lower than 1 dollar
      else if (donateNowFeni < 2) {
         errorMassageFeniDonation.innerText =
            "You Can't Donate lower than 2 dollar.";
      } else {
         errorMassageFeniDonation.style.display = "none";

         // donation logic
         const updatedTotalDonationForNoakhali =
            totalDonationForFeni + donateNowFeni;
         //   user balance reduction
         const updatedUserBalance = userBalance - donateNowFeni;

         //  balance update in the DOM
         document.getElementById("user-balance").innerText = updatedUserBalance;

         document.getElementById("balance-feni-flood").innerText =
            updatedTotalDonationForNoakhali;
      }
   });

//  donate for Quota movement.
document
   .getElementById("btn-donate-quota-movement")
   .addEventListener("click", function (event) {
      event.preventDefault();
      // User balance.
      const userBalance = getTextElementValueById("user-balance");
      const totalDonationForQoutaMovement = getTextElementValueById(
         "balance-quota-movement",
      );
      const donateNowQoutaMovement = getInputElementValueById(
         "donate-amount-quota-movement",
      );
      //error message shown  element in noakhali donation section
      const errorMassageQoutaMovement = document.getElementById(
         "error-message-qouta-movement-input-field",
      );
      // validation for donation.
      if (donateNowQoutaMovement > userBalance) {
         errorMassageQoutaMovement.innerText =
            "Insufficient Balance. Recharge first.";
         errorMassageQoutaMovement.style.color = "red";
      }
      // when balance  is lower than 1 dollar
      else if (donateNowQoutaMovement < 2) {
         errorMassageQoutaMovement.innerText =
            "You Can't Donate lower than 2 dollar.";
      } else {
         errorMassageQoutaMovement.style.display = "none";

         // donation logic
         const updatedTotalDonationForQoutaMovement =
            totalDonationForQoutaMovement + donateNowQoutaMovement;
         //   user balance reduction
         const updatedUserBalance = userBalance - donateNowQoutaMovement;

         //  balance update in the DOM
         document.getElementById("user-balance").innerText = updatedUserBalance;

         document.getElementById("balance-quota-movement").innerText =
            updatedTotalDonationForQoutaMovement;
      }
   });
