<?php
$to      = 'spthelpdesk99@gmail.com, knightranger94@gmail.com';

$subject = ' Query Through usaauto-parts.com';
$message = 'Test messages';
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];
    'Reply-To: usaautopartsllc01@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'Name: ' . $_POST['name'] . "\r\n" .
	           'E-mail: ' . $_POST['email'] . "\r\n" .
	           'Phone: ' . $_POST['mobile'] . "\r\n" .
			   'Service: ' . $_POST['service'] . "\r\n" .
			    'Message: ' . $_POST['message'];

mail($to, $subject, $message, $headers);
mail($to1, $subject, $message, $headers);
$from = $_POST['email'];
header("location: thank-you.php");
?> 