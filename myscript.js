function myFunction1() {
  window.open("https://www.idtraining.pt/");
}

function myFunction2() {
  window.open("https://www.infraestruturasdeportugal.pt/");
}

function myFunction3() {
  window.open("https://blueeconomybarometer.pwc.pt/");
}

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
