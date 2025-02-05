<?php
$to      = 'spthelpdesk99@gmail.com, knightranger94@gmail.com, info@offdiary.com';

$subject = ' Query Through www.usaauto-parts.com';
$message = 'Test messages';
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];
    'Reply-To: vanderengines1@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'Name: ' . $_POST['name'] . "\r\n" .
        'Phone: ' . $_POST['phone'] . "\r\n" .
        'model: ' . $_POST['model'] . "\r\n" .
        'select part: ' . $_POST['part'] . "\r\n" .
        'Select Year: ' . $_POST['select-year'] . "\r\n" .
        'Select Make: ' . $_POST['make'] . "\r\n" .
        'Email: ' . $_POST['email'];
        
mail($to, $subject, $message, $headers);
mail($to1, $subject, $message, $headers);
$from = $_POST['email'];
header("location: thank-you.php");

?>