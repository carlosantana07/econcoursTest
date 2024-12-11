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
        <link href="css/loader.css" rel="stylesheet"><!--  loader css -->

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body>
    	<div id="loader-wrapper">
			<div id="loader"></div>
			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
		</div>
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
										<a href="Sign_In.php" class="member-links member-login-link">
											<i class="fa fa-sign-in"></i>&nbsp;Mon Compte
										</a>
									</li>
							<!--		<li class="nav-item-member-profile register-link">
										<a class="member-links member-register-link" href="Enregistrement.php">
											<i class="fa fa-key"></i>&nbsp;Nouveau Compte
										</a>
									</li>-->
								</ul>
							</nav> 
                            <a><br>MFPTPS</a>  
						</div>  
					</div>  
				</div>
			</header>
			<div class="container-wrap">
				<div class="container-boxed max offset main-content single-noo_job">
					<div class="row">
                        
						<div class="noo-sidebar col-md-4">
							<div class="noo-sidebar-wrap">
								<div class="widget widget_noo_advanced_search_widget">
									<h4 class="widget-title">Recherche</h4>
									<form class="widget-advanced-search">
										<div class="form-group">
											<label class="sr-only" for="search-keyword">Rechercher un concours</label>
											<input type="text" class="form-control" id="search" name="s" placeholder="Rechercher un concours" value="" onkeyup="comboSearchMinistere()"/>
										</div>
										<div class="form-group">
											<label class="h5">Niveau d'Étude</label>
											<div class="advance-search-form-control">
												<select name="category" class="form-control-chosen form-control" id="search-academic" onchange="comboSearchMinistere()">
													<option class="text-placeholder" value="">Choisir un Niveau d'Étude</option>
                                                    <option value="BEPC">CEPE</option>
                                                    <option value="BEPC">BEPC</option>
                                                    <option value="Baccalaureat">Baccalaureat</option>
                                                    <option value="DEUG II">DEUG II</option>
                                                    <option value="Licence">Licence</option>
                                                    <option value="Licence LMD">Licence LMD</option>
                                                    <option value="Master">Maitrise / Master</option>
                                                    <option value="Doctorat">Doctorat</option>
												</select>
											</div>
										</div>
										<div class="form-group">
											<label class="h5">Niveau Cycle</label>
											<div class="advance-search-form-control">
												<select name="category" class="form-control-chosen form-control" id="search-cycle" onchange="comboSearchMinistere()">
													<option class="text-placeholder" value="">Choisir un Cycle</option>
                                                    <option value="Cycle P">Cycle P</option>
                                                    <option value="Cycle A">Cycle A</option>
                                                    <option value="Cycle B">Cycle B</option>
                                                    <option value="Cycle C">Cycle C</option>
                                                    <option value="Cycle D">Cycle D</option>
                                                    <option value="Cycle E">Cycle E</option>
												</select>
											</div>
										</div>
                                        <button type="reset" class="btn btn-primary btn-search-submit" onclick="clearSearch()">Nouvelle Recherche</button>
									</form>
								</div>
							</div>
						</div> 
						<div class="noo-main col-md-8">
							<div class="job-listing">
								<div class="jobs posts-loop">
									<div class="posts-loop-title" id="titre">
									</div>
								<div class="posts-loop-title">
								</div>
								<div class="posts-loop-content" id="wrap-concours">
									
								</div>
                                
								</div>
							</div>
						</div>  
					</div>  
				</div>  
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
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
		<script type='text/javascript' src='js/custom.js'></script>
        
		<script type='text/javascript' src='js/API.js'></script>
        
        <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/owl.carousel.js"></script>
    <script type="text/javascript" src="js/jquery.form-validator.min.js"></script>
    <script type="text/javascript" src="js/placeholder.js"></script>
    <script type="text/javascript" src="js/coustem.js"></script>
	</body>
</html>