<?php 
$file = $_FILES["fileupload"] ?? null;

if($file){
    $uploadDirectory = "../Uploads/";
    $path = $uploadDirectory.basename($file["name"]);
    echo "Printing file path..".$path;
    $res = move_uploaded_file($file["tmp_name"], $path);
}
?>