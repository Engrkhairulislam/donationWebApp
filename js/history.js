// write a toggle button function to page exchange
const pageToggleByButtonIdAndHtmlPageName = function (buttonId, pageName) {
   document
      .getElementById(buttonId)
      .addEventListener("click", function (event) {
         alert("clicked");
         window.location.href = pageName;
      });
};

//  history page to index page
pageToggleByButtonIdAndHtmlPageName("btn-history-home-back-home", "index.html");

//  history page to index page
pageToggleByButtonIdAndHtmlPageName("btn-donation-to-home-page", "index.html");
