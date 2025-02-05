<?php
$to      = 'spthelpdesk99@gmail.com, knightranger94@gmail.com';

$subject = ' Query Through www.usaauto-parts.com';
$message = 'Test messages';
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];
    'Reply-To: knightranger94@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 
	           'Additional Details: ' . $_POST['message'] . "\r\n" .
			   'Name: ' . $_POST['name'] . "\r\n" .
			   'phone: ' . $_POST['phone'] . "\r\n" .
			    'Email: ' . $_POST['email'];
        
mail($to, $subject, $message, $headers);
mail($to1, $subject, $message, $headers);
$from = $_POST['email'];


header("location: thank-you.php");
?> 