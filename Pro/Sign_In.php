<!doctype html>
<html lang="en-US">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        
		<link rel="shortcut icon" href="images/GN.png"/>
		<title>Connexion | Econcours</title>

		<link rel='stylesheet' href='css/style.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/custom.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/font-awesome.min.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/jquery.datetimepicker.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='css/chosen.css' type='text/css' media='all'/>

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
								<h1 class="sr-only">MFPTS</h1> 
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
									<li class="current-menu-item align-left">
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
			<div class="container-wrap">
				<div class="main-content container-fullwidth">
					<div class="row">
						<div class="noo-main col-md-12">
							<div class="row bg-primary">
								<div class="col-md-12">			
                                    <div class="modal-dialog modal-member">
                                        <br>
                                        <br>
                                        <br>
                                        <br>
				                        <div class="modal-content">
					                       <div class="modal-header">
						                      <h4 class="modal-title">Connexion à mon profil</h4>
					                       </div>
					                       <div class="modal-body">
						                  <form class="noo-ajax-login-form form-horizontal">
							                 <div class="form-group row">
                                                 <label for="name" class="col-sm-4 control-label">Numéro de téléphone</label>
								                <div class="col-sm-9" id="usernameDiv">
									               <input type="number" class="log form-control" id="username" name="log" value="" required placeholder="Numéro de téléphone" onblur="validateTelephoneSignIn()">
								                </div>
							                 </div>
							                 <div class="form-group row">
								                <label class="col-sm-3 control-label">Mot de Passe</label>
								                <div class="col-sm-9" id="passwordDiv">
									               <input type="password" class="pwd form-control" id="password" required value="" name="pwd" placeholder="Mot de Passe">
                                                    
								                </div>
							                 </div>
							                 <div class="form-actions form-group text-center">
								                <button type="reset" class="btn btn-primary" onclick="loginLoading()">Connexion</button>
								                <div class="login-form-links">
									               <span><a href="#" onclick="help()"><i class="fa fa-question-circle" ></i> Mot de Passe oublié?</a></span>
                                                    <span><a href="#" onclick="help()"><i class="fa fa-question-circle" ></i> Numéro de téléphone oublié?</a></span>
									               <span>
										              <a href="Enregistrement.php" class="member-register-link" >
											             Créer un profil <i class="fa fa-long-arrow-right"></i>
										              </a>
									               </span>
								                </div>
							                 </div>
						              </form>
					                   </div>
				                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                        <br>   
			                     </div>
								</div>
							</div>
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
		<script type='text/javascript' src='js/API.js'></script>
        <script type='text/javascript' src='js/field_verification.js'></script>
        
    
    
		<div class="memberModalRegister modal fade" id="errorMessages" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog modal-member">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close" id="buttonModal">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title">Alerte</h4>
					</div>
					<div class="modal-body">
						<form class="noo-ajax-register-form form-horizontal container-boxed2">   
                        <div class="job-desc">
                        <p id="messageErreur">Erreur</p>
                            <br>
							<div class="form-group text-center">
                                <button type="reset" class="btn btn-primary" onclick="closeModal()">Ok</button>
							</div>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>