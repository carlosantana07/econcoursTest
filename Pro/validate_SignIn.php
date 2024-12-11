<!doctype html>
<html lang="en-US">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        
		<link rel="shortcut icon" href="images/GN.png"/>
		<title>Enregistrement | Econcours</title>

		<link rel='stylesheet' href='css/style.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/custom.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/font-awesome.min.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/jquery.datetimepicker.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/chosen.css' type='text/css' media='all'/>
        <link rel='stylesheet' href='css/docs2.css' type='text/css' media='all'/>

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body onload="reviewProfile()">
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
									<li class="align-left">
										<a href="faq.php">Aide</a>
									</li>
									<li class="nav-item-member-profile login-link align-center">
										<a href="Sign_In.php" class="member-links member-login-link">
											<i class="fa fa-sign-in"></i>&nbsp;Mon Compte
										</a>
									</li>
									<li class="nav-item-member-profile register-link current-menu-item " >
										<a class="member-links member-register-link" href="Enregistrement.php" id="profil">
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
				<div class="main-content container-boxed max offset">
                     <div class="section-title">
                    <h2>Création de Compte</h2>
                         
                    <p class="search-top-title" style="color:red">Veuillez remplir tous les champs. Ils sont tous obligatoires.</p>
                </div>
					<div class="row">
						<div class="noo-main col-md-12">
							<div class="form-title">
								<h3>Données personnelles</h3>
							</div>
							<form class="form-horizontal" enctype="multipart/form-data">
								<div class="candidate-profile-form row">
									<div class="col-sm-6">
                                        <div class="form-group ">
								                <label class="col-sm-4 control-label">Type de Concours:</label>
								                <div class="col-sm-8" >
									               <div class="form-control-flat">
                                                        <label id="role" style="color:red" class="col-sm-4 control-label">Professionnel</label>
									               </div>
								                </div>
                                            </div>  
							            <div class="form-group ">
								                <label class="col-sm-4 control-label">Sexe:</label>
								                <div class="col-sm-8">
									               <div class="form-control-flat">
                                                        <label id="sex" style="color:red"  class="col-sm-4 control-label"></label>
									               </div>
								                </div>
                                            </div>
                                        <div class="form-group">
											<label for="name" class="col-sm-4 control-label">Nom:</label>
											<div class="col-sm-8" id="nom">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label"  id="lastname">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="name" class="col-sm-4 control-label">Prénom (S):</label>
											<div class="col-sm-8" id="prenom">
										    	<label type="text" style="color:red"  style="color:red"  class="col-sm-4 control-label"  id="firstname" value="" name="firstname" placeholder="Prénom">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="name" class="col-sm-4 control-label">Nom de Jeune Fille:</label>
											<div class="col-sm-8" id="marier">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label"  id="maidenname" value="" name="maidenname" placeholder="Nom de Jeune fille">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="profile-email" class="col-sm-4 control-label">Matricule:</label>
											<div class="col-sm-8" id="matriculeDiv">
										    	<label type="text" style="color:red" class="col-sm-4 control-label"  id="matricule" value="" name="matricule" placeholder="Matricule">  </label>
										    </div>
										</div> 
										<div class="form-group">
											<label for="profile-email" class="col-sm-4 control-label">Ministère:</label>
											<div class="col-sm-8" id="ministry">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="ministere" value="" name="ministere" placeholder="Ministère">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="profile-email" class="col-sm-4 control-label">Emploi:</label>
											<div class="col-sm-8" id="corp">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="corps" value="" name="corps" placeholder="Corps">  </label>
										    </div>
										</div>
								    </div>
                                    
									<div class="col-sm-6">
										<div class="form-group">
											<label for="birthday" class="col-sm-4 control-label">Date de Naissance:</label>
											<div class="col-sm-8" id="naissance">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="dateofbirth" data-date-format="DD MMMM YYYY" value="" name="dateofbirth" placeholder="JJ-MM-AAAA">  </label>
										    </div>
										</div>
                                        <div class="form-group">
											<label for="address" class="col-sm-4 control-label">Lieu de Naissance:</label>
											<div class="col-sm-8" id="lieu">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="address" value="" name="address">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="phone" class="col-sm-4 control-label">Téléphone:</label>
											<div class="col-sm-8" id="telephoneDiv">
										    	<label type="number" style="color:red" class="col-sm-4 control-label" id="telephone" value="226" name="telephone" placeholder="226">  </label>
										    </div>
										</div>
                                        <div class="form-group">
											<label for="phone" class="col-sm-4 control-label">Confirmer le Téléphone:</label>
											<div class="col-sm-8" id="telephoneDiv_confirm">
										    	<label type="number" style="color:red" class="col-sm-4 control-label" id="telephone_confirm" value="226" name="telephone_confirm" placeholder="226">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="profile-email" class="col-sm-4 control-label">Email:</label>
											<div class="col-sm-8" id="emailDiv">
										    	<label type="email" style="color:red" class="col-sm-4 control-label"  id="email" value="" name="email" placeholder="Adresse Mail" >  </label>
										    </div>
										</div>
                                        <div class="form-group">
											<label for="profile-email" class="col-sm-4 control-label">Confirmer l'Email</label>
											<div class="col-sm-8" id="emailDiv_confirm">
										    	<label type="email" style="color:red" class="col-sm-4 control-label"  id="email_confirm" value="" name="email_confirm" placeholder="adresse Mail">  </label>
										</div>
									</div>
								</div>
						</div>  
							</form>
                            <hr/>
							<div class="form-title">
								<h3>CNIB OU N°PASSEPORT</h3>
							</div>
                            <form class="form-horizontal" enctype="multipart/form-data">
								<div class="candidate-profile-form row">
									<div class="col-sm-6">
										<div class="form-group">
											<label for="name" class="col-sm-4 control-label">N°CNIB OU N°PASSEPORT:</label>
											<div class="col-sm-8" id="cnib">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" required id="cnibnumber" value="" name="cnibnumber" placeholder="">  </label>
										    </div>
										</div>
                                        <div class="form-group">
											<label for="name" class="col-sm-4 control-label">Confirmer N°CNIB OU N°PASSEPORT:</label>
											<div class="col-sm-8" id="cnibconfirm">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" required id="cnibnumber_confirm" value="" name="cnibnumber_confirm" placeholder="">  </label>
										    </div>
										</div>
										<div class="form-group">
											<label for="birthday" class="col-sm-4 control-label">Délivrée le:</label>
											<div class="col-sm-8" id="cnibdate">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="cnibdateissue" value="" name="cnibdateissue" placeholder="JJ-MM-AAAA">  </label>
										    </div>
										</div>
								    </div>
									<div class="col-sm-6">
										<div class="form-group">
											<label for="birthday" class="col-sm-4 control-label">Expire le:</label>
											<div class="col-sm-8" id="cnibvalide">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" id="cnibvaliduntil" value="" name="cnibvaliduntil" placeholder="JJ-MM-AAAA">  </label>
										    </div>
										</div>
                                        <div class="form-group">
											<label for="name" class="col-sm-4 control-label">Lieu de Délivrance:</label>
											<div class="col-sm-8" id="cnibpays">
										    	<label type="text" style="color:red"  class="col-sm-4 control-label" required id="cnibplaceofissue" value="" name="cnibplaceofissue" placeholder="Pays de delivrance">  </label>
										    </div>
										</div>
									</div>
								</div>
							</form>
							<hr/>
					</div> 
                        <div class="noo-main col-md-8" >   
                            <div class="job-action">
                                <a class="btn btn-primary" onclick="window.history.back()">Modifier mes informations</a>
                                <a class="btn btn-primary" href="User_accecptance_SignIn.php">Continuer l'enregistrement</a>
                            </div>
        
                        </div>
                        
				</div> 
			</div> 
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
		<a href="#" class="go-to-top hidden-print"><i class="fa fa-angle-up"></i></a>

		<script type='text/javascript' src='js/jquery.js'></script>
        <script type='text/javascript' src='js/field_verification.js'></script>
		<script type='text/javascript' src='js/jquery-migrate.min.js'></script>
		<script type='text/javascript' src='js/modernizr-2.7.1.min.js'></script>
		<script type='text/javascript' src='js/jquery.cookie.js'></script>
		<script type='text/javascript' src='js/jquery.blockUI.min.js'></script>
		<script type='text/javascript' src='js/imagesloaded.pkgd.min.js'></script>
		<script type='text/javascript' src='js/isotope-2.0.0.min.js'></script>
		<script type='text/javascript' src='js/jquery.touchSwipe.min.js'></script>
		<script type='text/javascript' src='js/bootstrap.min.js'></script>
		<script type='text/javascript' src='js/hoverIntent-r7.min.js'></script>
		<script type='text/javascript' src='js/superfish-1.7.4.min.js'></script>
		<script type='text/javascript' src='js/script.js'></script>
		<script type='text/javascript' src='js/chosen.jquery.min.js'></script>
		<script type='text/javascript' src='js/jquery.datetimepicker.js'></script>
		<script type='text/javascript' src='js/jquery.parallax-1.1.3.js'></script>
		<script type='text/javascript' src='js/jquery.carouFredSel-6.2.1-packed.js'></script>
		<script type='text/javascript' src='js/custom.js'></script>
        <script type='text/javascript' src='js/field_verification.js'></script>
		<script type='text/javascript' src='js/API.js'></script>
        
		<script type="text/javascript">
			jQuery(document).ready(function($) {
				$("#dateofbirth").datetimepicker({
					format: 'd-m-Y',
					timepicker: false,
					startDate:'1900/01/01',
					scrollMonth: false,
					scrollTime: false,
					scrollInput: false
				});
			});
            
			jQuery(document).ready(function($) {
				$("#cnibdateissue").datetimepicker({
					format: 'd-m-Y',
					timepicker: false,
					scrollMonth: false,
					scrollTime: false,
					scrollInput: false
				});
			});
            
            jQuery(document).ready(function($) {
				$("#cnibvaliduntil").datetimepicker({
					format: 'd-m-Y',
					timepicker: false,
					scrollMonth: false,
					scrollTime: false,
					scrollInput: false
				});
			});
		</script>
		
	</body>
</html>
