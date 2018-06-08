
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

  $("#envoyer_demander_adhesion").click(function(){
      
      var allIsValid = true;
      $("#demande_adhesion").find("input").each(function(){        
        $(this).removeClass("is-invalid");
        if(!this.checkValidity()){
          $(this).addClass('is-invalid');
          allIsValid = false;
        }
      })
      
      if(!allIsValid){
        return;
      }
      
      var nom = $("#nom").val();
      var prenom = $("#prenom").val();
      var email = $("#email").val();
      var ville = $("#ville").val();
      var pays = $("#pays").val();
      var codepostal = $("#codepostal").val();
      var data = {
        nom : nom,
        prenom : prenom,
        email : email,
        ville : ville,
        pays : pays,
        codepostal: codepostal
      }
       
	$.post( "http://localhost/adhesion.php", data)
	.done(function(r) {
		$("#nom").val("");
		$("#prenom").val("");
		$("#email").val("");
		$("#ville").val("");
		$("#pays").val("");
		$("#codepostal").val("");
		alert("Votre a été envoyé !");
	})
	.fail(function(){
		alert("Erreur survenu lors de l'envoie !");
	}); 

});

})
