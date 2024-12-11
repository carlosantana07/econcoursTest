<!doctype html>
<html lang="en-US">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

		<link rel="shortcut icon" href="../images/GN.png"/>
		<title>Acceuil | Econcours</title>

		<link rel='stylesheet' href='../css/style.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='../css/custom.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='../css/font-awesome.min.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='../css/jquery.datetimepicker.css' type='text/css' media='all'/>
		<link rel='stylesheet' href='../css/chosen.css' type='text/css' media='all'/>
        <link rel='stylesheet' href='../css/docs2.css' type='text/css' media='all'/>

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body onload="alertMessageUser()">
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
									<i class="fa fa-user" id="mobileUser"></i>
								</a>
								<a href="Acceuil.php" class="navbar-brand">
									<img class="noo-logo-img noo-logo-normal" src="../images/GN.png" alt="">
									<img class="noo-logo-mobile-img noo-logo-normal" src="../images/GN.png" alt="">
								</a>
							</div>
							<nav class="collapse navbar-collapse noo-user-navbar-collapse">
								<ul class="navbar-nav sf-menu">
                                    <li><a href="Profil_Candidat.php"><i class="fa fa-edit"></i>Mon Profil</a></li>
                                    <li><a href="Candidat_Concours.php"><i class="fa fa-file-text-o"></i>Mes Concours</a></li>
                                    <li class="divider"></li>
                                    <li><a href="Candidat_Documents.php"><i class="fa fa-file-text-o"></i>Mes Documents</a></li>
                                    <li><a href="import_document.php"><i class="fa fa-users"></i>Importer Documents</a></li>
									<li><a href="#" onclick=deconnexion(); ><i class="fa fa-key"></i> Déconnexion</a></li>
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
                                    <li class="nav-item-member-profile login-link">
										<a href="Profil_Candidat.php" class="sf-with-ul">
											<span class="profile-name" id="profil"></span>
											<span class="profile-avatar">
												<img alt="" src="../images/user.jpg" height="40" width="40">
											</span>
										</a>
										<ul class="sub-menu">
											<li><a href="Profil_Candidat.php"><i class="fa fa-edit"></i>Mon Profil</a></li>
											<li><a href="Candidat_Concours.php"><i class="fa fa-file-text-o"></i>Mes Concours</a></li>
											<li class="divider"></li>
											<li><a href="Candidat_Documents.php"><i class="fa fa-file-text-o"></i>Mes Documents</a></li>
											<li><a href="import_document.php"><i class="fa fa-users"></i>Importer Documents</a></li>
											<li><a  onclick=deconnexion(); href="#"><i class="fa fa-sign-out"></i>Déconnexion</a></li>
										</ul>
									</li>
									<li class="nav-item-member-profile login-link align-center">
										<a href="#" onclick=deconnexion(); class="member-links member-login-link" id="profil">
											<i class="fa fa-sign-in" ></i>&nbsp;Déconnexion
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
							<div class="row pt-0 pb-0">
								<div class="col-md-12">
                                    <br>
                                    <br>
                                    <div class="section-title">
                                        <p class="search-top-title">Bienvenue</p>
                                        <h2>E-CONCOURS</h2>
                                        <p class="search-top-title">Le portail d'accès à la Fonction Publique.</p>
                                    </div>
                                    <div class="job-search-info text-center">
                                        <img class="noo-logo-img noo-logo-normal" src="../images/GN.png"  height="142" width="142" alt="">
                                    </div>
                                <br>
                                <br>
                                </div>
							</div>

                            <div class="section-title"><a target="_blank">Nombre de visiteurs:</a><!-- Start of WebFreeCounter Code -->
<a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=gemfdaxa&nd=9&style=1" border="0" alt="visitor counter"></a>
<!-- End of WebFreeCounter Code -->

            </div>
							<div class="row bg-primary">
								<div class="col-md-12">
									<div class="row"><div class="section-title">
                    <h3>Comment s'inscrire?</h3>
                    <p class="search-top-title">Voici ci-dessous les étapes permettant l'inscription à un concours.</p><br>
                                            <p class="search-top-title">Selectionnez l'option 1 pour débuter.</p><br>
                                            <span href="faq.php" class="fa fa-arrow-right noo-step-icon-class"></span>
                                            <a href="faq.php"><p style="color:white">Aide?</p></a>
                </div>
										<div class="col-md-12">
											<div class="noo-step-icon clearfix">
												<ul class="noo-step-icon-3">
													<li>
														<span class="noo-step-icon-item">
															<a onclick="accountCreated()">
																<span class="fa fa-key noo-step-icon-class"></span>
																<span class="noo-step-icon-title">
																	1.Créer un compte
																</span>
															</a>
														</span>
													</li>
													<li>
														<span class="noo-step-icon-item">
															<a href="Concours.php">
																<span class="fa fa-search-plus noo-step-icon-class"></span>
																<span class="noo-step-icon-title">
																	2.Rechercher et postuler à des concours
																</span>
															</a>
														</span>
													</li>
													<li>
														<span class="noo-step-icon-item">
															<a href="import_document.php">
																<span class="fa fa-file-text-o noo-step-icon-class"></span>
																<span class="noo-step-icon-title">
																	3. Sauvegarder des documents
																</span>
															</a>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
                            <section class="contact-detail">
                                <div class="container">
                                    <div class="section-title">
                                        <h2>Contact</h2>
                                        <p>L'équipe d'assistance est à votre écoute 7/7 de 8h à 20h.</p>
                                    </div>
                                    <div class="contact-boxView">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="contact-box red" >
                                                    <div class="icon-box">
                                                        <i class="fa fa-map-marker"></i>
                                                    </div>
                                                    <h4>Liens utiles</h4>
                                                     <div class="contact-lien-utile">
                                                    <a href="https://www.fonction-publique.gov.bf/" target="_blank"><li>Ministère de la Fonction Publique du Travail et de la Protection Sociale</li></a>
                                                    <a href="http://www.concours.gov.bf/" target="_blank"><li>Agence Générale de Recrutement de l'Etat</li></a>
                                                    <a href="http://www.guichetvirtuel.gov.bf/" target="_blank"><li>Guichet Virtuel </li></a>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="contact-box yello">
                                                    <div class="icon-box">
                                                        <i class="fa fa-phone"></i>
                                                    </div>
                                                    <h4>Numéros de téléphone</h4>
                                                    <li>01 16 05 05</li>
                                                    <li>01 16 12 12</li>
                                                    <li>01 16 08 08</li>
                                                    <li>01 16 09 09</li>
                                                    <li>07 83 45 45</li>
                                                    <li>07 83 64 64</li>
                                                    <li>07 83 68 68</li>
                                                    <li>58 95 99 04</li>
                                                    <li>58 95 99 06</li>
                                                    <li>58 95 99 05</li>
                                                    <li>58 95 99 08</li>
                                                    <li>07 32 65 65</li>
                                                    <li>07 32 87 87 </li>
                                                    <li>01 16 13 13</li>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="contact-box green">
                                                    <div class="icon-box">
                                                        <i class="fa fa-envelope"></i>
                                                    </div>
                                                    <h4>adresse mail</h4>
                                                    <p><li>econcours@mfp.gov.bf</li></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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

		<script type='text/javascript' src='../js/jquery.js'></script>
		<script type='text/javascript' src='../js/jquery-migrate.min.js'></script>
		<script type='text/javascript' src='../js/modernizr-2.7.1.min.js'></script>
		<script type='text/javascript' src='../js/jquery.cookie.js'></script>
		<script type='text/javascript' src='../js/jquery.blockUI.min.js'></script>
		<script type='text/javascript' src='../js/imagesloaded.pkgd.min.js'></script>
		<script type='text/javascript' src='../js/isotope-2.0.0.min.js'></script>
		<script type='text/javascript' src='../js/jquery.touchSwipe.min.js'></script>
		<script type='text/javascript' src='../js/bootstrap.min.js'></script>
		<script type='text/javascript' src='../js/hoverIntent-r7.min.js'></script>
		<script type='text/javascript' src='../js/superfish-1.7.4.min.js'></script>
		<script type='text/javascript' src='../js/script.js'></script>
		<script type='text/javascript' src='../js/chosen.jquery.min.js'></script>
		<script type='text/javascript' src='../js/jquery.datetimepicker.js'></script>
		<script type='text/javascript' src='../js/jquery.parallax-1.1.3.js'></script>
		<script type='text/javascript' src='../js/jquery.carouFredSel-6.2.1-packed.js'></script>
		<script type='text/javascript' src='../js/custom.js'></script>
        <script type='text/javascript' src='../js/API.js'></script>
		<script>
			jQuery('document').ready(function ($) {
				$('#noo-slider-3 .sliders').carouFredSel({
					infinite: true,
					circular: true,
					responsive: true,
					debug : false,
					items: {
					  start: 0
					},
					scroll: {
					  items: 1,
					  duration: 400,

					  fx: "scroll"
					},
					auto: {
					  timeoutDuration: 3000,

					  play: true
					},

					pagination: {
					  container: "#noo-slider-3-pagination"
					},
					swipe: {
					  onTouch: true,
					  onMouse: true
					}
				});
				$('#noo-tabs-2 a:eq(0)').tab('show');
			});
		</script>
	</body>
</html>