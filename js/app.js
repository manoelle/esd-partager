window.onscroll = function() {fixeHeader()};

var header = document.getElementById("app_header");
var sticky = header.offsetTop;

function fixeHeader() {
  if (window.pageYOffset >= sticky) {
	header.classList.add("fixed-top");
  } else {
	header.classList.remove("fixed-top");
  }
}
