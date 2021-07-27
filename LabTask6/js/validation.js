
function validateForm() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    var res = patt.test(email);
    
    if (fname == "" || fname.length < 6 ) {
     document.getElementById("errorfname").innerHTML="Enter Your Full name";
      return false;
    }
   if(!res)
    {
      document.getElementById("erroremail").innerHTML="Email format is not correct";
      return false; 
    }
    if (password == "" || password.length < 8 ) {
      document.getElementById("errorpassword").innerHTML="Please Enter 8 characters minimum";
       return false;
     }
     if (comment == "" || comment.length < 3) {
      document.getElementById("errorcomment").innerHTML="Please Enter your Comment at least 3 characters";
       return false;
     }

     if (gender == "" ) {
      document.getElementById("errorgender").innerHTML="Please Select your Gender";
       return false;
     }
    
  }

 function nameval()

  {
    var fname = document.getElementById("fname").value;
    if (fname == "" || fname.length < 6 ) {
        document.getElementById("errorfname").innerHTML="Please insert a valid name";
       }
       else
       {
        document.getElementById("errorfname").innerHTML="your name is valid";

       }
  }

  function emailval()

  {
    var email = document.getElementById("email").value;
    if (!res ) {
        document.getElementById("erroremail").innerHTML="Please insert a valid email";
       }
       else
       {
        document.getElementById("erroremail").innerHTML="your email is valid";

       }
  }

  function passwordval()

  {
    var password = document.getElementById("password").value;
    if (password == "" || password.length < 8 ) {
        document.getElementById("errorpassword").innerHTML="Please insert a valid password";
       }
       else
       {
        document.getElementById("errorpassword").innerHTML="your password is valid";

       }
  }

  function commentval()
  {
    var comment= document.getElementById("comment").value;
    if (comment == "" || comment.length < 3) {
        document.getElementById("errorcomment").innerHTML="Please insert your comment at least 3 characters ";
       }
       else
       {
        document.getElementById("errorcomment").innerHTML="your comment has been inserted";

       }
  }

  function genderval()
  {
    var gender= document.getElementById("gender").value;
    if (gender == "") {
        document.getElementById("errorgender").innerHTML="Please Select your gender ";
       }
       else
       {
        document.getElementById("errorgender").innerHTML="Selected! ";

       }
  }

  function myfunc()
  {
    alert("Hello World!");
  }