<!doctype html>
<html lang="en-US">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
		<link rel="shortcut icon" href="images/GN.png"/>
		<title>Acceuil | Econcours</title>

		<link rel='stylesheet' href='css/style.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/custom.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/font-awesome.min.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/jquery.datetimepicker.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/chosen.css' type='text/css' media='all'/>
        <link rel='stylesheet' href='css/docs.css' type='text/css' media='all'/>

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body>
		<div class="site">
			<header class="noo-header" id="noo-header">
				<div class="navbar-wrapper">
					<div class="navbar navbar-default fixed-top shrinkable">
						<div class="container-boxed max">
							<div class="navbar-header">
								<h1 class="sr-only">MFPTPS</h1> 
								<a class="navbar-toggle collapsed" data-toggle="collapse" data-target=".noo-navbar-collapse">
									<span class="sr-only">Navigation</span>
									<i class="fa fa-bars"></i>
								</a>
								<a class="navbar-toggle member-navbar-toggle collapsed" data-toggle="collapse" data-target=".noo-user-navbar-collapse">
									<i class="fa fa-user"></i>
								</a>
								<a href="Acceuil.php" class="navbar-brand">
									<img class="noo-logo-img noo-logo-normal" src="images/GN.png" alt="">
									<img class="noo-logo-mobile-img noo-logo-normal" src="images/GN.png" alt="">
								</a>
							</div>  
							<nav class="collapse navbar-collapse noo-user-navbar-collapse">
								<ul class="navbar-nav sf-menu">
									<li>
										<a href="Sign_In.php"><i class="fa fa-key"></i> Connexion</a>
									</li>
									<li>
										<a href="Enregistrement.php"><i class="fa fa-key"></i>Nouveau Compte</a>
									</li>
								</ul>
							</nav>
							<nav class="collapse navbar-collapse noo-navbar-collapse">
								<ul class="navbar-nav sf-menu">
									<li class="align-left">
										<a href="Acceuil.php">Accueil</a>
									</li>
									<li class="align-left">
										<a href="Concours.php">Concours</a>
									</li>
									<li class="align-left">
										<a href="Gouvernement.php">Ministères</a>
									</li>
									<li class="align-left">
										<a href="Contact-us.php">Contactez-Nous</a>
									</li>
									<li class="current-menu-item align-left">
										<a href="faq.php">Aide</a>
									</li>
									<li class="nav-item-member-profile login-link align-center">
										<a href="Sign_In.php" class="member-links member-login-link" id="profil">
											<i class="fa fa-sign-in" ></i>&nbsp;Mon Compte
										</a>
									</li>
									<li class="nav-item-member-profile register-link">
										<a class="member-links member-register-link" href="Enregistrement.php">
											<i class="fa fa-key"></i>&nbsp;Nouveau Compte
										</a>
									</li>
								</ul>
							</nav> 
                            <a><br>MFPTPS</a>  
						</div>  
					</div>  
				</div>
			</header>
        <section class="faq-page">
        	<div class="container">
            	<div class="section-title">
                	<h2>Questions/Réponses</h2>
                    <p>Nous avons regroupé les questions les plus demandées, n'hésitez pas à nous contacter si vos questions restent sans réponses</p>
                </div>
                
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-down"></i>
                        <h4>Comment créer un compte?</h4>
                    </div>
                    <div class="faq-content">
                    	<p>1.Sélectionez une des options visibles ci-dessous.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img01" onclick="modalImage(this.id)" src="images/howToSignUp-1.png"  height="400" width="400" alt="">
                        <p>2.Il est important de REMPLIR TOUS LES champs.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img02" onclick="modalImage(this.id)"  src="images/howtosignup2.png"  height="400" width="400" alt="">
                        <p>3.Sélectionez votre sexe.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img03" onclick="modalImage(this.id)"  src="images/howtosignup4.png"  height="400" width="400" alt="">
                        <p>4.Le champ nom de JEUNE FILLE devient accessible. Si vous êtes une femme, ce champ peut être laissé vide.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img04" onclick="modalImage(this.id)"  src="images/howtosignup5.png"  height="400" width="400" alt="">
                        <p>5.Sélectionez le TYPE DE CONCOURS auquel vous voulez postuler.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img05" onclick="modalImage(this.id)"  src="images/howtosignup3.png"  height="400" width="400" alt="">
                        <p>6.Les champs MATRICULE/MINISTÈRE/EMPLOI seront accessibles pour vous permettre d'entrer vos informations.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img06" onclick="modalImage(this.id)"  src="images/howtosignup6.png"  height="400" width="400" alt="">
                        <p>7.1 Entrez les informations demandées pour la CNIB, et confirmez les.</p>
                        <p>7.2 Entrez et confirmez un mot de passe pour le compte. Assurez-vous de la concordance des mots de passe.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img07" onclick="modalImage(this.id)"  src="images/howtosignup7.png"  height="400" width="400" alt="">
                        <p>8.Vous recevrez un message de confirmation, sélectionner OK.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img08" onclick="modalImage(this.id)"  src="images/howtosignup8.png"  height="400" width="400" alt="">
                        <p>9.Sélectionez RECEVOIR LA CLÉ, attendez quelques minutes, un SMS vous sera envoyé.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img09" onclick="modalImage(this.id)"  src="images/howtosignup9.png"  height="400" width="400" alt="">
                        <p>10.1 Entrez le numéro reçu par SMS dans le champ.</p>
                        <p>10.2 Sélectionnez VÉRIFIER.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img10" onclick="modalImage(this.id)"  src="images/howtosignup11.png"  height="400" width="400" alt="">
                        <p>11.Vous recevrez un message de confirmation, sélectionner OK.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img11" onclick="modalImage(this.id)"  src="images/howtosignup12.png"  height="400" width="400" alt="">
                        <p>12.1 Vous serez redirigé vers la page de connexion pour une connexion à votre compte.</p>
                        <p>12.2 Entrez votre numéro de téléphone et le mot de passe utilisé lors de l'enregistrement.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img12" onclick="modalImage(this.id)"  src="images/howtosignup13.png"  height="400" width="400" alt="">
                         <p>14. Vous serez automatiquement dirigé vers la page des concours dans vôtre compte.</p>
                         <img class="noo-logo-img noo-logo-normal" id="img13" onclick="modalImage(this.id)"  src="images/howtosignup14.png"  height="400" width="400" alt="">
                    </div>
                </div>
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-down"></i>
                        <h4>Comment s'inscrire à un concours?</h4>
                    </div>
                    <div class="faq-content">
                    	<p>À venir.</p>
                    </div>
                </div>
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-right"></i>
                        <h4>Comment vérifier mon inscription à un concours?</h4>
                    </div>
                    
                <div class="faq-content">
                    <p>1.Sélectionnez MES CONCOURS dans votre profil.</p>
                    <img class="noo-logo-img noo-logo-normal" id="img15" onclick="modalImage(this.id)" src="images/mesconcours1.png"  height="400" width="400" alt="">
                    <p>2.La liste des concours auxquels vous avez postulé est disponible.</p>
                    <img class="noo-logo-img noo-logo-normal" id="img16" onclick="modalImage(this.id)" src="images/mesconcours2.png"  height="400" width="400" alt="">
                </div>
                </div>
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-down"></i>
                        <h4>NÉ(E) "VERS" OU "EN" ?</h4>
                    </div>
                    <div class="faq-content">
                    	<p>Pour la date de naissance, veuillez choisir "31" comme jour et "Décembre" comme "mois".</p>
                         <img class="noo-logo-img noo-logo-normal" id="img14" onclick="modalImage(this.id)" src="images/neeVert.png"  height="400" width="400" alt="">
                    </div>
                </div>
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-right"></i>
                        <h4>Validation par Orange Money?</h4>
                    </div>
                    <div class="faq-content">
                    	<p>1. Composez *144*4*6*800#  </p>
                        <p>2. Éffectuer le payement via votre porteffeuil électronique.</p>
                        <p>3. Recevez le code de validation.</p>
                        <p>4. Saisir le numéro de téléphone utilisé lors du paiement</p>
                        <p>5. Saisir le code de validation reçu ci-dessous et valider.</p>
                    </div>
                </div>
                <div class="faq-slide">
                	<div class="title">
                    	<i class="fa fa-angle-right"></i>
                        <h4>Validation par MobiCash</h4>
                    </div>
                    <div class="faq-content">
                        <p>1. Saisir le numéro de téléphone que vous utiliserai lors du paiement</p>
                        <p>2. Composez le code USSD *555*6# .</p>
                        <p>3. Choisir le numéro de la transaction que vous souhaitez valider et confirmer.</p>
                        <p>4. Recevez le code de validation.</p>
                        <p>5. Saisir le code de validation reçu ci-dessous et valider.</p>
                    </div>
                </div>
            </div>
            <!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img1">
  <div id="caption"></div>
</div>
        
                <br>
                <br>
                <br>
        </section>
            <footer class="colophon site-info">
				<div class="container-full">
					<div class="footer-more">
						<div class="container-boxed">
							<div class="row">
								<div class="col-md-12">
									<div class="noo-bottom-bar-content">
										© 2024 Ministère de la Fonction Publique , du Travail et de la Protection Sociale | <a href="User_accecptance.php" style="color:White">Conditions d'utilisation</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>  
			</footer>    
    </div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/owl.carousel.js"></script>
    <script type="text/javascript" src="js/jquery.form-validator.min.js"></script>
    <script type="text/javascript" src="js/placeholder.js"></script>
    <script type="text/javascript" src="js/coustem.js"></script>
    <script type="text/javascript" src="js/field_verification.js"></script>
     <script>
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>   
</body>
</html>

