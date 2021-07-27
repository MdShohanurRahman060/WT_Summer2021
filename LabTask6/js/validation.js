function validateForm() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var cmt = document.getElementById("cmt").value;
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var other = document.getElementById("other");
  var hobby1 = document.getElementById("hobby1");
  var hobby2 = document.getElementById("hobby2");
  var hobby3 = document.getElementById("hobby3");
  var file = document.getElementById("filetoupload").value;
  var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
  var res = patt.test(email);
  
  if (fname == "") {
   document.getElementById("err-fname").innerHTML="Please entter your name";
    return false;
  }
  if(email == ""){
      document.getElementById("err-email").innerHTML="Please enter a valid email";
      return false;
  }else if(!res){

    document.getElementById("err-email").innerHTML="Your Email format is icorrect";
    return false; 
  }
  if (pass == "") {
   document.getElementById("err-pass").innerHTML="Please fill your password";
    return false;
  }else if(pass.length < 8) {
      document.getElementById("err-pass").innerHTML="Password at least 8 characters";
  }
  
  if (cmt == "" || cmt.length < 5 ) {
      document.getElementById("err-cmt").innerHTML="Enter Your Comment";
      return false;
  }
  if (!male.checked && !female.checked && !other.checked) {
      document.getElementById("err-gender").innerHTML="Select your Gender";
      return false;
  }
  if (!hobby1.checked && !hobby2.checked && !hobby3.checked) {
  document.getElementById("err-chkbox").innerHTML=" Please Select your hobby";
      return false;
  }
  if (file == "") {
      document.getElementById("err-file").innerHTML="Please upload your file";
      return false;
  }
  
}