<?php

session_start();
include("connect.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main-page.css">
    <title>Laruan ATBP</title>
    <script src="/js/main-page.js"></script>
</head>
<body>    
       
    <header>
    <h1 id="title">LaruanATBP</h1>

        <ul>
            <li><a href="main-page.php">Home</a></li>
            <li><a href="products-page.html">Products</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li class="sign-out-button"><a href="#" onclick="signoutAlertAndRedirect();return false;">Sign Out</a></li>
        </ul>
</header>

<hr>

<!--HEADER CODE ABOVE-->

<img src="images/main-page-image.png" alt="zoro">
<div class="content-container">
    <h1 id="main-content-title">


    Hello  <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            echo '<span class="full-name">' . $row['firstName'] . ' ' . $row['lastName'] . '</span>';
        }
       }
       ?>
       , welcome to LaruanATBP.

</h1>

    <p class="main-content-paragraph">LaruanATBP is a partnership business that sells one piece figurines for<br> 
        a living. They sell a variety of sizes of one piece figurines, from smallest to<br>
        the biggest size. From the whimsical to the profound, these tiny treasures hold <br>
        stories untold, waiting to be unraveled by those who dare to buy. Whether<br> 
        adorning a shelf or igniting conversations, each figurine is a testament to the<br> 
        power of artistry and the boundless realms of the one piece world.</p>
</div>

<!---BODY CODE ABOVE-->

<div class="footer-container">
    <p id="creator-line"><a href="https://github.com/JPAVictoria" target="_blank">© Dre Does Tech Productions</a></p>
    <p class="contact-info"><b>Contact</b> | 0966-3108-105</p>
    <p class="contact-info"><b><a href="https://www.facebook.com/dollsnfigures" target="_blank">Facebook</a></b> | LaruanATBP</p>
</div>

<!--FOOTER CODE ABOVE-->

<script>
    function restoreSessionFromLocalStorage() {
        const email = localStorage.getItem('currentUserEmail');
        if (email) {
            // Restore email from localStorage to sessionStorage
            sessionStorage.setItem('email', email);
        }
    }

    // Call the function to restore session data from localStorage when the page loads
    window.onload = function () {
        restoreSessionFromLocalStorage();
    };
</script>



</body>
</html>