function orange(){
     //api url for login verification
    var url = 'https://apiom.orange.bf:9007/payment';
    
    //setting verification data variables
    
    
   var data = "<COMMAND>"+"<TYPE>OMPREQ</TYPE>"+"<customer_msisdn>77193185</customer_msisdn>"+"<merchant_msisdn>65910011</merchant_msisdn>"+"<api_username>ECONCOURS</api_username>"+"<api_password>Concours@9</api_password>"+"<amount>100</amount>"+"<PROVIDER>101</PROVIDER>"+"<PROVIDER2>101</PROVIDER2>"+"<PAYID>12</PAYID>"+"<PAYID2>12</PAYID2>"+"<otp>0000</otp>"+
    "<reference_number>789233</reference_number>"+"<ext_txn_id>201500068544</ext_txn_id>"+"</COMMAND>";
    

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://apiom.orange.bf:9007/payment");
xhr.setRequestHeader("content-type", "application/xml");
xhr.setRequestHeader("mode", "no-cors");
xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://apiom.orange.bf:9007/payment');

xhr.send(data);
}