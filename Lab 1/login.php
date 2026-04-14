<?php
session_start();
$usernameErr = $_SESSION['usernameErr'] ?? '';
$passwordErr = $_SESSION['passwordErr'] ?? '';

unset($_SESSION['usernameErr']);
unset($_SESSION['passwordErr']);
?>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <form method="POST" action="loginValidation.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <?php echo "Username error";?>
        <br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <p style="color: red;"><?php echo "Password error";?></p>
        <br><br>
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>