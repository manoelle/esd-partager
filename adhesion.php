<?php

	include("sendMail.php");
	
		
	// Déclaration des messages au format texte et au format HTML.
	
	$nomComplet = $_POST['nom']. " ".$_POST['prenom'];
	$ville = $_POST['ville'];
	$pays = $_POST['pays'];
	$codepostal = $_POST['codepostal'];
	
	$message_txt = "Demande d'adhésion. \n 
		$nomComplet souhaite adhérer à ESD. \n
		$nomComplet souhaite adhérer à ESD. \n
		Ville : $ville \n
		Pays : $pays \n
		Code Postal : $codepostal \n;
		
	$message_html = "<html><head> <meta http-equiv=\"Content-Type\" content=\"text/html;charset=ISO-8859-1\"> </head><body>
		<h1>Demande d'adhésion</h1>
		<p><b>$nomComplet</b> souhaite adhérer à ESD.</p>
		<p> <b>Ville :</b> $ville </p>
		<p> <b>Pays :</b> $pays </p>
		<p> <b>Code Postal :</b> $codepostal </p>
		</body></html>";

	
	$sujet = "Demande d'adhesion";
	
	$error = false;
	
	try {
		envoyerMail($sujet , $message_html, $message_txt, $nomComplet, $_POST['email']);
		$message = "Message envoyé";
	} catch (Exception $e) {
		$message = $e->getMessage();
		$error = true;
	}
	echo json_encode(array(
		'error' => $error, // success or not?
		'message' => $message
	));
	
	
?>
