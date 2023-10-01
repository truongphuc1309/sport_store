// Get the button:
let mybutton = document.getElementById("gototop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
      } else {
        mybutton.style.opacity = "0";
      }
};