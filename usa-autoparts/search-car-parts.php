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
    <title>Search Car Parts</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100vw;
            height: 100vh;
        }
        /* #search{
            background: url('./assets/img/search-img.jpg') no-repeat center center/cover;
        } */
        .search-car-content {
            padding: 2rem;
            background: url('./images/isaac-alvarez.jpg') no-repeat center center/cover;
            width: 100%;
            display: flex;
            /* Add padding to adjust the content */
            color: #fff;
        }

        .left {
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem;
            gap: 20px;
        }

        .search-car-content img {
            width: 50%;
        }

        .form-container {
            background: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 8px;
            width: 100%;
            /* Adjust width to your preference */
            height: 100%;

        }

        .form-container form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .form-container .form-group {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }

        .form-container .form-group label {
            color: #fff;
            display: inline-block;
            font-family: Arial;
            font-weight: bold;
            /* color: skyblue; */
            font-size: 1.2rem;
        }

        .form-container .form-group label::first-letter {
            color: #bee5e5;
            font-size: 1.5rem;
        }

        .form-container .form-group input {

            border: 1px solid rgba(128, 128, 128, 0.597);
            background-color: rgba(0, 0, 0, 0.259);
            border-radius: 4rem;
            text-indent: 10px;
            width: calc(100% - 110px);
            padding: 0.5rem;
            color: #fff;
            outline: none;
            font-size: 1.1rem;
            transition: all 0.5s ease;

        }

        .form-container .form-group input::placeholder {
            color: lightgray;

        }

        .form-group input:hover {
            background-color: #ffffff54;
            color: greenyellow;
        }

        @media screen and (max-width: 560px) {
            .form-group {
                gap: 4px !important;
                flex-direction: column;
                width: 100%;
            }

            .form-group input,
            .form-group select {
                width: 100% !important;
            }

            .left {
                padding: 0.5rem;
            }

        }

        .form-container button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #2f3967;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
            width: 200px;
            align-items: center;
            justify-content: center;
            align-self: center;
            margin-top: 2rem;
            transition: all 0.5s ease;
        }

        button:hover {
            background-color: lightseagreen;
        }

        .search {
            font-family: "Ubuntu", Helvetica, sans-serif;

            width: 100%;
            font-size: 2rem;
            padding: 1.5rem 4rem;
            color: black;
        }





        .footer-content {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* Align items to the right */
            text-align: right;
            /* Align text to the right */
        }

        .footer-content h2 {
            color: yellow;
            margin-bottom: 20px;
            margin-right: 20px;
        }

        .footer-content h1 {
            color: white;
            margin-bottom: 20px;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            margin-left: 20%;
        }

        .footer-content p {
            color: white;
            margin-bottom: 20px;
            margin-left: 25%;
            line-height: 1.6;
            /* Improve readability */
        }

        .footer-content button {
            padding: 10px 20px;
            border: 1px;
            border-radius: 4px;
            background-color: yellow;
            color: black;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
            display: inline-block;
            margin-left: 28%;

        }

        .footer-content button a {
            text-decoration: none;
            color: black;
            display: block;
        }

        .footer-content button:hover {
            background-color: red;
            /* Slightly darker yellow for hover effect */
        }

        .card {

            display: grid;
            /* Use CSS Grid */
            grid-template-columns: 1fr 1fr;
            /* Define two equal columns */
            gap: 20px;
            margin-left: 50%;
        }

        .warranty .card-content {
            background-color: red;
            width: 200px;
            height: 100px;
            padding: 20px;
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: right;
            font-size: 18px;
            font-weight: bold;
        }

        .customer .card-content {
            background-color: red;
            width: 200px;
            height: 100px;
            padding: 20px;
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
        }

        .shipping .card-content {
            background-color: red;
            width: 200px;
            height: 100px;
            padding: 20px;
            margin: 20px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
        }

        .charge .card-content {
            background-color: red;
            width: 200px;
            height: 100px;
            padding: 20px;
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
        }

        .search-car-content .wrap {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: right;
            width: 100%;
            height: 100%;
            margin-top: -500px;
        }

        .slider {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem 0.2rem 0 0.2rem;
            gap: 10px;
            overflow: hidden;
        }

        .slide {
            width: 100%;
        }

        .slide img {
            border-radius: 0.5rem;
            border: 1px solid gray;
            width: 352px;
            height: 368.22px;
            margin-right: 2rem;
            filter: drop-shadow(2px 4px 6px black);

        }


        .slider a {
            background-color: #2f3967;
            color: #fff;
            font-weight: bold;
            font-size: 1.5rem;
            font-family: Arial;
            border-radius: 1rem;
            margin-top: 2rem;
            padding: 0.2rem 1rem;
            transition: all 0.5s ease;
        }

        .slider a:hover {

            background-color: lightcoral;
            color: #fff;
        }

        .right {
            width: 50%;
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
        }

        .wrap1 {
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 10px;

        }

        .wrap1 p {
            padding: 0 1rem;
            font-size: 1.8rem;
            font-family: Arial;
            color: orange;
            text-align: center;
        }

        .wrap1 p:nth-child(2) {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff;
        }

        .wrap1 p:nth-child(3),
        .wrap1 p:nth-child(4) {
            font-size: 1rem;
            color: #fff;
        }

        .wrap1 button {
            padding: 1rem 2rem;
            border: 1px solid orange;
            color: orange;
            font-size: 1.5rem;
            margin-top: 1rem;
            border-radius: 2rem;
            background-color: transparent;
            transition: all 0.5s ease;
            cursor: pointer;
        }

        .wrap1 button:hover {
            background-color: orange;
            color: #fff;
        }

        .blocksTiles {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            gap: 30px;
            margin-bottom: 1rem;
        }

        .blocksTiles .box {
            background-color: rgba(255, 64, 0, 0.357);
            padding: 2rem;
            gap: 20px;
            backdrop-filter: blur(2rem);
            border-radius: 1rem;
            transition: all 0.5s ease;
            height: 12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .blocksTiles .box:hover {
            scale: 1.1;
        }

        .blocksTiles .box i {
            font-size: 2rem;
            color: yellow;
        }

        .blocksTiles .box p {
            text-align: center;
            font-size: 1.2rem;
            font-family: Arial;
        }

        .modpay {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1rem;
        }

        .modpay img {
            margin: 0;
        }

        .form-group select {
            border: 1px solid rgba(128, 128, 128, 0.597);
            background-color: rgba(0, 0, 0, 0.259);
            border-radius: 4rem;
            text-indent: 10px;

            width: calc(100% - 110px);
            padding: 0.5rem;
            color: #fff;
            outline: none;
            font-size: 1.1rem;
            transition: all 0.5s ease;
        }

        .form-group option {
            background-color: #fff;
            color: #000;
        }

        .faq {
            width: 100%;

            padding: 2rem 5rem;
        }

        .headFaq {
            width: 100%;
            text-align: center;
            font-family: "Poppins";
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        .Qhead {
            display: flex;
            gap: 5px;
            font-size: 1.2rem;
            font-family: Arial;
            align-items: center;
            font-family: "Poppins";
            padding: 0.5rem 0;
            border-bottom: 1px solid gray;
            background-color: #fff;
            transition: all 0.1s ease;
            cursor: pointer;
        }

        .answer {
            font-family: "Poppins";
            color: gray;
            overflow: hidden;
            max-height: 0;
            transition: all 0.1s ease;
        }

        .collapse {
            max-height: 0;
        }

        .Qhead i {
            transition: all 0.1s ease;
        }

        .noRotate i {
            transform: rotate(0deg);

        }

        .noRotate {
            border-bottom: 1px solid lightgray;
            color: #000;
        }

        .rotate i {
            transform: rotate(90deg);

        }

        .rotate {
            border-bottom: 1px solid transparent;
            color: orange;
        }

        .expand {
            max-height: 25rem;
            margin-bottom: 1rem;
        }

        @media screen and (max-width: 1022px) {
            .search-car-content {
                flex-direction: column;
            }

            .left,
            .right {
                width: 100%;
            }

            .pay img {
                width: 70%;
            }

        }

        @media screen and (max-width: 591px) {
            .right {
                flex-direction: column !important;
                padding: 0;
            }

            .headFaq {
                margin-bottom: 0;
            }

            .faq {
                padding: 2rem;
            }

            .Qhead {
                font-size: 1rem;
            }
        }

        @media screen and (max-width: 466px) {
            .faq {
                padding: 2rem;
            }

            .headFaq {
                font-size: 1.4rem;
            }
        }

        @media screen and (max-width:375px) {
            p {
                font-size: 16px !important;
            }

            .wrap1 {
                gap: 0;
            }

            .wrap1 button {
                padding: 0.5rem 1rem;
                margin-top: 0;
            }
        }
    </style>
</head>

<body>
    
     <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6MDMPSG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    
    <?php include 'popup.php'; ?>
    <?php include './header/header.php'; ?>
    <h1 class="search">Search Your Part</h1>
    <!-- <div id="search">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="left">

                        <img src="./images/Asset-1-1-1536x309.png" alt="Image">
                        <div class="form-container">
                            <form action="mailer.php" method="POST">
                                <div class="form-group">
                                    <label for="year">Year</label>
                                    <select id="year" aria-required="true" aria-invalid="false" name="select-year">
                                        <option value="">- Select Year -</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="make">Make</label>
                                    <select id="make" aria-required="true" aria-invalid="false" name="make">
                                        <option value="Acura">Acura</option>
                                        <option value="Alfa">Alfa</option>
                                        <option value="AMC">AMC</option>
                                        <option value="Aston">Aston</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Austin">Austin</option>
                                        <option value="Bentley">Bentley</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Buick">Buick</option>
                                        <option value="Cadillac">Cadillac</option>
                                        <option value="Chevy">Chevy</option>
                                        <option value="Chrysler">Chrysler</option>
                                        <option value="Daewoo">Daewoo</option>
                                        <option value="Daihatsu">Daihatsu</option>
                                        <option value="Datsun">Datsun</option>
                                        <option value="Dodge">Dodge</option>
                                        <option value="Eagle">Eagle</option>
                                        <option value="Ferrari">Ferrari</option>
                                        <option value="Fiat">Fiat</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Geo">Geo</option>
                                        <option value="GMC">GMC</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Hummer">Hummer</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="Infiniti">Infiniti</option>
                                        <option value="International">International</option>
                                        <option value="Isuzu">Isuzu</option>
                                        <option value="Jaguar">Jaguar</option>
                                        <option value="Jeep">Jeep</option>
                                        <option value="Kia">Kia</option>
                                        <option value="LandRover">LandRover</option>
                                        <option value="Lexus">Lexus</option>
                                        <option value="Lincoln">Lincoln</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Mercedes">Mercedes</option>
                                        <option value="Mercury">Mercury</option>
                                        <option value="Mitsubishi">Mitsubishi</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Oldsmobile">Oldsmobile</option>
                                        <option value="Peugot">Peugot</option>
                                        <option value="Plymouth">Plymouth</option>
                                        <option value="Pontiac">Pontiac</option>
                                        <option value="Porsche">Porsche</option>
                                        <option value="Saab">Saab</option>
                                        <option value="Saturn">Saturn</option>
                                        <option value="Scion">Scion</option>
                                        <option value="Sterling">Sterling</option>
                                        <option value="Subaru">Subaru</option>
                                        <option value="Suzuki">Suzuki</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Volkswagon">Volkswagon</option>
                                        <option value="Volvo">Volvo</option>
                                        <option value="Yugo">Yugo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="model">Model</label>
                                    <input type="text" id="model" name="model" required placeholder="Enter Model">
                                </div>
                                <div class="form-group">
                                    <label for="part">Part</label>
                                    <select id="part" aria-required="true" aria-invalid="false" name="part">
                                        <option value="- Select Part -">- Select Part -</option>
                                        <option value="Engine">Engine</option>
                                        <option value="Transmission">Transmission</option>
                                        <option value="Reman Engine">Reman Engine</option>
                                        <option value="Reman Transmission">Reman Transmission</option>
                                        <option value="Turbo">Turbo</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" required placeholder="Enter Phone">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" required placeholder="Enter Email">
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="wrap1">
                        <p>Let's make Smart Decision with USA Auto Parts LLC</p>
                        <p>
                            Call us at +1800-2131-371
                        </p>
                        <p>USA’s top trusted Auto Parts startup</p>
                        <p>Over 50,000 Happy Customers</p>
                        <button>Get Free Quotes</button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <div class="search-car-content">
        <div class="left">

            <img src="./images/Asset-1-1-1536x309.png" alt="Image">
            <div class="form-container">
                <form action="mailer.php" method="POST">
                    <div class="form-group">
                        <label for="year">Year</label>
                        <select id="year" aria-required="true" aria-invalid="false" name="select-year">
                            <option value="">- Select Year -</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="make">Make</label>
                        <select id="make" aria-required="true" aria-invalid="false" name="make">
                            <option value="Acura">Acura</option>
                            <option value="Alfa">Alfa</option>
                            <option value="AMC">AMC</option>
                            <option value="Aston">Aston</option>
                            <option value="Audi">Audi</option>
                            <option value="Austin">Austin</option>
                            <option value="Bentley">Bentley</option>
                            <option value="BMW">BMW</option>
                            <option value="Buick">Buick</option>
                            <option value="Cadillac">Cadillac</option>
                            <option value="Chevy">Chevy</option>
                            <option value="Chrysler">Chrysler</option>
                            <option value="Daewoo">Daewoo</option>
                            <option value="Daihatsu">Daihatsu</option>
                            <option value="Datsun">Datsun</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Eagle">Eagle</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Geo">Geo</option>
                            <option value="GMC">GMC</option>
                            <option value="Honda">Honda</option>
                            <option value="Hummer">Hummer</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Infiniti">Infiniti</option>
                            <option value="International">International</option>
                            <option value="Isuzu">Isuzu</option>
                            <option value="Jaguar">Jaguar</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Kia">Kia</option>
                            <option value="LandRover">LandRover</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Lincoln">Lincoln</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Mercury">Mercury</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Oldsmobile">Oldsmobile</option>
                            <option value="Peugot">Peugot</option>
                            <option value="Plymouth">Plymouth</option>
                            <option value="Pontiac">Pontiac</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Saab">Saab</option>
                            <option value="Saturn">Saturn</option>
                            <option value="Scion">Scion</option>
                            <option value="Sterling">Sterling</option>
                            <option value="Subaru">Subaru</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volkswagon">Volkswagon</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Yugo">Yugo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="model">Model</label>
                        <input type="text" id="model" name="model" required placeholder="Enter Model">
                    </div>
                    <div class="form-group">
                        <label for="part">Part</label>
                        <select id="part" aria-required="true" aria-invalid="false" name="part">
                            <option value="- Select Part -">- Select Part -</option>
                            <option value="Engine">Engine</option>
                            <option value="Transmission">Transmission</option>
                            <option value="Reman Engine">Reman Engine</option>
                            <option value="Reman Transmission">Reman Transmission</option>
                            <option value="Turbo">Turbo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required placeholder="Enter Phone">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" required placeholder="Enter Email">
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div class="right">
            <div class="wrap1">
                <p>Let's make Smart Decision with US Auto</p>
                <p>
                    Call us at +1800-213-1371
                </p>
                <p>USA’s top trusted Auto Parts startup</p>
                <p>Over 50,000 Happy Customers</p>
                <button>Get Free Quotes</button>
            </div>
            <div class="blocksTiles">
                <div class="row g-3">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="box">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                            <p> UP TO 5 YEARS UNLIMITED MILE WARRANTY</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 ">
                        <div class="box">
                            <i class="fa-solid fa-truck-fast"></i>
                            <p> FREE SHIPPING</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 ">
                        <div class="box">
                            <i class="fa-solid fa-chart-line"></i>
                            <p> NO CORE CHARGE</p>
                        </div>

                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 ">
                        <div class="box">
                            <i class="fa-solid fa-handshake"></i>
                            <p> EXCELLENT CUSTOMER SUPPORT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay modpay">
                <p style="font-size:1.5rem; color:white;font-family:Arial;">Pay Securely with</p>
                <img src="./images/cardList.png" alt="pay">
            </div>
        </div>


    </div>
    </div>
    <div class="slider">
        <marquee class="slide" behavior="alternate" direction="left" scrollamount="2">
            <img src="./images/1.png" alt="">
            <img src="./images/2.png" alt="">
            <img src="./images/3.png" alt="">
            <img src="./images/4.png" alt="">
            <img src="./images/5.png" alt="">
            <img src="./images/6.png" alt="">
            <img src="./images/7.png" alt="">
            <img src="./images/8.png" alt="">

        </marquee>
        <a href="#">Get Quotes</a>
    </div>
    <div class="faq">
        <p class="headFaq">Frequently asked Questions</p>
        <div class="QA">
            <div class="qtile">
                <div class="Qhead A1" onclick="slide('A1')"><i class="fa-solid fa-play"></i> What Is the Purpose of a
                    Car Transmission?
                </div>
                <div class="answer" id="A1">
                    Transmissions in automobiles are either automatic or manual. Automobiles with manual gearboxes are
                    also known as clutches or stick-shift vehicles. Automatic transmissions are the most widespread and
                    are most likely what you drive. A transmission’s primary function is to translate speeds and torques
                    along a vehicle’s drive system. This means that it changes a vehicle’s gear ratios automatically,
                    allowing it to drive within its limited speed range while yet producing a wide variety of torque and
                    output speeds.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A2" onclick="slide('A2')"><i class="fa-solid fa-play"></i> Is it necessary to maintain
                    a car's transmission on a regular basis?
                </div>
                <div class="answer" id="A2">
                    For dependable transmission performance and durability, proper maintenance is essential. Routine
                    automobile services, such as frequent inspections and tune-ups, are critical preventative measures.
                    In addition, utilising the right fuel and fuel additives can significantly improve the performance
                    and longevity of an automobile engine and transmission.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A3" onclick="slide('A3')"><i class="fa-solid fa-play"></i> What Are the Symptoms of
                    Transmission Issues?
                </div>
                <div class="answer" id="A3">
                    When there is a problem with a vehicle’s transmission, it show hundreds of symptoms. However, there
                    are three warning indicators that you should constantly be aware of. Burning odours, transmission
                    fluid leaking, and an illuminated check engine light are examples of these. If you discover a puddle
                    of red fluid beneath your vehicle, it is likely that your transmission is leaking. If your check
                    engine light flashes, it could be due to a transmission issue. In addition, if you notice a burning
                    smell while driving, it could be due to unclean transmission fluid.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A4" onclick="slide('A4')"><i class="fa-solid fa-play"></i> What parts are available
                    for my vehicle at USA Auto Parts LLC?
                </div>
                <div class="answer" id="A4">
                    USA Auto Parts LLC Ss sells a wide range of spare parts for your car. We offer the most
                    comprehensive selection of 100% genuine OEM, OES, and aftermarket auto parts at the most competitive
                    prices.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A5" onclick="slide('A5')"><i class="fa-solid fa-play"></i> How does USA Auto Parts LLC
                    ensure that the products are genuine?
                </div>
                <div class="answer" id="A5">
                    At USA Auto Parts LLC, we follow to a strict direct procurement policy, which means purchasing
                    products directly from manufacturers and storing them in our state-of-the-art inventory, which is
                    spread across the country. This allows us to keep the original quality replacement parts at the
                    greatest costs.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A6" onclick="slide('A6')"><i class="fa-solid fa-play"></i> Is USA Auto Parts LLC is a
                    Trusted Source to get Car Parts?
                </div>
                <div class="answer" id="A6">
                    Without a question, USA Auto Parts LLC is a well-known online marketplace that offers customers a
                    simple and convenient way to acquire high-quality auto components. While the majority of car parts
                    sold by Amazon come from reputable suppliers, it might be difficult to tell if you’re receiving the
                    proper product for your vehicle because you’re not dealing directly with an auto expert.
                </div>
            </div>
            <div class="qtile">
                <div class="Qhead A7" onclick="slide('A7')"><i class="fa-solid fa-play"></i> How do I choose between OEM
                    and aftermarket auto parts?
                </div>
                <div class="answer" id="A7">
                    It is suggested that customers with brand new automobiles or vehicles in need of a key part
                    replacement use new auto parts to ensure long life and dependable performance. However, regardless
                    of the age of your vehicle, aftermarket components are a reasonable solution if you require a simple
                    part with a limited shelf life.
                </div>
            </div>
        </div>
    </div>

    <?php include './footer/footer.php'; ?>
</body>
<script>

    const slide = (id) => {

        let answer = document.querySelector(`#${id}`);
        let Question = document.querySelector(`.${id}`);


        if (answer.classList.contains("expand")) {
            answer.classList.remove("expand")

            answer.classList.add("collapse")
            Question.classList.remove("rotate")

            Question.classList.add("noRotate")


        }
        else {
            answer.classList.remove("collapse")

            answer.classList.add("expand")
            Question.classList.remove("noRotate")

            Question.classList.add("rotate")



        }
        toogle = !toogle;
    }
</script>

</html>