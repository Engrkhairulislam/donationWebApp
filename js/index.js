//  page toggle utility button for HTML page toggle.

const pageToggleByButtonIdAndHtmlPageName = function (buttonId, pageName) {
   document
      .getElementById(buttonId)
      .addEventListener("click", function (event) {
         alert("clicked");
         window.location.href = pageName;
      });
};
// history page from index html page.
pageToggleByButtonIdAndHtmlPageName("btn-history", "history.html");

// blog page from index html page.
pageToggleByButtonIdAndHtmlPageName("nab-blog-button", "blog.html");

// index html page from blog page
pageToggleByButtonIdAndHtmlPageName("btn-history-home-back-home", "index.html");
