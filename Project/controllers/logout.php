<?php
session_start();
session_destroy();

Header("Location: ../views/login.php");
exit();
?>