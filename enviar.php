<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $consulta = $_POST["consulta"];

    $to = "matiasureta28@gmail.com";
    $subject = "Nueva consulta de " . $nombre;
    $message = $consulta;
    $headers = "From: webmaster@example.com";

    mail($to, $subject, $message, $headers);
}
?>
