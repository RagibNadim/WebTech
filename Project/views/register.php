<?php

session_start();

?>

<form method="POST" action="../controllers/AuthController.php?act=register">
    
    <label>User Name:</label>
        <input type="text" name="userName">
        <?php echo "User Name error";?>
        <br><br>
