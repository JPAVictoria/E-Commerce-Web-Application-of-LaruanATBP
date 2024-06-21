<?php 

session_start();
include 'connect.php';


if(isset($_POST['signUp'])){
    $firstName = isset($_POST['fName']) ? $_POST['fName'] : '';
    $lastName = isset($_POST['lName']) ? $_POST['lName'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    
    if (!empty($firstName) && !empty($lastName) && !empty($email) && !empty($password)) {
        $password = md5($password);

        $checkEmail = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($checkEmail);

        if ($result->num_rows > 0) {
            echo
            "<script>
                alert('Email already exists');
                window.location.href = 'sign-up.php';
              </script>";
        } else {
            $insertQuery = "INSERT INTO users(firstName, lastName, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";
            if ($conn->query($insertQuery) === TRUE) {
                echo "<script>
                alert('Registration successful! You will be redirected to the login page.');
                window.location.href = 'login-interface.php';
              </script>";
            } else {
                echo "Error: " . $conn->error;
            }
        }
    } else {
        echo "All fields are required!";
    }
}

if(isset($_POST['logIn'])){

    session_unset();
    session_destroy();
    
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    
    if (!empty($email) && !empty($password)) {
        $password = md5($password);

        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            session_start();
            $row = $result->fetch_assoc();
            $_SESSION['email'] = $row['email'];

            echo  "<script>
            sessionStorage.setItem('currentUserEmail', '$email');
            localStorage.setItem('currentUserEmail', '$email');
            window.location.href = 'main-page.php';
          </script>";
          
    exit();

    
        } else {
            echo "Not Found, Incorrect Email or Password";
        }
    } else {
        echo "Email and Password are required!";
    }
}
?>