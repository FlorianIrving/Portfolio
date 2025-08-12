<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';
$captcha = $data['captcha'] ?? '';

if (!$captcha) {
    echo 'reCAPTCHA-Token fehlt.';
    exit;
}

$verifyResponse = file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?secret=' . $_ENV['RECAPTCHA_SECRET'] . '&response=' . $captcha
);
$responseData = json_decode($verifyResponse, true);

if (!$responseData['success']) {
    echo 'reCAPTCHA-Überprüfung fehlgeschlagen.';
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.strato.de';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'];
    $mail->Password   = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom($_ENV['SMTP_USER'], 'Kontaktformular');
    $mail->addAddress($_ENV['SMTP_USER']);

    $mail->isHTML(false);
    $mail->Subject = 'Neue Nachricht vom Kontaktformular';
    $mail->Body    = "Name: {$name}\nEmail: {$email}\nNachricht:\n{$message}";

    $mail->send();
    echo 'Nachricht erfolgreich gesendet.';
} catch (Exception $e) {
    echo "Fehler beim Senden: {$mail->ErrorInfo}";
}
