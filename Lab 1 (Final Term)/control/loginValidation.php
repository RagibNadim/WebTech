<?php
session_start();

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$hasUsernameError = true;
$hasPasswordError = true;

if(!$username){
    $_SESSION['usernameErr'] = "Username is required";
}else{
    unset($_SESSION['usernameErr']);
    $hasUsernameError = false;
}

if(!$password){
    $_SESSION['passwordErr'] = "Password is required";
}else{
    unset($_SESSION['passwordErr']);
    $hasPasswordError = false;
}

if($hasUsernameError || $hasPasswordError){
    header("Location: login.php");
    exit();
}else{
    echo "<h1>Hello Mr, $username</h1>";
    echo "<h2>Your password is: $password</h2>";
    echo "<h1>Login successful</h1>";
}
?>