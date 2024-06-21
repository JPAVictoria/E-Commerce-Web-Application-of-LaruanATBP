<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href= "css/sign-up.css">
    <title>Laruan ATBP</title>
</head>
<body>

    <div class="parent">
    <div class="sign-up-container">
        <h1>CREATE ACCOUNT</h1>
        <form action= "register.php" method="POST">
            <label class = "label">First Name</label>
            <br>
            <input class = "sign-up-styles" type="text" id="fName" name="fName" placeholder="Name" required>
            <label class = "label">Last Name</label>
            <br>
            <input class = "sign-up-styles" type="text" id="lName" name="lName" placeholder="Name" required>
            <label class = "label">Email</label>
            <br>
            <input  class = "sign-up-styles" type="email" id="email" name="email" placeholder = "anything@yahoo.com" required>
            <label class = "label">Password</label>
            <br>
            <input class = "sign-up-styles" type="password" id="password" name = "password" placeholder = "********" minlength="8" required>
            <br>
            <div class="button-center">
            <input type="submit" id="submit-button" value="SUBMIT" name="signUp">
        </div>
        </form>
    </div>
    </div>
    
</body>
</html>