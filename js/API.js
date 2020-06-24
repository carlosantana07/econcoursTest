//global variables
var concours = [];
var nomConcours = [];
var nomMinistere = [];
var nomCycle = [];
var nomAcademique = [];
var descriptionConcours = [];
var typeConcours = [];
var dateConcours = [];
var srcRecto;
var srcVerso;
var ministryConcours;
const ministryLength = 60;
//==========================================================================================================================================
// Below function Executes on click of login button.
function login(){
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/auth/login';
    
    //store token
    var token;

// Login  method implementation:
async function postData(data ={}) {
    
    //setting verification data variables
    data.telephone= "+"+document.getElementById("username").value;
    data.password = document.getElementById("password").value;
    
    //console.log("numero: "+ data.telephone);
    //console.log("numero: "+ data.password);
    
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    
        //console.log(data);
        token = data.access_token;
    try{
    if (data.success){ 
        localStorage.userid = data.data.id;
        localStorage.candidat_id = data.data.user_id;
        localStorage.candidatecode = data.data.candidatecode;
        localStorage.firstname = data.data.firstname;
        localStorage.lastname = data.data.lastname;
        localStorage.maidenname = data.data.maidenname;
        localStorage.telephone = data.data.telephone;
        localStorage.dateofbirth = data.data.dateofbirth;
        localStorage.address = data.data.address;
        localStorage.email = data.data.email;
        localStorage.profession = data.data.profession;
        localStorage.sex = data.data.sex;
        localStorage.role = data.role;
        localStorage.ministere = data.data.ministere;
        localStorage.corps = data.data.corps;
        localStorage.cnibnumber = data.data.cnibnumber;
        localStorage.cnibplaceofissue = data.data.cnibplaceofissue;
        localStorage.cnibdateissue = data.data.cnibdateissue;
        localStorage.cnibvaliduntil = data.data.cnibvaliduntil;
        localStorage.title = data.data.title;
        localStorage.access_token = data.access_token;
        
        
        window.location.href = "Candidate_Profile/Concours.html"; // Redirecting to concours page
        return true;
    }else if(data.errors.Telephone == "This telephone doesn't match with any user in our Data base"){
        //setting the textfield as red if there's an error
        document.getElementById("usernameDiv").className = document.getElementById("usernameDiv").className + " has-error";  // this adds the error class
        alert("Aucun compte n'est affilié à ce numéro!");
        return (false);
    }
    }catch(error){
        if(data.code == 402){
        document.getElementById("passwordDiv").className = document.getElementById("passwordDiv").className + " has-error";  // this adds the error class
        alert("Mot de passe invalide!");
        return (false);
    }
    }
  });

}
//==========================================================================================================================================
// populates user profile.
function loadProfile(){
    
    setUser();
    
    document.getElementById("firstname").value = localStorage.getItem("firstname");
    document.getElementById("lastname").value = localStorage.getItem("lastname");
    document.getElementById("telephone").value = localStorage.getItem("telephone");
    document.getElementById("dateofbirth").value = localStorage.getItem("dateofbirth");
    document.getElementById("address").value = localStorage.getItem("address");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("matricule").value = localStorage.getItem("profession");
    document.getElementById("sex").value = localStorage.getItem("sex");
    document.getElementById("cnibnumber").value = localStorage.getItem("cnibnumber");
    document.getElementById("cnibplaceofissue").value = localStorage.getItem("cnibplaceofissue");
    document.getElementById("cnibdateissue").value = localStorage.getItem("cnibdateissue");
    document.getElementById("cnibvaliduntil").value = localStorage.getItem("cnibvaliduntil");
    document.getElementById("candidateID").value = localStorage.getItem("candidatecode");
    
     if((document.getElementById("matricule").disabled == true && document.getElementById("ministere").disabled == true && document.getElementById("corps").disabled == true)){
          document.getElementById("role").value = "Direct";
         document.getElementById("matricule").value = "";
         document.getElementById("corps").value = "";
         document.getElementById("ministere").value = "";
         
         //setting the type of concours he can apply to 
         localStorage.typeConcours =  "Direct";
         
     }else{
         
         document.getElementById("role").value = "Professionnel";
         document.getElementById("matricule").value = localStorage.getItem("matricule");
         document.getElementById("corps").value = localStorage.getItem("corps");
         document.getElementById("ministere").value = localStorage.getItem("ministere");
         
         //setting the type of concours he can apply to 
         localStorage.typeConcours =  "Direct";
     }
    
    if(document.getElementById("maidenname").disabled == true){
        document.getElementById("maidenname").value = "";
        localStorage.maiden = "";
    }else {
        document.getElementById("maidenname").value = localStorage.maidenname;
    }
  
}
//==========================================================================================================================================
// Below function to change user password .
function changePassword(){
    //api url for login verification
    var url = 'https://soasga.com//api/v1/auth/password/edit';

// Login  method implementation:
async function postData(data ={}) {
    
    //setting verification data variables
    data.telephone= document.getElementById("telephone").value;
    data.password= document.getElementById("old_pass").value;
    data.new_password = document.getElementById("new_pass").value;
    data.password_confirm = document.getElementById("new_pass_confirm").value;
    
    //console.log("champ telephone: " + document.getElementById("telephone").value);
    //console.log("champ old password: " + document.getElementById("old_pass").value);
    //console.log("champ new password: " + document.getElementById("new_pass").value);
    //console.log("champ new password_confirm: " + document.getElementById("new_pass_confirm").value);
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    
    //console.log("telephone: " + data.telephone);
    //console.log("password: " + data.password);
    //console.log("password_confirm: " + data.password_confirm);
    
     if(data.code == 200)
        alert("Mot de passe changé!");
    else
        alert("Erreur, Reessayer!");
  });

}
//==========================================================================================================================================
// Below function to change user password .
function signUp(){
    //api url for login verification
    var url = 'https://soasga.com//api/v1/auth/signup';
    //user credentials
    var user = {login: false};
    //store token
    var token;
    try{

// Login  method implementation:
async function postData(data ={}) {
    //setting verification data variables
    
    data.firstname = (document.getElementById("firstname").value);
    data.lastname = (document.getElementById("lastname").value);
    data.telephone = "+"+document.getElementById("telephone").value;
    data.dateofbirth = document.getElementById("dateofbirth").value;
    data.address= document.getElementById("address").value;
    data.email = document.getElementById("email").value;
    data.profession = "aucun";
    data.matricule = document.getElementById("matricule").value;
    data.sex= document.getElementById("sex").value;
    //data.profilepicture= user.profilepicture;
    data.role= "CND";
    data.cnibnumber = document.getElementById("cnibnumber").value;
    data.password = document.getElementById("new_pass").value;
    data.password_confirm = document.getElementById("new_pass_confirm").value;
    data.cnibplaceofissue= document.getElementById("cnibplaceofissue").value;
    data.cnibdateissue= document.getElementById("cnibdateissue").value;
    data.cnibvaliduntil = document.getElementById("cnibvaliduntil").value;
    
    if(document.getElementById("ministere").value == "" || document.getElementById("ministere").value == null)
        data.ministere = "-";
    else
        data.ministere = document.getElementById("ministere").value;
    
    if(document.getElementById("corps").value == "" || document.getElementById("corps").value == null)
        data.corps = "-";
    else
        data.corps = document.getElementById("corps").value;
    
    
    if(document.getElementById("matricule").value == "" || document.getElementById("matricule").value == null)
        data.matricule = "-";
    else
        data.matricule = document.getElementById("matricule").value;
    
    if(document.getElementById("maidenname").value == "" || document.getElementById("maidenname").value == null)
        data.maidenname = "-";
    else
        data.maidenname = document.getElementById("maidenname").value;
    
    
    
    //console.log("matricule: "+document.getElementById("matricule").value);

    
    console.log("firstname: " + data.firstname);
    console.log("lastname: " + data.lastname);
    console.log("telephone: " + data.telephone);
    console.log("dateofbirth: " + data.dateofbirth);
    console.log("address: " + data.address);
    console.log("email: " + data.email);
    console.log("sex: " + data.sex);
    console.log("role: " + data.role);
    console.log("cnibnumber: " + data.cnibnumber);
    console.log("password: " + data.password);
    console.log("password_confirm: " + data.password_confirm);
    console.log("cnibplaceofissue: " + data.cnibplaceofissue);
    console.log("cnibvaliduntil: " + data.cnibvaliduntil);
    console.log("ministere: " + data.ministere);
    console.log("cnibdateissue: " + data.cnibdateissue);
    console.log("corps: " + data.corps);
    console.log("profession: " + data.profession);
    console.log("maiden: " + data.maidenname);
    
    
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    
    //console.log(data);
     if(data.code==201){
        alert("Votre compte est créé, veuillez valider votre numéro de téléphone!");
        window.location.href = "OTP.html";  
    
     }else if(data.errors.Phone == "The telephone is already used"){
        alert("Le numéro de téléphone est déjà en utilisation");
    }else if(data.errors.Email == "The email is already used")
        alert("L'addresse mail est déjà en utilisation!");
  });}catch(error){
}

}
//==========================================================================================================================================
// populates user profile.
function updateProfile(){
    
   //api url for login verification
    var url = SERVER_URL_PREFIX + '/candidat/update';
    //user credentials
    var user = {login: false};
    //store token
    var token;
    //number of attemps

    
    //storing user password and username
    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.telephone = document.getElementById("telephone").value;
    user.dateofbirth = document.getElementById("dateofbirth").value;
    user.address = document.getElementById("address").value;
    user.email = document.getElementById("email").value;
   // user.profession = document.getElementById("profession").value;
    user.profession = "test";
    user.sex = document.getElementById("sex").value;
    //user.profilepicture = "test";
   // user.role = document.getElementById("role").value;
    //user.password = document.getElementById("new_pass").value;
   // user.password_confirm = document.getElementById("new_pass_confirm").value;
    user.cnibplaceofissue = document.getElementById("cnibplaceofissue").value;
    user.cnibdateissue = document.getElementById("cnibdateissue").value;
    user.cnibvaliduntil = document.getElementById("cnibvaliduntil").value;
   // user.ministere = document.getElementById("ministere").value;
   // user.corps = document.getElementById("corps").value;
    

// Login  method implementation:
async function postData(data ={}) {
    //setting verification data variables
    data.candidat_id= localStorage.getItem("candidat_id");
    data.firstname = user.firstname;
    data.lastname= user.lastname;
    data.telephone = user.telephone;
    data.dateofbirth = user.dateofbirth;
    data.address= user.address;
    data.email = user.email;
    data.profession = user.profession;
    data.sex= user.sex;
    //data.profilepicture= user.profilepicture;
    //data.role= user.role;
    //data.cnibnumber = user.cnibnumber;
   // data.password = user.password;
   // data.password_confirm = user.password_confirm;
    data.profilepicture = "null";
    data.cnibplaceofissue= user.cnibplaceofissue;
    data.cnibdateissue= user.cnibdateissue;
    data.cnibvaliduntil = user.cnibvaliduntil;
   // data.ministere = user.ministere;
  //  data.corps= user.corps;
    
    //console.log("firstname: " + data.firstname);
    //console.log("lastname: " + data.lastname);
    //console.log("telephone: " + data.telephone);
    //console.log("dateofbirth: " + data.dateofbirth);
    //console.log("address: " + data.address);
    //console.log("email: " + data.email);
    //console.log("sex: " + data.sex);
    //console.log("role: " + data.role);
    //console.log("cnibnumber: " + data.cnibnumber);
    //console.log("password: " + data.password);
    //console.log("password_confirm: " + data.password_confirm);
    //console.log("cnibplaceofissue: " + data.cnibplaceofissue);
    //console.log("cnibvaliduntil: " + data.cnibvaliduntil);
    //console.log("ministere: " + data.ministere);
    //console.log("cnibdateissue: " + data.cnibdateissue);
    //console.log("corps: " + data.corps);
    //console.log("profession: " + data.profession);
    
    
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    //console.log("data: 2 " + data);
     if(data.code==201){
        alert("Profil mise à jour!");
         window.location.href = "Profil_Candidat.html"; 
    
     }else
        alert("Erreur, Reessayer!");
  });

  
}
//==========================================================================================================================================
//Load Concours
// Below function Executes on click of login button.
function loadAllConcours(){
    
    //setting the user
    setUser();
    
    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    var i;
    var count = 0;
    concours.length = 0;
    for (i = 0; i < data.data.length; i++) {
            count++;
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = i;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+i+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
    }
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
function loadConcoursPro(){
    setUser();
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    concours.length = 0;
    var i;
    var count = 0;
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].type).toLowerCase()).search("pro")>=0){
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = count;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+count+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
        count++;
    }
    }
    
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
//Load Concours
// Below function Executes on click of login button.
function loadConcoursDirect(){
    
    setUser();
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    var i;
    var count = 0;
    concours.length = 0;
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].type).toLowerCase()).search("direct")>=0){
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = count;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+count+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article);  
        //=====================================================================
        count++;
    }
    }
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
function loadConcoursProAcceuil(){
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    concours.length = 0;
    var i;
    var count = 0;
   
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].type).toLowerCase()).search("pro")>=0){
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = count;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+count+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
        count++;
    }
    }
    
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
//Load Concours
// Below function Executes on click of login button.
function loadConcoursDirectAcceuil(){
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    var i;
    var count = 0;
    concours.length = 0;
    
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].type).toLowerCase()).search("direct")>=0){
            
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = count;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+count+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
        count++;
    }
    }
    //console.log(count);
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
//Load Concours
// Below function Executes on click of login button.
function loadAllConcoursAcceuil(){
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    concours.length = 0;
    var i;
    for (i = 0; i < data.data.length; i++) {
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        article.id = i;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        seeMore.id = i;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+i+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
        //console.log(concours.length);
    }
});
        
        //localStorage.setItem("quentinTarantino", JSON.stringify(movies));
}
//==========================================================================================================================================
function saveConcoursInfo(id){    
    localStorage.displayName = nomConcours[id];
    localStorage.ministere = nomMinistere[id];
    localStorage.type = typeConcours[id];
    localStorage.description = descriptionConcours[id];
    localStorage.date = dateConcours[id];
    localStorage.concoursID = id;
    localStorage.degree = nomAcademique[id];
    localStorage.cycle = nomCycle[id];
    
}
//==========================================================================================================================================
function loadConcoursInfo(){
    
    //setting the user 
    setUser();
    
    //creating the tags
    //=====================================================================    
    var pageHeading = document.createElement("div");
    pageHeading.className = "page-heading-info";
    
    var pageTitle = document.createElement("h1");
    pageTitle.className = "page-title";
    
    var pageSubHeading = document.createElement("div");
    pageSubHeading.className = "page-sub-heading-info";
    
    var contentMeta = document.createElement("p");
    contentMeta.className = "content-meta";
    
    var date = document.createElement("span");
    
    var time = document.createElement("time");
    time.className = "entry-date";
    time.setAttribute("datetime","2015-08-10T09:46:53+00:00");
    
    var iconTime = document.createElement("i");
    iconTime.className = "fa fa-calendar";
    
    var print = document.createElement("span");
    
    var printtext = document.createElement("a");
    printtext.href = "#";
    
    var printIcon = document.createElement("i");
    printIcon.classname = "fa fa-print";
    printtext.addEventListener("click", function() {window.print();});
    
    var colone = document.createElement("div");
    colone.className = "noo-main col-md-8";
    
    var job = document.createElement("div");
    job.className = "job-desc";
    
    var communique = document.createElement("h3");
    
    var comuniqueText = document.createElement("P");
    
    var description = document.createElement("h3");
    
    var descriptionText = document.createElement("P");
    
    var howApply = document.createElement("h3");
    
    var howApplyDescription = document.createElement("P");
    
    var pretRequit = document.createElement("h3");
    
    var pretRequitOL = document.createElement("ol");
    
    var pretRequitli = document.createElement("P");
    
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "job-action";
    buttonDiv.href = "Pay.html";
    
    
    var buttonText2 = document.createElement("a");
    buttonText2.className = "btn btn-primary";
    buttonText2.href = "concours.html"
    
    var buttonText = document.createElement("a");
    buttonText.className = "btn btn-primary";
    buttonText.href = "Pay.html";
    
    
    
    var ministryDiv = document.createElement("span");
    var ministryText = document.createElement("a");
    var ministryIcon = document.createElement("i");
    ministryIcon.className = "fa fa-map-marker";
    
    
    //ministry name
    var niveauEtude = document.createElement("span");
    niveauEtude.className = "job-company";
    var niveauEtudeText = document.createElement("a");
    var niveauEtudeIcon = document.createElement("i");
    niveauEtudeIcon.className = "fa fa-graduation-cap";
    //=====================================================================
    //ministry name
    var niveauCycle = document.createElement("span");
    niveauCycle.className = "job-company";
    var niveauCycleText = document.createElement("a");
    var niveauCycleIcon = document.createElement("i");
    niveauCycleIcon.className = "fa fa-repeat";
    //=====================================================================
    
    //study level
    niveauEtudeText.appendChild(document.createTextNode(localStorage.getItem("degree")));
    niveauEtude.appendChild(niveauEtudeIcon);
    niveauEtude.appendChild(niveauEtudeText);
        
    //cycle level
    niveauCycleText.appendChild(document.createTextNode(localStorage.getItem("cycle")));
    niveauCycle.appendChild(niveauCycleIcon);
    niveauCycle.appendChild(niveauCycleText);
    
    
    ministryText.appendChild(document.createTextNode(localStorage.getItem("ministere")));
    ministryDiv.appendChild(ministryIcon);
    ministryDiv.appendChild(ministryText);
    
    //creating tag tree
    pageTitle.appendChild(document.createTextNode(localStorage.getItem("displayName")));
    pageHeading.appendChild(pageTitle);
    
    time.appendChild(iconTime);
    time.appendChild(document.createTextNode(localStorage.getItem("date")));
    date.appendChild(time);
    
    
    printIcon.appendChild(document.createTextNode("Imprimer"));
    printtext.appendChild(printIcon);
    print.appendChild(printtext);
    
    contentMeta.appendChild(ministryDiv);
    contentMeta.appendChild(niveauEtude);
    contentMeta.appendChild(niveauCycle);
    contentMeta.appendChild(date);
    contentMeta.appendChild(print);
    
    pageSubHeading.appendChild(contentMeta);
    
    var textCommunique = indent("Le public burkinabè est informé de l’ouverture, au titre de l’année 2019, d’un concours direct de recrutement de dix (10) Elèves Ingénieurs du Génie Rural option hydrogéologie dont six (06) hommes et quatre (04) femmes à former à l’Ecole nationale des ingénieurs Abdramane Baba TOURE de Bamako au Mali (ENI-ABT) dans le centre unique de Ouagadougou, pour le compte du Ministère de l’Eau et de l’Assainissement. ");
    
    var aCommunique = indent("Peuvent prendre part à ce concours, les candidats des deux (02) sexes, de nationalité burkinabè, âgés de dix-huit (18) ans au moins et de trente-sept (37) ans au plus au 31 décembre 2019, titulaires d’une licence professionnelle, d’une maitrise ou de Bac+4 en ingénierie de l’eau, géologie, en mine, en sciences de l’eau, en sciences de la vie et de la terre, en génie civil option hydraulique, en hydraulique, en hydrologie, en hydrogéologie, ou en génie rural, ou de tout autre diplôme reconnu équivalent à la date d’ouverture du concours et remplissant les conditions d’aptitudes physique et mentale exigées pour l’exercice de l’emploi postulé.Toutefois, les personnes ayant un handicap compatible avec l’emploi sont autorisées à prendre part à ce concours. Les personnes déjà engagées ou intégrées dans la fonction publique ne sont pas autorisées à prendre part à ce concours.Les personnes admises à un concours et qui sont déjà en formation dans une école de formation professionnelle depuis plus d’un (01) mois ne sont pas autorisées à prendre part à ce concours.Tout contrevenant aux conditions de candidature s’expose à des sanctions conformément aux textes en vigueur.");
    
    var bCommunique = indent("Les dossiers de candidature sont reçus exclusivement sur la plateforme e-concours d’inscription en ligne sur le site www.econcours.bf du 15juillet 2019 à 00 h 00 au 24 juillet 2019 à 24 h00.Les candidats admissibles sont invités à déposer les pièces ci-dessous énumérées au plus tard quinze (15) jours après la publication du résultat provisoire à l’Agence Générale de Recrutement de l’Etat.Les candidats seront déclarés admissibles et leur admission ne sera effective qu’après le dépôt de leur dossier complet validé.Le dossier est composé comme suit :-	une demande manuscrite revêtue d’un timbre fiscal de 200 francs CFA, adressée à Monsieur le Ministre de la Fonction Publique, du Travail et de la Protection Sociale datée et signée du candidat et donnant son adresse exacte y compris un numéro de téléphone ;-	une photocopie légalisée de la Carte Nationale d’Identité Burkinabè (CNIB) en cours de validité ;-	une photocopie légalisée du diplôme requis ou de son attestation ;-	un engagement à servir en milieu rural pendant cinq (05) ans ; -	un extrait d’acte de naissance ou toute autre pièce en tenant lieu.Tout dossier incomplet n’est pas accepté.Toutefois, l’admission n’est définitive qu’après un contrôle approfondi.En cas d’admission, le candidat sera invité à fournir des pièces complémentaires.");
    
    var cCommunique = indent("Les épreuves du concours se déroulent selon les horaires ci-après :-	7h30 mn à 9h30 mn : Epreuve de Mathématiques    Coéf. 2.-	9h45mn à 11h45mn : Epreuve de. Géologie générale …. Coéf. 3-	13h00 à 15h00mn : Epreuve de Physique           Coéf.2 Les épreuves sont notées de 0 à 20 et toute note inférieure à 7/20 est éliminatoire.L’accès à la salle de composition est subordonné à la présentation du récépissé d’inscription et de la Carte Nationale d’Identité Burkinabè (CNIB) ayant servi à l’inscription.Les candidats sont informés que les déclarations de perte de CNIB ne sont pas acceptées. Par conséquent, il leur est recommandé de faire établir en double la photocopie légalisée de leur CNIB ayant servi à l’inscription.Les candidats admis subissent une formation à l’issue de laquelle, ils sont intégrés dans la Fonction Publique en qualité de fonctionnaire.La durée de la formation est de vingt-quatre (24) mois.Tout candidat admis qui ne se serait pas présenté à l’école de formation quinze (15) jours après la rentrée sera déclaré défaillant et remplacé par un candidat admis sur la liste d’attente.L’appel des candidats est fixé à 06h30mn le jour de l’administration des épreuves.La date et les lieux du déroulement des épreuves seront précisés ultérieurement.Pour le Ministre et par délégation,");
    
    //comuniqueText.appendChild(document.createTextNode(localStorage.getItem("description")));
    comuniqueText.appendChild(document.createTextNode(textCommunique));
    communique.appendChild(document.createTextNode("COMMUNIQUE"));
    
    //descriptionText.appendChild(document.createTextNode(localStorage.getItem("description")));
    descriptionText.appendChild(document.createTextNode(aCommunique));
    description.appendChild(document.createTextNode("A-	CONDITIONS DE CANDIDATURE"));
    
    pretRequit.appendChild(document.createTextNode("B-	COMPOSITION DU DOSSIER DE CANDIDATURE"));
    pretRequitli.appendChild(document.createTextNode(bCommunique));
    
    
    howApply.appendChild(document.createTextNode("C-	ADMINISTRATION DES EPREUVES"));
    howApplyDescription.appendChild(document.createTextNode(cCommunique));
    
    
    
    job.appendChild(communique);
    job.appendChild(comuniqueText);
    job.appendChild(description);
    job.appendChild(descriptionText);
    job.appendChild(pretRequit);
    job.appendChild(pretRequitli);
    job.appendChild(howApply);
    job.appendChild(howApplyDescription);
    
    buttonText.appendChild(document.createTextNode("POSTULER À CE CONCOURS"));
    buttonText2.appendChild(document.createTextNode("RETOUR"));
    
    buttonDiv.appendChild(buttonText2);
    buttonDiv.appendChild(buttonText);
    
    
    colone.appendChild(job);
    colone.appendChild(buttonDiv);
    
    document.getElementById("row").appendChild(pageHeading);
    document.getElementById("row").appendChild(pageSubHeading);
    document.getElementById("apply").appendChild(colone);

}
//==========================================================================================================================================
function loadConcoursInfoAcceuil(){
    
    //creating the tags
    //=====================================================================    
    var pageHeading = document.createElement("div");
    pageHeading.className = "page-heading-info";
    
    var pageTitle = document.createElement("h1");
    pageTitle.className = "page-title";
    
    var pageSubHeading = document.createElement("div");
    pageSubHeading.className = "page-sub-heading-info";
    
    var contentMeta = document.createElement("p");
    contentMeta.className = "content-meta";
    
    var date = document.createElement("span");
    
    var time = document.createElement("time");
    time.className = "entry-date";
    time.setAttribute("datetime","2015-08-10T09:46:53+00:00");
    
    var iconTime = document.createElement("i");
    iconTime.className = "fa fa-calendar";
    
    var print = document.createElement("span");
    
    var printtext = document.createElement("a");
    printtext.href = "#";
    
    var printIcon = document.createElement("i");
    printIcon.classname = "fa fa-print";
    printtext.addEventListener("click", function() {window.print();});
    
    var colone = document.createElement("div");
    colone.className = "noo-main col-md-8";
    
    var job = document.createElement("div");
    job.className = "job-desc";
    
    var communique = document.createElement("h3");
    
    var comuniqueText = document.createElement("P");
    
    var description = document.createElement("h3");
    
    var descriptionText = document.createElement("P");
    
    var howApply = document.createElement("h3");
    
    var howApplyDescription = document.createElement("P");
    
    var pretRequit = document.createElement("h3");
    
    var pretRequitOL = document.createElement("ol");
    
    var pretRequitli = document.createElement("P");
    
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "job-action";
    buttonDiv.href = "Sign_In.html";
    
    var buttonText = document.createElement("a");
    buttonText.className = "btn btn-primary";
    buttonText.href = "Sign_In.html";
    
    var buttonText2 = document.createElement("a");
    buttonText2.className = "btn btn-primary";
    buttonText2.href = "concours.html"
    
    var ministryDiv = document.createElement("span");
    var ministryText = document.createElement("a");
    var ministryIcon = document.createElement("i");
    ministryIcon.className = "fa fa-map-marker";
    
    
    //ministry name
    var niveauEtude = document.createElement("span");
    niveauEtude.className = "job-company";
    var niveauEtudeText = document.createElement("a");
    var niveauEtudeIcon = document.createElement("i");
    niveauEtudeIcon.className = "fa fa-graduation-cap";
    //=====================================================================
    //ministry name
    var niveauCycle = document.createElement("span");
    niveauCycle.className = "job-company";
    var niveauCycleText = document.createElement("a");
    var niveauCycleIcon = document.createElement("i");
    niveauCycleIcon.className = "fa fa-repeat";
    //=====================================================================
    
    //study level
    niveauEtudeText.appendChild(document.createTextNode(localStorage.getItem("degree")));
    niveauEtude.appendChild(niveauEtudeIcon);
    niveauEtude.appendChild(niveauEtudeText);
        
    //cycle level
    niveauCycleText.appendChild(document.createTextNode(localStorage.getItem("cycle")));
    niveauCycle.appendChild(niveauCycleIcon);
    niveauCycle.appendChild(niveauCycleText);
    
    
    ministryText.appendChild(document.createTextNode(localStorage.getItem("ministere")));
    ministryDiv.appendChild(ministryIcon);
    ministryDiv.appendChild(ministryText);
    
    //creating tag tree
    pageTitle.appendChild(document.createTextNode(localStorage.getItem("displayName")));
    pageHeading.appendChild(pageTitle);
    
    time.appendChild(iconTime);
    time.appendChild(document.createTextNode(localStorage.getItem("date")));
    date.appendChild(time);
    
    
    printIcon.appendChild(document.createTextNode("Imprimer"));
    printtext.appendChild(printIcon);
    print.appendChild(printtext);
    
    contentMeta.appendChild(ministryDiv);
    contentMeta.appendChild(niveauEtude);
    contentMeta.appendChild(niveauCycle);
    contentMeta.appendChild(date);
    contentMeta.appendChild(print);
    
    pageSubHeading.appendChild(contentMeta);
    
    var textCommunique = indent("Le public burkinabè est informé de l’ouverture, au titre de l’année 2019, d’un concours direct de recrutement de dix (10) Elèves Ingénieurs du Génie Rural option hydrogéologie dont six (06) hommes et quatre (04) femmes à former à l’Ecole nationale des ingénieurs Abdramane Baba TOURE de Bamako au Mali (ENI-ABT) dans le centre unique de Ouagadougou, pour le compte du Ministère de l’Eau et de l’Assainissement. ");
    
    var aCommunique = indent("Peuvent prendre part à ce concours, les candidats des deux (02) sexes, de nationalité burkinabè, âgés de dix-huit (18) ans au moins et de trente-sept (37) ans au plus au 31 décembre 2019, titulaires d’une licence professionnelle, d’une maitrise ou de Bac+4 en ingénierie de l’eau, géologie, en mine, en sciences de l’eau, en sciences de la vie et de la terre, en génie civil option hydraulique, en hydraulique, en hydrologie, en hydrogéologie, ou en génie rural, ou de tout autre diplôme reconnu équivalent à la date d’ouverture du concours et remplissant les conditions d’aptitudes physique et mentale exigées pour l’exercice de l’emploi postulé.Toutefois, les personnes ayant un handicap compatible avec l’emploi sont autorisées à prendre part à ce concours. Les personnes déjà engagées ou intégrées dans la fonction publique ne sont pas autorisées à prendre part à ce concours.Les personnes admises à un concours et qui sont déjà en formation dans une école de formation professionnelle depuis plus d’un (01) mois ne sont pas autorisées à prendre part à ce concours.Tout contrevenant aux conditions de candidature s’expose à des sanctions conformément aux textes en vigueur.");
    
    var bCommunique = indent("Les dossiers de candidature sont reçus exclusivement sur la plateforme e-concours d’inscription en ligne sur le site www.econcours.bf du 15juillet 2019 à 00 h 00 au 24 juillet 2019 à 24 h00.Les candidats admissibles sont invités à déposer les pièces ci-dessous énumérées au plus tard quinze (15) jours après la publication du résultat provisoire à l’Agence Générale de Recrutement de l’Etat.Les candidats seront déclarés admissibles et leur admission ne sera effective qu’après le dépôt de leur dossier complet validé.Le dossier est composé comme suit :-	une demande manuscrite revêtue d’un timbre fiscal de 200 francs CFA, adressée à Monsieur le Ministre de la Fonction Publique, du Travail et de la Protection Sociale datée et signée du candidat et donnant son adresse exacte y compris un numéro de téléphone ;-	une photocopie légalisée de la Carte Nationale d’Identité Burkinabè (CNIB) en cours de validité ;-	une photocopie légalisée du diplôme requis ou de son attestation ;-	un engagement à servir en milieu rural pendant cinq (05) ans ; -	un extrait d’acte de naissance ou toute autre pièce en tenant lieu.Tout dossier incomplet n’est pas accepté.Toutefois, l’admission n’est définitive qu’après un contrôle approfondi.En cas d’admission, le candidat sera invité à fournir des pièces complémentaires.");
    
    var cCommunique = indent("Les épreuves du concours se déroulent selon les horaires ci-après :-	7h30 mn à 9h30 mn : Epreuve de Mathématiques    Coéf. 2.-	9h45mn à 11h45mn : Epreuve de. Géologie générale …. Coéf. 3-	13h00 à 15h00mn : Epreuve de Physique           Coéf.2 Les épreuves sont notées de 0 à 20 et toute note inférieure à 7/20 est éliminatoire.L’accès à la salle de composition est subordonné à la présentation du récépissé d’inscription et de la Carte Nationale d’Identité Burkinabè (CNIB) ayant servi à l’inscription.Les candidats sont informés que les déclarations de perte de CNIB ne sont pas acceptées. Par conséquent, il leur est recommandé de faire établir en double la photocopie légalisée de leur CNIB ayant servi à l’inscription.Les candidats admis subissent une formation à l’issue de laquelle, ils sont intégrés dans la Fonction Publique en qualité de fonctionnaire.La durée de la formation est de vingt-quatre (24) mois.Tout candidat admis qui ne se serait pas présenté à l’école de formation quinze (15) jours après la rentrée sera déclaré défaillant et remplacé par un candidat admis sur la liste d’attente.L’appel des candidats est fixé à 06h30mn le jour de l’administration des épreuves.La date et les lieux du déroulement des épreuves seront précisés ultérieurement.Pour le Ministre et par délégation,");
    
    //comuniqueText.appendChild(document.createTextNode(localStorage.getItem("description")));
    comuniqueText.appendChild(document.createTextNode(textCommunique));
    communique.appendChild(document.createTextNode("COMMUNIQUE"));
    
    //descriptionText.appendChild(document.createTextNode(localStorage.getItem("description")));
    descriptionText.appendChild(document.createTextNode(aCommunique));
    description.appendChild(document.createTextNode("A-	CONDITIONS DE CANDIDATURE"));
    
    pretRequit.appendChild(document.createTextNode("B-	COMPOSITION DU DOSSIER DE CANDIDATURE"));
    pretRequitli.appendChild(document.createTextNode(bCommunique));
    
    
    howApply.appendChild(document.createTextNode("C-	ADMINISTRATION DES EPREUVES"));
    howApplyDescription.appendChild(document.createTextNode(cCommunique));
    
    
    
    job.appendChild(communique);
    job.appendChild(comuniqueText);
    job.appendChild(description);
    job.appendChild(descriptionText);
    job.appendChild(pretRequit);
    job.appendChild(pretRequitli);
    job.appendChild(howApply);
    job.appendChild(howApplyDescription);
    
    buttonText.appendChild(document.createTextNode("POSTULER À CE CONCOURS"));
    buttonText2.appendChild(document.createTextNode("RETOUR"));
    
    buttonDiv.appendChild(buttonText2);
    buttonDiv.appendChild(buttonText);
    
    colone.appendChild(job);
    colone.appendChild(buttonDiv);
    
    document.getElementById("row").appendChild(pageHeading);
    document.getElementById("row").appendChild(pageSubHeading);
    document.getElementById("apply").appendChild(colone);

}
//==========================================================================================================================================
function loadMinistere(){
    var listMinistry = [];
    
    listMinistry.push("Administration Territoriale, de la Décentralisation et de la Cohésion Sociale (MATD-CS)");
    listMinistry.push("Affaires Étrangères et de la Coopération (MAEC)");
    listMinistry.push("Agriculture et des Aménagements Hydro-Agricoles (MAAHA)");
    listMinistry.push("Autorité Supérieure de Contrôle d'État et de lutte contre la Corruption (ASCE/LC)");
    listMinistry.push("Commerce, de l'industrie et de l'Artisanat (MCIA)");
    listMinistry.push("Communication et des Relations avec le Parlement (MCRP)");
    listMinistry.push("Culture, des Arts et du Tourisme (MCAT)");
    listMinistry.push("Développement de l'Économie Numérique et des Postes (MDENP)");
    listMinistry.push("Droits Humains et de la Promotion Civique (MJDHPC)");
    listMinistry.push("Eau et de l'Assainissement (MEA)");
    listMinistry.push("Économie, des Finances et du Développement (MINEFID)");
    listMinistry.push("Éducation Nationale, de l'Alphabétisation et de la Promotion des Langues Nationales (MENA-PLN)");
    listMinistry.push("Environnement, de l'Économie Verte et du Changement Climatique (MEEVCC)");
    listMinistry.push("Femme, de la Solidarité Nationale, de la Famille et de l'Action Humanitaire");
    listMinistry.push("Fonction Publique, du Travail et de la Protection Sociale (MFPTPS)");
    listMinistry.push("Infrastructures (MI)");
    listMinistry.push("Mines et Carrières (MMC)");
    listMinistry.push("Jeunesse et de la Promotion de l'entrepreunariat des Jeunes (MJPEJ)");
    listMinistry.push("Justice (MJ)");
    listMinistry.push("Ressources Animales et Halieutiques (MRAH)");
    listMinistry.push("Santé(MS)");
    listMinistry.push("Sports et des Loisirs (MSL)");
    listMinistry.push("Urbanisme et de l'Habitat (MUH)");
}
//==========================================================================================================================================
function validateOTP(){
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/econcours/otp/erify';
    
    //getting the code from page
    var code = document.getElementById("numCle").value;
 try{
     // Login  method implementation:
     async function postData(data ={}) {
         //setting the data to validate the code 
         data.telephone =  localStorage.getItem("otpTelephone");
         data.code = code;
         //console.log(data.telephone);
         //console.log(data.code)
         //fetching values to api for verification
         const response = await fetch(url, {
             method: 'POST', 
             mode: 'cors', 
             cache: 'no-cache',
             credentials: 'same-origin', 
             headers: {
                'Content-Type': 'application/json'
             },
             redirect: 'follow', 
             referrerPolicy: 'no-referrer', 
             body: JSON.stringify(data) 
         });
         //response from the api
         return response.json(); 
     }
     //get data from api after successful login
     postData({ login: true })
    .then(data => {//console.log(data);
                   if(data.result.length ==64){
                       alert("Vérification réussie! Vous serez redirigé vers la page de connexion.");
                       window.location.href = "Sign_in.html";
                   }
                  });
 }catch(error){
    
    alert("Impossible d'envoyer à ce numéro, veuillez essayer plus tard ou changer de numéro.")
}

}
//==========================================================================================================================================
function sendOTP(){
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/econcours/getotp';
    
    //setting telephone value 
    var telephone = document.getElementById("otptelephone").value;
    
    //verify if the telephone start with 226 and is eleven charactersd
    if(telephone.startsWith("226") && telephone.length == 11){
        //adding + to telephone number 
        telephone = "+"+telephone;
        //showing the the verification field if the phone is a good one 
        $('#sign-in').hide();
        $('#verify-otp').show();
    }
    //verify if there's 8 character and the telephone does't start with 226
    else if(telephone.length == 8 && telephone.startsWith(226) == false){
        //adding +226 to the phone number
        telephone = "+226"+telephone;
        //showing the the verification field if the phone is a good one 
        $('#sign-in').hide();
        $('#verify-otp').show();
    }else {
        alert("Numéro de téléphone invalide");
        return false;
    }
    //console.log("otp telephone: "+ telephone);
    //storing phone number
    localStorage.otpTelephone = telephone;
    // Login  method implementation:
    async function postData(data ={}) {
       
        //set telephone values 
        data.telephone =  telephone;
        //storing telephone value for the verification
        localStorage.otpTelephone = data.telephone;
        
        //fetching values to api for verification
        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        
        return response.json(); 
    }
//get data from api after successful login
postData({ login: true })
  .then(data => {
    alert("La Clé a été envoyée");
  });

}
//==========================================================================================================================================
function resendOTP(){
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/econcours/getotp';
    
    // Login  method implementation:
    async function postData(data ={}) {
       
        //set telephone values 
        data.telephone =  localStorage.otpTelephone;
        
        //fetching values to api for verification
        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
        });
        
        return response.json(); 
    }
//get data from api after successful login
postData({ login: true })
  .then(data => {
    alert("La Clé a été envoyée de nouveau");
  });

}
//==========================================================================================================================================
function selectPay(){
    
    //setting telephone value 
    var telephone = document.getElementById("telephone").value;
    
    //verify if the telephone start with 226 and is eleven charactersd
    if(telephone.startsWith("226") && telephone.length == 11){
        //adding + to telephone number 
        telephone = "+"+telephone;
        //showing the the verification field if the phone is a good one 
        $('#phone-payment').hide();
        $('#payment').show();
    }
    //verify if there's 8 character and the telephone does't start with 226
    else if(telephone.length == 8 && telephone.startsWith(226) == false){
        //adding +226 to the phone number
        telephone = "+226"+telephone;
        //showing the the verification field if the phone is a good one 
        $('#phone-payment').hide();
        $('#payment').show();
    }else {
        alert("Numéro de téléphone invalide");
        return false;
    }
    //storing phone number
    localStorage.payTelephone = telephone.substring(3);
}
//==========================================================================================================================================
//otp function
function showMoreConcours(){
    $('#verify-otp').hide();
}
//==========================================================================================================================================
//otp function
function loadOTP(){
    
    $('#verify-otp').hide();
}
//==========================================================================================================================================
function loadVerifyOTP(){
    $('#sign-in').show();
  $('#verify-otp').hide();
}
//==========================================================================================================================================
//otp function
function loadPay(){
    
    $('#payment').hide();
}
//==========================================================================================================================================
function loadVerifyPay(){
    setUser();
    $('#phone-payment').show();
  $('#payment').hide();
}
//==========================================================================================================================================
function setUser(){
    var title;
    
     if(localStorage.getItem("access_token")== null){
        alert("Connectez-vous à votre compte");
        window.location.href = "../sign_in.html";
    }
    try{
        if(document.getElementById("profil").textContent == "Mon Compte"){
            return false;
        }
    }catch(exception){}
    
    if(localStorage.getItem("sex")== "M")
        title = "M. " + localStorage.getItem("lastname");
    else
        title = "Mme " + localStorage.getItem("lastname");
    
    if(title == "Mme null" || title == "Mr null")
        title = "Mon Compte";
        
    //console.log(localStorage.getItem("lastname"))
    //document.getElementById("profil").document.createTextNode(title + localStorage.getItem("firstname"));
    document.getElementById("profil").textContent = title;
    document.getElementById("mobileUser").textContent = title;
   
   
    
}
//==========================================================================================================================================
function deconnexion(){
    localStorage.clear();
    window.location.href = "../Acceuil.html";
}
//==========================================================================================================================================
//otp function
function showMoreConcours(value){
    
    loadConcours();
    
    //get the stored table of concours
    var concoursLoad = JSON.parse(localStorage["test"]);
    
    //variable to get the amount of concours left on the last page
    var modulo = 0;
    modulo = concours.length % nbConcoursPages;
    
    //variable to show the amout of pages
    var nbPages = parseInt((concours.length / nbConcoursPages),10);
    
    //add an extra page if modulo doesn't equal 0
    nbPages = nbPages + 1;
    
    //get the page we're at
    var currentPage = parseInt(value);
    //console.log("value: "+ concours[0]);
    
    var i = i = 0 + ((currentPage-1) * nbConcoursPages);
    for(; i< (currentPage * nbConcoursPages); i++){
        document.getElementById("wrap-concours").appendChild(concours[i]);
    }
    
    
    //console.log("modulo: "+ modulo);
    //console.log("nbPages: "+ nbPages);
    
    
    //document.getElementById("wrap-concours").appendChild(article);
}
//==========================================================================================================================================
//otp function
function verifierDocument(){
    
    localStorage.referenceDocument = document.getElementById("referenceDocument").value;
    localStorage.typeDocuments = document.getElementById("typeDocument").value;
    localStorage.dateDelivranceDocuments = document.getElementById("dateDelivranceDocument").value;
    localStorage.dateEcheanceDocuments = document.getElementById("dateEcheanceDocument").value;
    
    
    //console.log(localStorage.getItem("photoRecto"));
    //console.log(localStorage.getItem("photoVerso"));
    saveDocument();

     window.location.href = "verification_document.html"; // Redirecting to verification page
    
}
//==========================================================================================================================================
// populates user profile.
function loadDocumentPreview(){
    
    var referenceD = document.createElement("span");
    referenceD.textContent = "Numéro de référence:";
    
    var typeD = document.createElement("span");
    typeD.textContent = "Type de document:";
    
    var dateDelivranceD = document.createElement("span");
    dateDelivranceD.textContent = "Date de délivrance:";
    
    var dateEcheanceD = document.createElement("span");
    dateEcheanceD.textContent = "Date d'échéance:";
    
    var documentW = document.createElement("span");
    documentW.textContent = "Document Importé:";
    
    var photoR = document.createElement("span");
    photoR.textContent = "Photo Recto:";
    
    var photoV = document.createElement("span");
    photoV.textContent = "Photo Verso:";
    
    //console.log(localStorage.getItem("photoVerso"));
    
    document.getElementById("referenceDocument").textContent = localStorage.getItem("referenceDocument");
    document.getElementById("typeDocument").textContent = localStorage.getItem("typeDocuments");
    document.getElementById("dateDelivranceDocument").textContent = localStorage.getItem("dateDelivranceDocuments");
    document.getElementById("dateEcheanceDocument").textContent = localStorage.getItem("dateEcheanceDocuments");
    
    
    if(localStorage.getItem("photoRecto") != "")
        document.getElementById("photoRecto").textContent = "1";
    else
        document.getElementById("photoRecto").textContent = "0";
    
    if(localStorage.getItem("photoVerso") != "")
        document.getElementById("photoVerso").textContent = "1";
    else
        document.getElementById("photoVerso").textContent = "0";
    
    
    /*document.getElementById("documentWord").textContent = localStorage.getItem("documentWord");
    document.getElementById("photoRecto").textContent = localStorage.getItem("photoRecto");
    document.getElementById("photoVerso").textContent = localStorage.getItem("photoVerso");*/
    
    document.getElementById("typeDocument").appendChild(typeD);
    document.getElementById("referenceDocument").appendChild(referenceD);
    document.getElementById("dateDelivranceDocument").appendChild(dateDelivranceD);
    document.getElementById("dateEcheanceDocument").appendChild(dateEcheanceD);
    document.getElementById("photoRecto").appendChild(photoR);
    document.getElementById("photoVerso").appendChild(photoV);
    
    
    //console.log("photo recto: "+localStorage.getItem("photoRecto"));
    //console.log("photo verso: "+localStorage.getItem("photoVerso"));
  
}
//==========================================================================================================================================
// populates user profile.
function saveDocument(){
    
   //api url for login verification
    var url = SERVER_URL_PREFIX + '/documentid/add';
    
    const formData = new FormData();

formData.append('user_id',localStorage.getItem("userid"));
formData.append('type', document.getElementById("typeDocument").value);
formData.append('reference', document.getElementById("referenceDocument").value);
formData.append('photorecto', document.getElementById("photoRecto").files[0]);
formData.append('photoverso', document.getElementById("photoVerso").files[0]);
formData.append('dateissue', document.getElementById("dateDelivranceDocument").value);
formData.append('validuntil', document.getElementById("dateEcheanceDocument").value);
formData.append('placeofissue',document.getElementById("placeofissue").value);
formData.append('iscurrent','1');

fetch(url, {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  alert("Votre document à été importé!");
  window.location.href = "Candidat_Documents.html"; 
})
.catch(error => {
  //console.error('Error:', error);
});
}
//==========================================================================================================================================
// populates user profile.
function applyConcours(){
    
    setUser();
     //api url for login verification
    var url = SERVER_URL_PREFIX + '/admin/candidate/exam/add';

// Login  method implementation:
async function postData(data ={}) {
    //console.log("userid: "+ localStorage.getItem("userid"));
    //setting verification data variables
    console.log("Concours id: "+localStorage.getItem("concoursID"))
    
    console.log("User id: "+localStorage.getItem("userid"))
    data.exam_id = localStorage.getItem("concoursID");
    data.candidat_id = localStorage.getItem("userid");
    
    
    console.log("exam id: "+ data.exam_id)
    
    console.log("User id: "+ data.candidat_id)
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    
    if(data.code == 405)
        alert("Vous avez déjà postulé à ce concours!");
    else if(data.code == 201){
        alert("Merci d'avoir postulé!");
        try{
            subcenter();
        }catch(exception){
            //console.log(exception);
        }
        window.location.href = "Candidat_Concours.html"; 
    }
  });
  
}
//==========================================================================================================================================
function subcenter(){
    var data = JSON.stringify({
  "centre": "Ouaga",
  "souscentre": "Zinda"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
  }
});

xhr.open("POST", SERVER_URL_PREFIX + "/candidats/center/subcenter");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("servicename", "INITPAID");
xhr.setRequestHeader("type", "MPREQ");
xhr.setRequestHeader("merchant-id", "MERCD22694000");
xhr.setRequestHeader("token", localStorage.getItem("mobicashToken"));

xhr.send(data);
}
//==========================================================================================================================================
function indent(str) {
    var i;
    var currentString = "";
    var table = [];
    for(i=0; i< str.length; i++){
        
        currentString +=str.charAt(i);
        if(str.charAt(i)=='.' || str.charAt(i)==','){
            currentString+="\n"
            table.push(currentString);
            currentString="";
        }
        
    }
    
    str="";
    for(i=0;i<table.length;i++){
        str += table[i];
        
    }
    
            //console.log(str);
    return str;
    
}
//==========================================================================================================================================
function loadCandidatConcours(){
    
    setUser();
    //api url for login verification
    var url = 'https://soasga.com//api/v1/candidat/myexams';

// Login  method implementation:
async function postData(data ={}) {
    
    //setting verification data variables
    data.candidat_id= localStorage.getItem("userid");
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    
    var myID = localStorage.getItem("userid");
    
    var exam = [];
    var i;
    
    for(i=0;i<data.data.exams.length;i++){
        //console.log(data.data.exams[i].exam );
        exam = data.data.exams[i].exam;
    
    
     //creating the tags
    //=====================================================================    
    var tr = document.createElement("tr");
    
    var td = document.createElement("td");
    td.className = "w-25";
    
    var loopItemContent = document.createElement("div");
    loopItemContent.className = "loop-item-content";
    
    var loopItemWrap = document.createElement("div");
    loopItemWrap.className = "loop-item-wrap";
    
    var divA = document.createElement("a");
    divA.appendChild(document.createTextNode(exam.displayname));
    
    
    var h3 = document.createElement("h3");
    h3.className = "loop-item-title";
    
    var tdHidden = document.createElement("td");
    tdHidden.className = "hidden-xs hidden-sm w-15";
    
    var span = document.createElement("span");
    
    var classI = document.createElement("i");
    classI.className = "fa fa-calendar";
    
    var em = document.createElement("em");
    //em.appendChild(document.createTextNode("  " + exam.date));
    em.appendChild(document.createTextNode("À venir"));
    
    var tdCenter = document.createElement("td");
    tdCenter.className = "text-center";
    
    var spanApp = document.createElement("span");
    spanApp.className = "job-application-status job-application-status-active";
    
    
    spanApp.appendChild(document.createTextNode("Actif"));
    tdCenter.appendChild(spanApp);
    
    
    span.appendChild(classI);
    span.appendChild(em);
    tdHidden.appendChild(span);
    
    h3.appendChild(divA);
    loopItemContent.appendChild(h3);
    loopItemWrap.appendChild(loopItemContent);
    td.appendChild(loopItemWrap);
    
    tr.appendChild(td);
    tr.appendChild(tdHidden);
    tr.appendChild(tdCenter);
    
    document.getElementById("table").appendChild(tr);
    }
  });
    
}
//==========================================================================================================================================
function loadCandidatDocuments(){
    
    setUser();
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/documentid/byuser';

// Login  method implementation:
async function postData(data ={}) {
    
    //setting verification data variables
    data.user_id= localStorage.getItem("userid");
    //console.log(data.user_id);
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
    
        
    var i;
    var loadCandidateDocument = [];
    for(i=0; i<data.data.length;i++){
        
    //storing the documents
     loadCandidateDocument[i] = data.data[i];   
      
        //console.log(loadCandidateDocument[i]);  
     //creating the tags
    //=====================================================================    
    var tr = document.createElement("tr");
    
    var td = document.createElement("td");
    td.className = "title-col";
    
    var titleA = document.createElement("a");
    titleA.className = "title-col";
    
    var strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(data.data[i].type));
    titleA.appendChild(strong);
    td.appendChild(titleA);
        
    var photoR = document.createElement("td");
    photoR.className = "hidden-xs text-center viewable-col";
    
    var photoRM = document.createElement("img");
    photoRM.src = data.data[i].photorecto;
    photoRM.width = "50";
    photoRM.height = "50";
    photoR.appendChild(photoRM);
          
    var photoV = document.createElement("td");
    photoV.className = "hidden-xs text-center viewable-col";
    
    var photoVM = document.createElement("img");
    photoVM.src = data.data[i].photoverso;
    photoVM.width = "50";
    photoVM.height = "50";
    photoV.appendChild(photoVM);
        
    var tdHidden = document.createElement("td");
    tdHidden.className = "hidden-xs text-center viewable-col";
    
    var em = document.createElement("em");
    em.appendChild(document.createTextNode(data.data[i].reference));
    tdHidden.appendChild(em);
    
    
    var tdXS = document.createElement("td");
    tdXS.className = "hidden-xs hidden-sm location-col";
    
    var span = document.createElement("span");
    
    var hiddenI = document.createElement("i");
    hiddenI.className = "fa fa-calendar";
    
    var emCalendar = document.createElement("em");
    emCalendar.appendChild(document.createTextNode("    "+data.data[i].dateissue));
    span.appendChild(hiddenI);
    span.appendChild(emCalendar);
    tdXS.appendChild(span);
    
    
     var tdXS2 = document.createElement("td");
    tdXS2.className = "hidden-xs hidden-sm location-col";
    
    var span2 = document.createElement("span");
    
    var hiddenI2 = document.createElement("i");
    hiddenI2.className = "fa fa-calendar";
    
    var emCalendar2 = document.createElement("em");
    emCalendar2.appendChild(document.createTextNode("    "+data.data[i].validuntil));
    span2.appendChild(hiddenI2);
    span2.appendChild(emCalendar2);
    tdXS2.appendChild(span2);
    
    var member = document.createElement("td");
    member.className = "member-manage-actions text-center";
        
        var memberA = document.createElement("a");
    memberA.className = "member-manage-action action-delete";
    memberA.title = "Supprimer";
    memberA.id = data.data[i].id;
    memberA.setAttribute("onclick","deleteCandidatDocuments("+data.data[i].id+");");

        
        
    var memberI = document.createElement("i");   
    memberI.className = "fa fa-trash-o";
    memberA.appendChild(memberI);  
        
        
        
    var memberB = document.createElement("a");
    memberB.className = "member-manage-action action";
    memberB.title = "Modifier";
    memberB.id = data.data[i].id;

        
    var memberBI = document.createElement("i");   
    memberBI.className = "fa fa-pencil";
    memberB.appendChild(memberBI);
        
    member.appendChild(memberB);
    member.appendChild(memberA);
    
    jQuery(member).find('a').attr('data-toggle', 'tooltip');
        
    tr.appendChild(td);
    tr.appendChild(photoR);
    tr.appendChild(photoV);
    tr.appendChild(tdHidden);
    tr.appendChild(tdXS);
    tr.appendChild(tdXS2);
    tr.appendChild(member);
   
    document.getElementById("table").appendChild(tr);
    }
    
    localStorage.setItem("loadCandidateDocument", JSON.stringify(loadCandidateDocument));
    
  });
    
}
//==========================================================================================================================================
function deleteCandidatDocuments(id){
    
    setUser();
    
    var r = confirm("Voulez-vous supprimer le document?");
    if (r == true) {
    
    //api url for login verification
    var url = SERVER_URL_PREFIX + '/documentid/delete';

// Login  method implementation:
async function postData(data ={}) {
    
    //setting verification data variables
    data.doc_id= id;
    //console.log(data.doc_id);
    
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ change: true })
  .then(data => {
        if(data.success == true){
            alert("Document Supprimé!");
            loadCandidatDocuments();
            location.reload();
        }else{
            alert("Une erreur s'est produite, réessayer plus tard");
        }
  });
}
}
//==========================================================================================================================================
function showImageRecto() {
    const preview = document.getElementById("target");
  const file = document.getElementById("photoRecto").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
//==========================================================================================================================================
function showImageVerso() {
    const preview = document.getElementById("target2");
  const file = document.getElementById("photoVerso").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
//==========================================================================================================================================
function setOTPTelephone(){
    loadOTP();
    document.getElementById("otptelephone").value = localStorage.getItem("telephone");
}
//==========================================================================================================================================
function searchConcours(){
    var query = (document.getElementById("search").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomConcours = nomConcours[i].toLowerCase();
        
        //
        if(curentNomConcours.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
}
//==========================================================================================================================================
function searchConcoursMinistere(){
    var query = (document.getElementById("search-category").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        currentNomMinistere = nomMinistere[i].toLowerCase();
        
        //
        if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursAcademic(){
    var query = (document.getElementById("search-academic").value).toLocaleLowerCase();
    var i;
    var curentNomAcademic;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomAcademic = nomAcademique[i].toLowerCase();
        
        //
        if(curentNomAcademic.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursCycle(){
    var query = (document.getElementById("search-cycle").value).toLocaleLowerCase();
    var i;
    var curentNomCycle;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomCycle = nomCycle[i].toLowerCase();
        
        //
        if(curentNomCycle.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursPro(){
    var query = (document.getElementById("search").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomConcours = nomConcours[i].toLowerCase();
        
        //
        if((curentNomConcours.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("pro")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursMinisterePro(){
    var query = (document.getElementById("search-category").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        currentNomMinistere = nomMinistere[i].toLowerCase();
        
        //
        if((currentNomMinistere.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("pro")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursAcademicPro(){
    var query = (document.getElementById("search-academic").value).toLocaleLowerCase();
    var i;
    var curentNomAcademic;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomAcademic = nomAcademique[i].toLowerCase();
        
        //
        if((curentNomAcademic.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("pro")>=0) ){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursCyclePro(){
    var query = (document.getElementById("search-cycle").value).toLocaleLowerCase();
    var i;
    var curentNomCycle;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomCycle = nomCycle[i].toLowerCase();
        
        //
        if((curentNomCycle.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("pro")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursDirect(){
    var query = (document.getElementById("search").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomConcours = nomConcours[i].toLowerCase();
        
        //
        if((curentNomConcours.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("direct")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursMinistereDirect(){
    var query = (document.getElementById("search-category").value).toLocaleLowerCase();
    var i;
    var curentNomConcours;
    var currentNomMinistere;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        currentNomMinistere = nomMinistere[i].toLowerCase();
        
        //
        if((currentNomMinistere.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("direct")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursAcademicDirect(){
    var query = (document.getElementById("search-academic").value).toLocaleLowerCase();
    var i;
    var curentNomAcademic;
    //console.log(""+query);
    document.getElementById("wrap-concours").innerHTML="";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomAcademic = nomAcademique[i].toLowerCase();
        
        //
        if((curentNomAcademic.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("direct")>=0) ){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function searchConcoursCycleDirect(){
    var query = (document.getElementById("search-cycle").value).toLocaleLowerCase();
    var i;
    var curentNomCycle;
    //console.log(""+query);
    document.getElementById("wrap-concours").style.display="none";
    for (i = 0; i < concours.length; i++) {
        
        //currentNomMinistere = nomMinistere[i].toLowerCase();
        curentNomCycle = nomCycle[i].toLowerCase();
        
        //
        if((curentNomCycle.search(""+query)>=0) && ((typeConcours[i].toLocaleLowerCase()).search("direct")>=0)){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }else
        {
            //alert("Aucun Concours Trouvé!");
            document.getElementById("wrap-concours").style.display="block";
        }/*else if(currentNomMinistere.search(""+query)>=0){
            document.getElementById("wrap-concours").appendChild(concours[i]);
        }*/
    }
    
}
//==========================================================================================================================================
function loadMinistry(id){
    localStorage.loadMinistryID = id;
    window.location.href = "Gouvernement_Information.html";
    
}
//==========================================================================================================================================
function loadMinistryInfo(){
  //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
    var query = localStorage.getItem("loadMinistryID");
    
    var count = 0;
    var divMinistryTitle = document.createElement("div");
        divMinistryTitle.className = "posts-loop-title";
    var h3Title = document.createElement("h3");
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    var i;
    concours.length = 0;
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].ministere).toLowerCase()).search(query.toLowerCase())>=0){
            count++;
            
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        if(concours.length != 0)
            article.id = (concours.length);
        else 
            article.id = 0;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        var ministryIcon = document.createElement("i");
        ministryIcon.className = "fa fa-map-marker";
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        if(concours.length != 0)
            seeMore.id = (concours.length);
        else 
            seeMore.id = 0;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+seeMore.id+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        //=====================================================================
        
        //ministry name
        var niveauEtude = document.createElement("span");
        niveauEtude.className = "job-company";
        var niveauEtudeText = document.createElement("a");
        var niveauEtudeIcon = document.createElement("i");
        niveauEtudeIcon.className = "fa fa-graduation-cap";
        //=====================================================================
        //ministry name
        var niveauCycle = document.createElement("span");
        niveauCycle.className = "job-company";
        var niveauCycleText = document.createElement("a");
        var niveauCycleIcon = document.createElement("i");
        niveauCycleIcon.className = "fa fa-repeat";
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
        ministryText.appendChild(document.createTextNode(data.data[i].ministereacronyme));
        ministry.appendChild(ministryIcon);
        ministry.appendChild(ministryText);
        
            
            if(seeMore.id<1)
            h3Title.appendChild(document.createTextNode(data.data[i].ministere+": "));
            
        //study level
        niveauEtudeText.appendChild(document.createTextNode(data.data[i].degree));
        niveauEtude.appendChild(niveauEtudeIcon);
        niveauEtude.appendChild(niveauEtudeText);
        
        //cycle level
        niveauCycleText.appendChild(document.createTextNode(data.data[i].cycle));
        niveauCycle.appendChild(niveauCycleIcon);
        niveauCycle.appendChild(niveauCycleText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(niveauEtude);
        contentMeta.appendChild(niveauCycle);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
    }
    }
     var spanMinistryTitle = document.createElement("span");    
        spanMinistryTitle.className = "text-primary";
    
        h3Title.appendChild(spanMinistryTitle);
        divMinistryTitle.appendChild(h3Title);
    
        spanMinistryTitle.appendChild(document.createTextNode(count +" Concours Disponibles"));
            document.getElementById("titre").appendChild(divMinistryTitle); 
    });
   
    
}
//==========================================================================================================================================
function loadMinistryInfoUser(){
    
    setUser();
  //api url for login verification
    var url = SERVER_URL_PREFIX + '/exams/getall';

    concours = [];
    nomConcours = [];
    nomMinistere = [];
    nomCycle = [];
    nomAcademique = [];
    
    var query = localStorage.getItem("loadMinistryID");
    
    var count = 0;
    var divMinistryTitle = document.createElement("div");
        divMinistryTitle.className = "posts-loop-title";
    var h3Title = document.createElement("h3");
    
// Login  method implementation:
async function postData(data ={}) {

  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //----- JS CREATE HTML ELEMENT -----//
    var i;
    concours.length = 0;
    for (i = 0; i < data.data.length; i++) {
        if(((data.data[i].ministere).toLowerCase()).search(query.toLowerCase())>=0){
            count++;
            
        //creating the tags
        //=====================================================================
        //create article div
        var article = document.createElement("article");
        article.className = "noo_job hentry";
        if(concours.length != 0)
            article.id = (concours.length);
        else 
            article.id = 0;
        //=====================================================================
        //create the div loop-item-wrap
        var divLoopWrap = document.createElement("div");
        divLoopWrap.className = "loop-item-wrap";
        //=====================================================================
        //create the div loop-item-content
        var divLoopContent = document.createElement("div");
        divLoopContent.className = "loop-item-content";
    
        //create the div loop-item-title
        var divLooptitle = document.createElement("H2");
        divLooptitle.className = "loop-item-title";
    
        //create the div title
        var titleTag = document.createElement("a");
        //=====================================================================
        //create the div content-meta
        var contentMeta = document.createElement("p");
        contentMeta.className = "content-meta";
        //=====================================================================
        //ministry name
        var ministry = document.createElement("span");
        ministry.className = "job-company";
        var ministryText = document.createElement("a");
        //=====================================================================
        //date of concours
        var date = document.createElement("span");
        //=====================================================================
        //date of concours
        var time = document.createElement("time");
        time.className = "entry-date";
        //=====================================================================
        //date of concours
        var divSee = document.createElement("div");
        divSee.className = "show-view-more";
        //=====================================================================
        //button see more 
        var seeMore = document.createElement("a");
        seeMore.className = "btn btn-primary";
        seeMore.href = "Concours_Informations.html";
        if(concours.length != 0)
            seeMore.id = (concours.length);
        else 
            seeMore.id = 0;
        seeMore.type = "reset";
        seeMore.setAttribute("onclick","saveConcoursInfo("+seeMore.id+")");
        //=====================================================================
        //button see more 
        var iconDate = document.createElement("i");
        iconDate.setAttribute("class","fa fa-calendar");
        //=====================================================================
        var spaceConcours = document.createElement("br");
        //creating image 
       // var imageFeatured = document.createElement("item-featured");
        //var aImgage = document.createElement("a");
       // var image = document.createElement("img");
        //image.width = "50";
        //image.height = "50";
        //image.src = "../images/BF.png";
        //setting the div ids 
        //=====================================================================
        //=====================================================================
        //create the div loop-item-wrap
        
            
        
            
        
        //=====================================================================
        //adding the values concours values
        //=====================================================================
        //conocours name tree
        titleTag.appendChild(document.createTextNode(data.data[i].displayname));
        divLooptitle.appendChild(titleTag);
        
        //minstry name tree
            ministryConcours = data.data[i].ministere;
             var temp = "";
            var temp2 = "";
            var temp3 = "";
        if(ministryConcours.length > ministryLength){
           for(var j = 0; j <= ministryConcours.length; j++){
               if((j > ministryLength -10) && (ministryConcours.charAt(j) == " ")){
                   temp += "\n";
                   temp2 = temp;
                   temp3 = ministryConcours.substring(j,ministryConcours.length);
                   //console.log("concours: "+data.data[i].ministere);
                   //console.log("temp2: "+temp2);
                   //console.log("temp3: "+temp3);
                   ministryText.appendChild(document.createTextNode(temp2));
                   ministryText.appendChild(spaceConcours);
                   ministryText.appendChild(document.createTextNode(temp3));
                   
                   break;
               }else{
                   temp += ministryConcours.charAt(j);
               }
               
           }
        }
        else{
            ministryText.appendChild(document.createTextNode(data.data[i].ministere));
        }
           
            if(seeMore.id<1)
            h3Title.appendChild(document.createTextNode(data.data[i].ministere+": "));
            
            
           
            
            
        ministry.appendChild(ministryText);
        
        //date tree 
        time.appendChild(iconDate);
        //time.appendChild(document.createTextNode(data.data[i].date));
        time.appendChild(document.createTextNode("À Venir"));
        date.appendChild(time);
        
        //button tree
        seeMore.appendChild(document.createTextNode("Voir"));
        divSee.appendChild(seeMore);
        
        contentMeta.appendChild(ministry);
        contentMeta.appendChild(date);
        
        divLoopContent.appendChild(divLooptitle);
        divLoopContent.appendChild(contentMeta);
      
        divLoopWrap.appendChild(divLoopContent);
        divLoopWrap.appendChild(divSee);
        
        article.appendChild(divLoopWrap);
        
        nomConcours.push(data.data[i].displayname);
        nomMinistere.push(data.data[i].ministere);
        nomAcademique.push(data.data[i].degree);
        nomCycle.push(data.data[i].cycle);
        descriptionConcours.push(data.data[i].description);
        typeConcours.push(data.data[i].type);
        dateConcours.push(data.data[i].date);
        
        
        //adding concours to array
        concours.push(article);
        
        document.getElementById("wrap-concours").appendChild(article); 
        //=====================================================================
    }
    }
     var spanMinistryTitle = document.createElement("span");    
        spanMinistryTitle.className = "text-primary";
    
        h3Title.appendChild(spanMinistryTitle);
        divMinistryTitle.appendChild(h3Title);
    
        spanMinistryTitle.appendChild(document.createTextNode(count +" Concours Disponibles"));
            document.getElementById("titre").appendChild(divMinistryTitle); 
    });
   
    
}
//==========================================================================================================================================
function orange(){
     //api url for login verification
    var url = 'https://cors-anywhere.herokuapp.com/https://apiom.orange.bf:9007/payment';
    
    //store token
    var token;

// Login  method implementation:
async function postData() {
    
    //setting verification data variables
    
    var phone = localStorage.getItem("payTelephone");
    var otp = document.getElementById('payCode').value;
    
   var data = "<COMMAND>"+"<TYPE>OMPREQ</TYPE>"+"<customer_msisdn>"+phone+"</customer_msisdn>"+"<merchant_msisdn>65910011</merchant_msisdn>"+"<api_username>ECONCOURS</api_username>"+"<api_password>Concours@9</api_password>"+"<amount>100</amount>"+"<PROVIDER>101</PROVIDER>"+"<PROVIDER2>101</PROVIDER2>"+"<PAYID>12</PAYID>"+"<PAYID2>12</PAYID2>"+"<otp>"+otp+"</otp>"+
    "<reference_number>789233</reference_number>"+"<ext_txn_id>201500068544</ext_txn_id>"+"</COMMAND>";
    
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'no-cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'text/xml'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: data 
  });
  //response from the api
    //console.log(data);
    //console.log(response);
  return response.text(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    //console.log(data);
    applyConcours();
    
  });
}
//==========================================================================================================================================
function mobicashOuverture(){
     //api url for login verification
    var url = 'https://cors-anywhere.herokuapp.com/http://196.28.243.158:8443/mobicash/v1/webservices';
    
// Login  method implementation:
async function postData(data ={}) {
    
    
    data.login = "226Econcours";
    data.password = "XEc@n20$";
    console.log("ouverture");
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
      'serviceName' : "PAIDAUTH",
      'type': 'CNXREQ',
      'merchant-id': 'MERCDGOVS24001'    
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
    console.log(data);
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    
        
    localStorage.mobicashToken = "Bearer "+data.token;
    mobicashPay("Bearer "+data.token);
  });
}
//==========================================================================================================================================
function mobicashPay(token){
     //api url for login verification
    var url = 'https://cors-anywhere.herokuapp.com/http://196.28.243.158:8443/mobicash/v1/webservices';
    
    
// Login  method implementation:
async function postData() {
    
    var data={};
    data.merchantTxnid = makeID();
    data.customerMsisdn = localStorage.getItem("payTelephone");
    
    data.receiverMsisdn = "60828066";
    data.merchantPin = "1010";
    data.billCode = "NA";
    data.billTaxe = "0";
    data.billAmount = "800";
    
    console.log(data.merchantTxnid);
    console.log(token);
    console.log(data.customerMsisdn);
   // console.log("data: "+data);
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
      'serviceName' : "INITPAID",
      'token': token,
      'type': 'MPREQ',
      'merchant-id': 'MERCDGOVS24001'    
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
    console.log(data);
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    
        localStorage.mobicashTxnid = data.mobicashTxnid;
        localStorage.mpin = data.mpin
        alert("Un message vous a été envoyé par sms");
  });
}
//==========================================================================================================================================
function mobicashVerification(){
     //api url for login verification
    var url = 'https://cors-anywhere.herokuapp.com/http://196.28.243.158:8443/mobicash/v1/webservices';
    
    
// Login  method implementation:
async function postData() {
    
    var data = {};
    data.customerMsisdn = localStorage.getItem("payTelephone");
    data.mobicashTxnid = localStorage.getItem("mobicashTxnid");
    data.mpin = localStorage.getItem("mpin");
    
  //fetching values to api for verification
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
      'serviceName' : "VRIFYPAID",
      'token': localStorage.getItem("mobicashToken"),
      'type': 'MPREQ',
      'merchant-id': 'MERCDGOVS24001'    
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  //response from the api
    console.log(data);
  return response.json(); 
}
//get data from api after successful login
postData({ login: true })
  .then(data => {
    
        console.log(data);
    
    applyConcours();
  });
}
//==========================================================================================================================================
function makeID() {
   const length = 15;
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
//==========================================================================================================================================
function paySelections(){
    if(document.getElementById('paySelection').value == "OM"){
        orange();
    } else if(document.getElementById('paySelection').value == "MC"){
        mobicashVerification();
    }
}
//==========================================================================================================================================