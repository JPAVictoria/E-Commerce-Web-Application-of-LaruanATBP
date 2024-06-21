<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href= "css/forgot-password.css">
    <title>Laruan ATBP</title>
</head>
<body>

<div class="container-info">
    <div class="container-image">
<img src="images/forgot-password-image.png" alt="forgot-password">
</div>
<div class="container-content">
<h1 id="login-title">Forgot Password</h1>
<p id="tip-info">Enter your email and we’ll send you a link to reset your passsword</p>




<form action = "password-reset.php" method="POST">
    <input  class = "email-area" type="email" id="email" name="email" placeholder = "anything@yahoo.com" required>
<br>
<button id="button-submit" name="password-reset-link">Send Password Reset Link</button>

</form>







<a href="login-interface.php" id="login-back">Back to login</a>
</div>
</div>


</body>
</html>
