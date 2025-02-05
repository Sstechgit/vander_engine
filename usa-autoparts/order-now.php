<!DOCTYPE html>
<html lang="en">

<head>
    
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6MDMPSG');</script>
<!-- End Google Tag Manager -->

  
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11152279745"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11152279745');
</script>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Now </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <style>
        body {
            width: 100vw;
            height: 100vh;
            overflow: hidden scroll;
            position: relative;
            background-color: #fff;

        }
        .full-width {
            width: 100% !important;
        }

        form {
            padding: 1rem;
            /* background-color: #02341861; */
            width: 100%;
            border-radius: 1rem;
            position: relative;
            background-color: #6c757d;
            border-radius: 2rem;
            background-color:#000;
        }

        .flexRow {

            width: 100%;
            display: flex;

            justify-content: space-between;

            row-gap: 25px;
            flex-wrap: wrap;
        }

        .flexCol {
            width: 48%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: "Poppins";
            padding: 1rem;

        }

        .flexCol input,
        .flexCol select,
        .flexCol textarea {
            width: 100%;
            border: 0;
            outline: 0;
            font-size: 1.1rem;
            color: #000;
            background-color: #fff;
            font-family: "Poppins" !important;
        }

        textarea {
            border-radius: 1rem;
            padding: 1rem;
        }

        .flexCol input::placeholder,.flexCol textarea::placeholder {
            color: #000;
        }

        .flexCol option {
            color: #000;
        }


        .flexCol input,
        select {
            border-radius: 10px;
            padding: 1rem;
        }

        

        .email {
            width: 100%;
        }

        .centerBtn {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .centerBtn button {
            width: 100%;
            border: 0;
            margin-top: 1rem;
            position: static;
            color: #fff;
            color: #fff;
            padding: 0.5rem 1rem;
            background-color: #2f3967;
            background-color: #2F3967;
            border-radius: 0.5rem;
            font-family: "Ubuntu";
            transition: all 0.5s ease;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
        }

        .centerBtn button:hover {
            background-color: red;
            
        }

        @media screen and (max-width: 300px) {
            .centerBtn button:hover {
                background-color: red;
                cursor: pointer;
    }
}



    

        .wrapper2 {
            padding: 2rem 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .wrapper h1 {
            font-family: 'Ubuntu';
            color: peru;
        }

        .CheckClass {

            width: 100%;
            display: flex;
            gap: 10px !important;
            color: white;
            align-items: center;
            padding: 1rem;
        }
        .CheckClass input{
            width: 1rem;
            height: 1rem;
        }
        .CheckClass label {
            padding: 0.5rem;
        }

        form label {
            margin: 0;
            padding: 0;
            width: max-content;
        }

        @media screen and (max-width: 645px) {
            .wrapper2 {
                padding: 1rem;
            }
        }

        .wrapper2 h1 {
            width: 100%;
            text-align: left;
            padding: 0 4rem;
            font-family: "Ubuntu";
            font-weight: bold;
            color: #2f3967;
        }

        @media screen and (max-width: 550px) {
            
            .flexCol {

           
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: "Poppins";
            padding: 1rem;

            }
        
        }

    </style>
    </style>
</head>

<body>
    
     <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6MDMPSG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    
    <?php include 'popup.php'; ?>
    <?php include './header/header.php'; ?>
    <div class="wrapper2">
        <h1>Order Now</h1>
        <form action="ordermail.php" method="POST">
            <div class="flexRow">
                <div class="flexCol">

                    <input type="text" id="name" name="name" placeholder="Full Name" required>
                </div>
                <div class="flexCol">

                    <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number" required>
                </div>

                <div class="flexCol">

                    <input type="email" id="email" name="email" placeholder="Email ID" required>
                </div>

                <div class="flexCol">

                    <select name="part-name" required>
                        <option value="">--Please Choose an option--</option>

                        <option value="Engine Assembly">Engine Assembly</option>
                        <option value="Transmission Assembly">Transmission Assembly</option>
                        <option value="Transfer Case Assembly">Transfer Case Assembly</option>
                        <option value="Axle Assembly">Axle Assembly</option>
                    </select>
                    <!-- <input type="text" id="parts" name="parts" required> -->
                </div>

                <div class="flexCol">

                    <input type="text" id="name" name="card-number" placeholder="Card Number" required>
                </div>
                <div class="flexCol">

                    <input type="text" id="Exp-Date" name="Exp-Date" placeholder="MM/YYYY" required>
                </div>
                <div class="flexCol">

                    <input type="text" id="cvv" name="CVV" placeholder="CVV" required>
                </div>
                <div class="flexCol">

                    <input type="text" id="amount" name="authorized-amount" placeholder="Authorized Amount" required>
                </div>

                <div class="full-width">
                    <div class="flexCol full-width">

                        <textarea id="address" name="shipping-address" rows="3" placeholder="Shipping Address"
                            required></textarea>
                    </div>
                    <div class="flexCol full-width">

                        <textarea id="address" name="billing-address" rows="3" placeholder="Billing Address"
                            required></textarea>
                    </div>
                    <div class="flexCol full-width">

                        <textarea id="message" name="message" rows="4" placeholder="Type Here Make/Model/Years/VIN etc."
                            required></textarea>
                    </div>
                    <div class="CheckClass">
                        <input type="checkbox" id="consent" name="consent" style="scale:1.5;" required>
                        <label for="consent" style="font-weight:normal;font-family:'Ubuntu'"> By entering
                            your phone number, you agree to receive text messages according to
                            our terms of use and privacy policy</label>
                    </div>
                </div>
            </div>
            <div class="centerBtn">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    <?php include './footer/footer.php'; ?>
</body>

</html>