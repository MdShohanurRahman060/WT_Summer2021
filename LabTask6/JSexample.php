<html>
<head>
<script src="js/validation.js"></script>
</head>
<body>

<form action="" onsubmit="return validateForm()" method="post">
  Full Name: <input type="text" id="fname" onkeyup="nameval()" name="fname"><br><br><p id="errorfname"></p>
  Email: <input type="text" id="email" onkeyup="emailval()" name="email"><br><br><p id="erroremail"></p>
  Password: <input type="text" id="password" onkeyup="passwordval()" name="password"><br><br><p id="errorpassword"></p>
  Comment: <textarea id="comment" cols="30" rows="4" onkeyup="commentval()" name="comment"></textarea><br><br><p id="errorcomment"></p>
  Gender: <input type="radio" name="gender">Female<input type="radio" name="gender">Male<input type="radio" name="gender">Other<br><bre><p id="errorgender"></p><br><br>
  <td>Please Choose a file</td>
		<td></td>
		<td></td>
        <td> <input type="file"</td>
      </tr>
    </table><br><br>	
	  
  <input type="submit" value="Submit">
  <button id="btn" onclick="myfunc()" >Click </button>
</form>



</body>
</html>
