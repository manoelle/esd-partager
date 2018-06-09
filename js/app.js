
$(function () {
  
  function fixeHeader() {
    if (window.pageYOffset >= sticky) {
    header.classList.add("fixed-top");
    } else {
    header.classList.remove("fixed-top");
    }
  }

  window.onscroll = function() {fixeHeader()};

  var header = document.getElementById("app_header");
  var sticky = header.offsetTop;


  $('[data-toggle="tooltip"]').tooltip();
 
  var navLinks = $(".nav-link");
  for(var i=0; i<navLinks.length; i++){
    if($(navLinks[i]).attr('href')==window.location.pathname){
      $(navLinks[i]).addClass('active');
      break; 
    }
  }

});
