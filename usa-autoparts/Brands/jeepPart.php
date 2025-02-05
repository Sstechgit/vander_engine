<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeep</title>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- font google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100vw;
            height: 100vh;
            overflow: auto;
        }

        .WrapContainer {
            width: 100%;
        }

        .tailHeader {
            width: 100%;
            background-color: #242323;
            padding: 1rem 5rem;

        }

        .tailHeader span {
            color: #fff;
            font-size: 1.2rem;
            font-family: Arial;
            display: flex;
            gap: 5px;
        }

        .tailHeader a {
            color: #E3AC06;
        }

        .formCont {
            width: 100%;
            display: flex;
            padding: 1rem;
        }

        .leftForm,
        .rightForm {
            width: 60%;
            min-height: 6rem;

        }

        .leftForm {
            width: 40%;
        }

        @media screen and (max-width: 1012px) {
            .formCont {
                flex-direction: column;
            }

            .leftForm,
            .rightForm {
                width: 100%;
            }

            .iconTable {

                margin: auto;
            }
        }

        /* form classes */
        form {
            width: 100%;
            padding: 1rem;


        }

        .flexRow {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px;
            background-color: black;
            padding: 1rem;
            border-radius: 1rem;
        }

        .flexCol {
            width: 48%;
        }

        @media screen and (max-width: 343px) {
            .flexRow {
                gap: 5px;
            }

            .flexCol {
                width: 100%;

            }

            .flexCol input,
            .flexCol select {
                font-size: 1rem !important;
            }
        }

        .flexCol select,
        .flexCol input {
            padding: 0.2rem;
            width: 100%;
            font-family: "Poppins";
            font-size: 1.2rem;
            color: #000;
            text-indent: 0.5rem;
            outline: 0;
            border: 0;
            border-radius: 0.2rem;
        }

        .flexCol input::placeholder {
            color: #000;
        }

        .email {
            width: 100%;
        }

        .centerBtn,
        .centerBtn button {
            width: 100%;
        }

        .centerBtn button {
            background-color: #2F3967;
            color: #fff;
            font-size: 1.2rem;
            font-family: "Poppins";
            border: 0;
            border-radius: 0.2rem;
            cursor: pointer;
        }

        /* Right form */
        .rightForm {
            padding: 1rem;
        }

        .rightForm p {
            font-size: 2rem;
            font-family: "Poppins";
            width: 90%;
            line-height: 2.4rem;
            font-weight: bold;
        }

        .iconTable {
            width: fit-content;
            padding: 1rem 0;
        }

        .iconTable div {
            display: flex;
            gap: 1rem;

            align-items: center;
            font-size: 1.3rem;
            font-family: "Poppins"
        }

        .iconTable div span {
            margin: 0;

        }

        .iconTable div i {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.8rem;
            height: 1.8rem;
            color: #BE1111;
        }

        .btns {
            margin-top: 2rem;
        }

        .btns button {
            display: flex;
            gap: 25px;
            width: 15rem;
            font-size: 1.3rem;
            padding: 0.5rem 1rem;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            border: 0;
            outline: none;
            background-color: #2F3967;
            font-family: "Poppins";
            box-shadow: 0 0 1px #000;
            border: 2px solid #fff;
            cursor: pointer;
        }

        .btns button i {
            color: #fff;
        }

        .btns span {
            color: #fff;
        }

        .specialist {
            margin-top: 1rem;
            display: flex;
            gap: 8px;
        }

        .call {

            display: flex;
            flex-direction: column;
            gap: 2px !important;
            align-items: flex-start !important;

        }

        .specialist i {
            font-size: 2rem !important;
            padding: 2rem;
            border-radius: 100%;
            /* width: 2rem !important;
            height: 2rem !important; */
            background-color: #BE1111;
            color: #fff !important;


        }

        .call span:first-child {
            font-size: 0.8rem;

        }

        .call span:nth-child(2) {
            font-weight: bold;
            font-family: "Poppins";
            font-size: 2rem;
        }

        @media screen and (max-width: 564px) {

            .btns {
                justify-content: space-between;
            }

            .btns button {
                font-size: 1.2rem !important;
                width: fit-content;
                gap: 5px;

            }

            .iconTable div {

                font-size: 1.2rem;


            }

            .iconTable div i {
                width: 1.2rem;
                height: 1.2rem;

                font-size: 1rem;

            }

            .iconTable div span {
                font-size: 1rem;


            }

            .call span:nth-child(2) {
                font-size: 1.2rem;
            }
        }

        /* stats */
        .statics {
            display: flex;
            width: 100%;
            background-color: #2F3967;
            /* height: 6rem; */
            padding: 10px 0px;
            align-items: center;
        }

        .stat {
            width: 33%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* border: 1px solid #fff; */
            padding-top: 1rem;

            gap: 10px;

        }

        .stat p {
            font-family: "Poppins";
            color: #fff;
            font-weight: bold;
        }

        .stat img {
            filter: invert();
            height: 4rem;
            width: 4rem;
        }

        @media screen and (max-width: 840px) {
            .statics {
                flex-direction: column;
                /* height: 100%; */
            }

            .modStatics {
                height: 100% !important;
                gap: 10px;
            }

            .stat {
                width: 100%;
            }

            .tileStats {
                width: 100% !important;
            }
        }

        /* page */
        @media screen and (max-width: 745px) {
            .pageCont {
                flex-direction: column;
            }

            .leftPage,
            .rightPage {
                width: 100% !important;
                padding: 0.5rem !important;
            }

            .rightPage {
                min-height: 25rem !important;
            }
        }

        .pageCont {
            width: 100%;
            display: flex;
            padding: 1rem;
            height: fit-content;
            position: relative;


        }

        .leftPage,
        .rightPage {
            width: 50%;

        }

        .leftPage {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 1rem 2rem;
            height: fit-content;

        }

        .leftPage p {
            font-family: "Ubuntu";
            font-size: 16px;
        }

        .leftPage p:first-child {
            font-size: 2rem;
            font-family: "Poppins";
            font-weight: bold;
        }



        .leftPage button {
            font-size: 1.2rem;
            font-family: "Poppins";
            background-color: #2F3967;
            color: #fff;
            font-weight: bold;
            padding: 0.5rem 1.3rem;
            width: fit-content;
            border: 0;
            border-radius: 1.5rem;
        }

        .rightPage {
            flex: 1;

            background: no-repeat center center/contain;
        }


        /* Why choose */
        .choose {
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .choose::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: url("./images/bg7.webp") no-repeat center center/cover;
            z-index: -1;
        }

        .choose p:first-child {
            font-size: 2rem;
            font-family: "Poppins";
            text-align: center;
            font-weight: bold;
            color: #2F3967;
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            /* Adjust spacing between cards */
            padding: 20px;
            /* background-color: dark;  */
            /* background-image: linear-gradient(to bottom right, #252525, #4a4a4a); */
            /* background-image: url('./images/stock-photo.jpg'); */
            position: relative;

        }



        .basic-card {
            /* background-image: linear-gradient(to bottom right, #252525, #4a4a4a); */
            border: 1px solid #636363;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
            margin: 10px;
            padding: 20px;
            width: calc(33.333% - 40px);
            box-sizing: border-box;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            /* Fixed height */
            background-color: #2F3967;

            transition: all 0.5s ease;


        }

        .basic-card-dark .card-title {
            color: #fff;
            text-align: center;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            font-weight: bold;
        }

        .basic-card:hover {
            scale: 1.05;
            background-color: #e40000;
        }


        .basic-card-dark .card-link {
            border-top: 1px solid #636363;
        }

        .basic-card-dark .card-link a:after {
            background: #eee;
        }

        .basic-card span {
            transition: all 1s ease;
        }

        .basic-card:hover span {
            color: black;
        }

        @media (max-width: 768px) {
            .basic-card {
                width: calc(50% - 40px);
                /* 2 cards per row on smaller screens */
            }
            .service-head {
                text-align: center;
            }
        }

        @media (max-width: 480px) {
            .basic-card {
                width: calc(100% - 40px);
                /* 1 card per row on very small screens */
            }
        }

        /* tile */
        @media screen and (max-width: 768px) {
            .TileCont {
                justify-content: center !important;
            }

            .tileParent {
                width: 100% !important;
            }
        }

        .TileCont {
            width: 100%;
            background: no-repeat center center/cover;
            padding: 2.5rem 1rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .tileParent {
            width: 40%;
            height: 100%;
            padding: 0.5rem;
            border-radius: 2rem;

            background-color: #fff;

        }

        .tileDiv {
            display: flex;
            flex-direction: column;
            border: 2px solid #2f3967;
            padding: 2rem;
            border-radius: 2rem;

        }

        .tileDiv p {
            font-family: "Poppins";
            font-size: 0.9rem;
        }

        .tileDiv p:first-child {
            font-size: 2rem;
            font-family: "Poppins";
            font-weight: bold;
        }

        /* faq */
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

        .Qhead i {
            font-size: 1.1rem;
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

        @media screen and (max-width: 466px) {
            .faq {
                padding: 2rem;
            }

            .headFaq {
                font-size: 1.4rem;
            }
        }
        .service-card {
            text-align: center;
            /* margin: 10px; */
            transform: scale(0.9);
            transition: 1s;
            box-shadow: 5px 5px 10px gray;
            /* border: 2px solid #2f3967 !important; */
        }

        .service-card:hover {
            transform: scale(1);
            background: linear-gradient(45deg, #bf1010, #db7777);
            color: #fff;
        }

        .service-card img {
            height: 100px;
            width: 100px;
            border-radius: 100%;
            margin-inline: auto;
            padding-top: 5px;
        }

        .row {
            --bs-gutter-x: 0px !important;
        }
    </style>
</head>

<body>
<div style="width:100%;height:100%;overflow-x:hidden;">
<?php include "../popup.php"?>

    <?php include "../header/header.php"; ?>
    
        <div class="tailHeader">
            <span><a href="../index.php">Home</a>/<span>Jeep</span></span>
        </div>
        <!-- form -->
        <div class="formCont">
            <div class="leftForm">
                <form action="../mailer.php" method="POST">
                    <div class="flexRow">
                        <div class="flexCol">

                            <select id="year" aria-required="true" aria-invalid="false" name="select-year" required>
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
                        <div class="flexCol">

                            <select id="make" aria-required="true" aria-invalid="false" name="make" required>
                                <option value="">- Select Year -</option>
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
                        <div class="flexCol">

                            <input id="model" size="40" aria-required="true" aria-invalid="false"
                                placeholder="Enter Model" value="" type="text" name="model" required />
                        </div>
                        <div class="flexCol">

                            <select id="part" aria-required="true" aria-invalid="false" name="part" required>
                                <option value="">- Select Part -</option>
                                <option value="Engine">Engine</option>
                                <option value="Transmission">Transmission</option>
                                <option value="Reman Engine">Reman Engine</option>
                                <option value="Reman Transmission">Reman Transmission</option>
                                <option value="Turbo">Turbo</option>
                            </select>
                        </div>
                        <div class="flexCol">

                            <input id="name" size="20" aria-required="true" aria-invalid="false"
                                placeholder="Enter Name" value="" type="text" name="name" required />
                        </div>
                        <div class="flexCol">

                            <input id="phone" size="20" maxlength="12" minlength="10" aria-required="true"
                                aria-invalid="false" placeholder="Enter Phone" value="" type="tel" name="phone"
                                required />
                        </div>
                        <div class="flexCol email">

                            <input id="email" size="20" id="tel-915-contact-no" aria-required="true"
                                aria-invalid="false" placeholder="Enter Email" value="" type="email" name="email"
                                required />
                        </div>
                        <div class="centerBtn">
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="rightForm">
                <p>Genuine Used Jeep Parts With Warranty</p>
                <div class="iconTable">
                    <div>
                        <i class="fa-solid fa-truck"></i>
                        <span>Nationwide Free Shipping</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <span>5 Years Warranty</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-headphones"></i>
                        <span>Excellent Customer Support</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-dollar-sign"></i>
                        <span>No Core Charge for 30 Days</span>
                    </div>
                    <div class="btns">
                    <a href="/new-usaautoparts/order-now.php"><button>
                            <i class="fa-solid fa-car"></i>
                            <span >Order now</span>
                        </button></a>
                        <button>
                            <i class="fa-solid fa-phone"></i>
                            <span>Call us</span>
                        </button>
                    </div>
                    <div class="specialist">
                        <i class="fa-solid fa-phone"></i>
                        <div class="call">
                            <span>SPEAK WITH A SPECIALIST NOW</span>
                            <span>+1 (888) 793-7616</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- stats -->
        <div class="statics">
            <div class="stat">
                <img src="../images/verifiedCheck.png" alt="check">
                <p>24X7 Support</p>
            </div>
            <div class="stat">
                <img src="../images/delivery.png" alt="check">
                <p>Free Shipping</p>
            </div>
            <div class="stat">
                <img src="../images/refund.png" alt="check">
                <p>5 Years Warranty</p>
            </div>
        </div>
        <div class="pageCont">
            <div class="leftPage">
                <p>
                Best Deals On Used Jeep Parts And Accessories
                </p>
                <p>
                USA Auto Parts offers used Jeep parts for sale at lower prices and a high warranty. Buyers get confused about whether to buy them as they are used already. They need to know that many car part dealers USA Auto Parts are offering highly-qualified tested automotive parts online. They all are highly efficient in providing the best smoothness and durability with the best driving experience. Jeeps which are known for their rough and tough driving style need equally durable and tough auto parts also, which are risky to get from any random dealer. Obtain used Jeep parts for sale from trusted dealers only.
                </p>
                <button>TALK TO OUR EXPERT</button>
            </div>
            <div class="rightPage" style="background-image:url('../images/used-jeep.webp')">
                <!-- image is on background -->
            </div>
        </div>

         <!---------------Card-container-start-here------------------->
         <div class="service">
        <div class="card-container-1">
            <div class="row align-items-center justify-content-center">

                <div class="col-lg-3 col-md-4">
                    <div class="service-head fs-1 fw-bold ms-4">Why choose Us?</div>
                </div>

                <div class="col-lg-9 col-md-8 right-service">
                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img//img-1.png" alt="">
                                <div class="card-body">
                                    <h5>Customer Services</h5>
                                    <p>
                                            At Usaauto-parts we offer you 24*7 customer
                                            support. Our dedicated team is always ready
                                            to serve you the best. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img//img-2.png" alt="">
                                <div class="card-body">
                                    <h5>Fast Delivery</h5>
                                    <p>We provide you fast delivery to your doorstep.
                                            Usaauto-parts offer you free
                                            delivery. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img//img-3.png" alt="">
                                <div class="card-body">
                                    <h5>Warranty</h5>
                                    <p>Usaauto-parts engines comes with warranty that you can avail upto 1 year. we
                                    also offer 5 years extended warranty. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img//img-4.jfif" alt="">
                                <div class="card-body">
                                    <h5>Rigorously Cleaned & Tested</h5>
                                    <p>The engines and transmissions that we are selling are highly inspected and
                                    tested before delivering it to you. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img/img-5.png" alt="">
                                <div class="card-body">
                                    <h5>Interactive Support</h5>
                                    <p>We offer you interactive customer support. we built our cusomter trust
                                    and provide high quality engines and transmissions. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="card service-card">
                                <img src="../assets/img/service-img/img-6.jfif" alt="">
                                <div class="card-body">
                                    <h5>Green State-of-the-Art Facility</h5>
                                    <p>The engines and transmissions that we sell are high inspected and tested and
                                    they are inveronment friendly. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- why choose -->
        <!-- <div class="choose">
            <p>Why Choose Us?</p>
            <div class="card-container">

                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Customer Services</span>

                    </div>
                </div>
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Fast Delivery</span>

                    </div>
                </div>
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Warranty</span>

                    </div>
                </div>
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Rigorously Cleaned & Tested</span>

                    </div>
                </div>
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Interactive Support</span>

                    </div>
                </div>
                <div class="basic-card basic-card-dark">
                    <div class="card-content">
                        <span class="card-title">Green State-of-the-Art Facility</span>

                    </div>
                </div>
            </div>
        </div> -->
        <!-- About  -->
        <div class="pageCont">
            <div class="leftPage">
                <p>
                We Provide Fast Delivery On Used Jeep Parts
                </p>
                <p>
                Customers first search for the used Jeep parts for sale near me on the internet to get the used parts in nearby stores to avoid the hassle, whereas we are delivering them to their place. Customers do not have to worry about going to auto parts shops, searching for it, and then supplying it to their mechanic. Instead, search for your required auto part on USA Auto Parts and Ding….it is delivered to your mechanic. Isn’t it easy?
                </p>
                <p>
                USA Auto Parts is a trusted American used auto parts dealer with hundreds of warehouses across the country. These warehouses help us deliver the required auto parts to all regions. Our warehouses are full of auto parts of all makes, brands, and models. Therefore, we can offer our customers a fast delivery service. This is the best platform for the fastest delivery of used Jeep parts for sale by owners.
                </p>
               

            </div>
            <div class="rightPage" style="background-image:url('../images/jeep1.webp')">

            </div>
        </div>
        <!-- Tile -->
        <div class="TileCont" style="background-image:url('../images/jeep-bg.webp')">
            <div class="tileParent">
                <div class="tileDiv">
                    <p>The Best Way to Source Auto Part</p>
                    <p>
                    Used Jeep Parts online available for sale will be the best replacement components as they offer several deals and discounts. Plus, you can find the trusted auto part dealer online as they are more transparent. You can review early customer experiences, their testimonials, and results.
                    </p>
                </div>
            </div>
        </div>
        <!-- Faq -->
        <div class="faq">
            <p class="headFaq">Frequently asked Questions</p>
            <div class="QA">
                <div class="qtile">
                    <div class="Qhead A1" onclick="slide('A1')"><i class="fa-solid fa-play"></i> What Is the Purpose of
                        a
                        Car Transmission?
                    </div>
                    <div class="answer" id="A1">
                        Transmissions in automobiles are either automatic or manual. Automobiles with manual gearboxes
                        are
                        also known as clutches or stick-shift vehicles. Automatic transmissions are the most widespread
                        and
                        are most likely what you drive. A transmission’s primary function is to translate speeds and
                        torques
                        along a vehicle’s drive system. This means that it changes a vehicle’s gear ratios
                        automatically,
                        allowing it to drive within its limited speed range while yet producing a wide variety of torque
                        and
                        output speeds.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A2" onclick="slide('A2')"><i class="fa-solid fa-play"></i> Is it necessary to
                        maintain
                        a car's transmission on a regular basis?
                    </div>
                    <div class="answer" id="A2">
                        For dependable transmission performance and durability, proper maintenance is essential. Routine
                        automobile services, such as frequent inspections and tune-ups, are critical preventative
                        measures.
                        In addition, utilising the right fuel and fuel additives can significantly improve the
                        performance
                        and longevity of an automobile engine and transmission.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A3" onclick="slide('A3')"><i class="fa-solid fa-play"></i> What Are the Symptoms
                        of
                        Transmission Issues?
                    </div>
                    <div class="answer" id="A3">
                        When there is a problem with a vehicle’s transmission, it show hundreds of symptoms. However,
                        there
                        are three warning indicators that you should constantly be aware of. Burning odours,
                        transmission
                        fluid leaking, and an illuminated check engine light are examples of these. If you discover a
                        puddle
                        of red fluid beneath your vehicle, it is likely that your transmission is leaking. If your check
                        engine light flashes, it could be due to a transmission issue. In addition, if you notice a
                        burning
                        smell while driving, it could be due to unclean transmission fluid.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A4" onclick="slide('A4')"><i class="fa-solid fa-play"></i> What parts are
                        available
                        for my vehicle at USA Auto Parts LLC?
                    </div>
                    <div class="answer" id="A4">
                        USA Auto Parts LLC Ss sells a wide range of spare parts for your car. We offer the most
                        comprehensive selection of 100% genuine OEM, OES, and aftermarket auto parts at the most
                        competitive
                        prices.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A5" onclick="slide('A5')"><i class="fa-solid fa-play"></i> How does USA Auto Parts
                        LLC
                        ensure that the products are genuine?
                    </div>
                    <div class="answer" id="A5">
                        At USA Auto Parts LLC, we follow to a strict direct procurement policy, which means purchasing
                        products directly from manufacturers and storing them in our state-of-the-art inventory, which
                        is
                        spread across the country. This allows us to keep the original quality replacement parts at the
                        greatest costs.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A6" onclick="slide('A6')"><i class="fa-solid fa-play"></i> Is USA Auto Parts LLC
                        is a
                        Trusted Source to get Car Parts?
                    </div>
                    <div class="answer" id="A6">
                        Without a question, USA Auto Parts LLC is a well-known online marketplace that offers customers
                        a
                        simple and convenient way to acquire high-quality auto components. While the majority of car
                        parts
                        sold by Amazon come from reputable suppliers, it might be difficult to tell if you’re receiving
                        the
                        proper product for your vehicle because you’re not dealing directly with an auto expert.
                    </div>
                </div>
                <div class="qtile">
                    <div class="Qhead A7" onclick="slide('A7')"><i class="fa-solid fa-play"></i> How do I choose between
                        OEM
                        and aftermarket auto parts?
                    </div>
                    <div class="answer" id="A7">
                        It is suggested that customers with brand new automobiles or vehicles in need of a key part
                        replacement use new auto parts to ensure long life and dependable performance. However,
                        regardless
                        of the age of your vehicle, aftermarket components are a reasonable solution if you require a
                        simple
                        part with a limited shelf life.
                    </div>
                </div>
            </div>
        </div>
    
    <?php include "../footer/footer.php";?>
    </div>
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