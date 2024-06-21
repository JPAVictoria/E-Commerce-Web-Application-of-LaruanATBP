<?php


include('connect.php');


if(isset($_POST['password-reset-link']))
{

    $email = mysqli_real_escape_string($con, $_POST['email']);



}


?>