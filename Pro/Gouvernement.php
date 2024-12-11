<!doctype html>
<html lang="en-US">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        
		<link rel="shortcut icon" href="images/GN.png"/>
		<title>Ministères | Econcours</title>

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
									<li class="align-left">
										<a href="Acceuil.php">Accueil</a>
									</li>
									<li class="align-left">
										<a href="Concours.php">Concours</a>
									</li>
									<li class="current-menu-item align-left">
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
											<i class="fa fa-sign-in"></i>&nbsp;Mon Compte
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
				<div class="main-content container-boxed max offset">
					<div class="row">
						<div class="noo-main col-md-8">
							<div class="form-title">
								<h3>Ministères et Institutions</h3>
							</div>
							<div class="company-letters">
								<a href="#A">A</a>
								<a href="#C">C</a>
								<a href="#D">D</a>
								<a href="#E">E</a>
								<a href="#F">F</a>
								<a href="#I">I</a>
								<a href="#J">J</a>
								<a href="#M">M</a>
								<a href="#R">R</a>
								<a href="#S">S</a>
								<a href="#U">U</a>
							</div>
							<div class="masonry">
								<ul class="companies-overview masonry-container">
									<li class="company-group masonry-item">
										<div id="A" class="company-letter text-primary">A</div>
										<ul>
											<li class="company-name"  id="Administration" onclick="loadMinistry(this.id)">&bull;<a href="#"> Administration Territoriale, de la Décentralisation et de la Cohésion Sociale 
(MATD-CS)</a></li>
											<li class="company-name"  id="Affaires" onclick="loadMinistry(this.id)">&bull;<a href="#"> Affaires Étrangères et de la Coopération (MAEC)</a></li>
											<li class="company-name"  id="Agriculture" onclick="loadMinistry(this.id)">&bull;<a href="#"> Agriculture et des Aménagements  Hydro-Agricoles (MAAHA)</a></li>
											<li class="company-name" id="Autorité" onclick="loadMinistry(this.id)">&bull;<a href="#"> Autorité Supérieure de Contrôle d'État et de lutte contre la Corruption (ASCE/LC)</a></li>
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="C" class="company-letter text-primary">C</div>
										<ul>
											<li class="company-name" id="Commerce" onclick="loadMinistry(this.id)">&bull;<a href="#"> Commerce, de l'industrie et de l'Artisanat (MCIA)</a></li> 
											<li class="company-name" id="Communication" onclick="loadMinistry(this.id)">&bull;<a href="#"> Communication et des Relations avec le Parlement (MCRP)</a></li> 
											<li class="company-name" id="MCAT" onclick="loadMinistry(this.id)">&bull;<a href="#"> Culture, des Arts et du Tourisme (MCAT)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="D" class="company-letter text-primary">D</div>
										<ul>
											<li class="company-name"  id="Économie Numérique" onclick="loadMinistry(this.id)">&bull;<a href="#"> Développement de l'Économie Numérique  et des Postes  (MDENP)</a></li> 
											<li class="company-name" id="Droits" onclick="loadMinistry(this.id)">&bull;<a href="#"> Droits Humains et de la Promotion Civique (MJDHPC)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="E" class="company-letter text-primary">E</div>
										<ul>
											<li class="company-name" id="Eau" onclick="loadMinistry(this.id)">&bull;<a href="#"> Eau et de l'Assainissement (MEA)</a></li> 
											<li class="company-name"  id="Économie, des Finances" onclick="loadMinistry(this.id)">&bull;<a href="#"> Économie, des Finances et du Développement (MINEFID)</a></li> 
											<li class="company-name"  id="Éducation" onclick="loadMinistry(this.id)">&bull;<a href="#"> Éducation Nationale, de l'Alphabétisation et de la Promotion des Langues Nationales (MENA-PLN)</a></li> 
											<li class="company-name" id="Économie Verte" onclick="loadMinistry(this.id)">&bull;<a href="#"> Environnement, de l'Économie Verte et du Changement Climatique (MEEVCC)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="F" class="company-letter text-primary">F</div>
										<ul>
											<li class="company-name" id="Femme" onclick="loadMinistry(this.id)">&bull;<a href="#"> Femme, de la Solidarité Nationale, de la Famille et de l'Action Humanitaire </a></li> 
											<li class="company-name" id="Fonction" onclick="loadMinistry(this.id)">&bull;<a href="#"> Fonction Publique, du Travail et de la Protection Sociale (MFPTPS)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="I" class="company-letter text-primary">I</div>
										<ul>
											<li class="company-name" id="Infrastructures" onclick="loadMinistry(this.id)">&bull;<a href="#"> Infrastructures (MI)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="J" class="company-letter text-primary">J</div>
										<ul>
											<li class="company-name" id="Jeunesse" onclick="loadMinistry(this.id)">&bull;<a href="#"> Jeunesse et de la Promotion de l'entrepreunariat des Jeunes (MJPEJ)</a></li> 
											<li class="company-name" id="Justice" onclick="loadMinistry(this.id)">&bull;<a href="#"> Justice (MJ)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="M" class="company-letter text-primary">M</div>
										<ul>
											<li class="company-name" id="Mines" onclick="loadMinistry(this.id)">&bull;<a href="#"> Mines et Carrières (MMC)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="R" class="company-letter text-primary">R</div>
										<ul>
											<li class="company-name" id="Ressources" onclick="loadMinistry(this.id)">&bull;<a href="#"> Ressources Animales et Halieutiques (MRAH)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="S" class="company-letter text-primary">S</div>
										<ul>
											<li class="company-name" id="Santé" onclick="loadMinistry(this.id)">&bull;<a href="#"> Santé(MS)</a></li> 
											<li class="company-name" id="Sports" onclick="loadMinistry(this.id)">&bull;<a href="#"> Sports et des Loisirs (MSL)</a></li> 
										</ul>
									</li>
									<li class="company-group masonry-item">
										<div id="U" class="company-letter text-primary">U</div>
										<ul>
											<li class="company-name" id="Urbanisme" onclick="loadMinistry(this.id)">&bull;<a href="#"> Urbanisme et de l'Habitat (MUH)</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div class=" noo-sidebar col-md-4">
							<div class="noo-sidebar-wrap">
                                <br>
                                <br>
                                <br>
                                <br>
								<div class="widget noo-job-count-widget">
									<ul>
										<li>
											<a href="#">Ministères</a>
											<p class="jobs-count">23</p>
										</li>
										<li>
											<a href="#">Concours disponibles</a>
											<p class="jobs-count">210</p></li>
										</ul>
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
		<script type='text/javascript' src='js/API.js'></script>
	</body>
</html>