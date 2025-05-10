<?php

header('Content-Type: text/html; charset=UTF-8');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/exception.php';
require 'vendor/phpmailer/phpmailer/src/phpmailer.php';
require 'vendor/phpmailer/phpmailer/src/smtp.php';
require 'vendor/autoload.php';

require 'confi.php';

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;

    // Configuración del remitente
    $mail->setFrom(SENDER_EMAIL, SENDER_NAME);

    // Configuración del destinatario
    $mail->addAddress(RECIPIENT_EMAIL, 'Water Quality');

    // set email format to HTML
    $mail->isHTML(true);

    $body = file_get_contents('template.html');

    // Obtener los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $cupon = $_POST['cupon'];


    $email = utf8_encode($_POST['email']);
    $email = mb_convert_encoding($_POST['email'], 'UTF-8', 'auto');

      // Crear el cuerpo del mensaje
      $body = str_replace('{{ name }}', $name, $body);
      $body = str_replace('{{ email }}', $email, $body);
      $body = str_replace('{{ direccion }}', $direccion, $body);
      $body = str_replace('{{ phone }}', $phone, $body);
      $body = str_replace('{{ message }}', $message, $body);
      $body = str_replace('{{ cupon }}', $cupon, $body);

    // Agregar el cuerpo del mensaje
      $mail->isHTML(true);
      $mail->Body = $body;
      $mail->Subject = 'New Contact Request';

    // Enviar el correo electrónico
    $mail->send();
    header('Location: index.html');
    echo 'Mensaje enviado con éxito!';
    echo '<script>window.location.href = "index.html";</script>';
} catch (Exception $e) {
    echo 'Error: '. $mail->ErrorInfo;
}




// Verificar token CSRF
function generate_csrf_token() {
  $token = bin2hex(random_bytes(32));
  $_SESSION['csrf_token'] = $token;
  return $token;
}

if (!isset($_POST['csrf_token']) || $_POST['csrf_token']!== $_SESSION['csrf_token']) {
  die('Error: Token CSRF inválido');
  unset($_SESSION['csrf_token']);
} else {
  unset($_SESSION['csrf_token']);
}

// Sanitizar entrada
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$direccion = filter_var($_POST['direccion'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);


if (isset($_SESSION['form_attempts'])) {
  $_SESSION['form_attempts']++;
} else {
  $_SESSION['form_attempts'] = 1;
}

if ($_SESSION['form_attempts'] > 5) {
  die('Error: Demasiados intentos de envío');
}
?>
