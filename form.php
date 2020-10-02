<?php


$name = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$email_from = 'reforma.artdeco@gmail.com';

$email_subject = "Nuevo Registro de Contacto";

$email_body = "Usuario: $name.\n".
              "Email: $email.\n".
              "Mensaje: $mensaje.\n";
$to = "reforma.artdeco@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);



include("conexion.php");
if (!$conexion) {
      die("Connection failed: " . mysqli_connect_error());
}
 


$query = "INSERT INTO mailing (nombre, email) VALUES ('$name','$email')" ;
#$envio = $mysqli_query($conexion,$query);
$conexion -> query($query);



header("Location: index.html");

?>