
$(function () {

  // Envoie de demande d'adhesion
  $("#envoyer_demander_adhesion").click(envoyerDemander);

});


/**
 * Pour envoyer la demande d'adhesion
 */
function envoyerDemander(){
  
  if(!checkDemande()){
    return;
  }
    
  var data = formatDemandeData();
      
  demandeIsSending();

  // Envoie la demande 
  $.post( "http://localhost/adhesion.php", data)
    .done(function(r) {
      demandeIsSended();
      alert("Votre a été envoyé !");
  })
  .fail(function(){
    demandeIsSended();
    alert("Erreur survenu lors de l'envoie !");
  }); 

}

/**
 * Change l'etat du button d'envoie
 */
function demandeIsSended(){
  $("#envoyer_demander_adhesion").text("Envoyer");
  $("#envoyer_demander_adhesion").attr("disabled", false);
}

/**
 * Change l'etat du button d'envoie
 */
function demandeIsSending(){
  $("#envoyer_demander_adhesion").text("Envoyer ...");
  $("#envoyer_demander_adhesion").attr("disabled", true);
}

/**
 * Verifie si les données sont valides
 */
function checkDemande(){
  var allIsValid = true;
  $("#demande_adhesion").find("input").each(function(){        
    $(this).removeClass("is-invalid");
    if(!this.checkValidity()){
      $(this).addClass('is-invalid');
      allIsValid = false;
    }
  });
  return allIsValid;
}

/**
 * Format les données
 */
function formatDemandeData(){
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
  return data;
}
