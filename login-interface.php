<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href= "css/login-interface.css">
    <title>Laruan ATBP</title>
    <script src="/js/login-interface-functions.js"></script>
</head>
<body>

    <div class="content-wrapper">
    <img src="images/login-page-image.png" alt="login-image" id="login-image">
    <div class="info-wrapper">
        <h1 class="header-login">Welcome : )</h1>
        <p class="paragraph-login">To keep connected with us, please login with your personal<br> 
            information by email address and password</p>


        <form method="POST" action="register.php">
            <label class = "label">Email</label>
            <br>
            <input  class = "sign-up-styles" type="email" id="email" name="email" placeholder = "anything@yahoo.com" required>
            <br>
        <label class = "label">Password</label>
            <br>
            <input class = "sign-up-styles" type="password" id="password" name = "password" placeholder = "********" minlength="8" required>
            <br>
            <p class="forgot-button"><a href="forgot-password.php" id="forgot-password">Forgot Password?</a></p>
            <div class="submit-button">
                <input type="submit" id="submit-button" value="Login Now" name="logIn">
            </div>
            </form>
            <div class="create-button">
                <input type="submit" id="create-button" value="Create Account" onclick="createAccountDirect()">
            </div>
        </div>
    </div>


</body>
</html>