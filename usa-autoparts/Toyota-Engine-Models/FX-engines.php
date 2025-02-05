<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usa Auto Parts</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
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

        @keyframes slideToLeft {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            border: 2px solid #ddd;
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .carousel-image {
            min-width: 100%;
            transition: opacity 0.5s ease-in-out;
        }



        .child a {
            color: inherit;
        }



        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        }

        .wrap-carousel {
            width: 100%;
            padding: 1rem;
            position: relative;
            overflow: hidden;
        }

        .wrap-carousel {
            width: 100%;
            overflow: hidden;
        }

        .carousel-container-1 {
            display: flex;
            width: max-content;
            /* Ensure the container is wide enough for all images */
            animation: slide 50s linear infinite;
        }

        .carousel-container-1 img {
            width: 100px;
            /* Adjust the width as needed */
            height: auto;
            margin: 0 5px;
            /* Adjust spacing between images as needed */
        }

        @keyframes slide {

            0%,
            100% {
                transform: translateX(0);
            }

            50% {
                transform: translateX(-50%);
            }
        }

        .carousel-container-1 .benz {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .BMW {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .cadillac {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .chevy {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .ford {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .honda {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .hyundai {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .jeep {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .kia {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .lexus {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .mazda {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .nissan {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .toyota {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .carousel-container-1 .vw-1 {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 20px;
            margin-left: 20px;
            margin-right: 20px;
            padding: auto;
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
            background-color: #fff;
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
            background-color: #000;
           
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
            background-color: orange;
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
        }

        @media (max-width: 480px) {
            .basic-card {
                width: calc(100% - 40px);
                /* 1 card per row on very small screens */
            }
        }



        /* Wrapping */
        h1,
        h3 {
            width: 100%;
            text-align: center;
            align-items: center;
            justify-content: center;
        }

        .wrapForPadding {
            /* width: 100%; */
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }



        .form-group,
        img {
            border-radius: 1rem;
            width: 100%;
        }

        body {
            width: 100vw;
            height: 100vh;
            overflow: hidden scroll;
            position: relative;
            background-color: #fff;

        }



        form {
            padding: 1rem;
            /* background-color: #02341861; */
            width: 100%;
            border-radius: 1rem;
            background-color: #000;
            border-radius: 2rem;
        }



        .flexRow {

            width: 100%;
            display: flex;

            justify-content: space-between;

            row-gap: 15px;
            flex-wrap: wrap;
        }

        .flexCol {
            width: 48%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-family: "Philosopher";

        }

        .flexCol input,
        .flexCol select {
            width: 100%;
            border: 0;
            outline: 0;
            font-size: 1.1rem;
            color: #000;
            background-color: #fff;
        }

        .flexCol option {
            color: #000;
        }

        label {
            font-weight: bold;
            font-family: "Poppins", Sans-serif;
            color: #fff;
            padding: 0 1rem;
        }

        .flexCol input,
        select {
            border-radius: 10px;
            padding: 0.5rem;
        }

        .flexCol input::placeholder {
            color: #000;
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
            margin-top: 0.5rem;
            position: static;
            color: #000;
            padding: 0.5rem 1rem;
            background-color: #ffa300;
            border-radius: 0.5rem;
            font-family: "Poppins";
            transition: all 0.5s ease;
            cursor: pointer;
        }



        @media screen and (max-width: 903px) {

            .wrapForPadding {
                padding: 1rem;
            }
        }


        .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);



        }



        .child {

            text-align: center;
            padding: 1rem;
            border: 0.1px solid #000;
            font-family: "Quicksand";
            background-color: #fff;

        }

        @media screen and (max-width:779px) {
            .container {
                grid-template-columns: repeat(2, 1fr);

            }
        }

        .page {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 25px;
            align-items: flex-start;
            margin-top: 2rem;
            /* background-color: #F7F7F7 !important; */
        }

        .left {

            display: flex;
            width: 40%;
            padding: 1rem;
        }

        .left img {
            align-items: flex-start;
            width: 80%;
        }

        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .right p {
            color: #7a7a7a !important;
            font-family: Arial;

        }



        @media screen and (max-width: 850px) {
            .wrap1 {
                padding: 0.5rem;
            }

            .page {
                flex-direction: column;
            }

            .left {
                display: flex;
                justify-content: center;
                width: 100%
            }

            .left img {
                width: 50%;
            }
        }

        .WrapText {
            background: #fff;
            backdrop-filter: blur(5rem);
            padding: 1rem;
            border-radius: 1rem;
            position: relative;
        }

        .WrapText p {

            font-family: 'Quicksand';
            text-align: center;

        }

        /* .WrapText p b {
            color: orange;
        } */

        .changeText {
            font-size: 2rem;
            color: #000 !important;
            background-color: orange;

            padding: 0.5rem;
            font-family: "Ubuntu" !important;
            border-radius: 2rem;
        }

        .WrapText h1 {
            color: #000;

            font-family: 'Philosopher';

            padding: 0.5rem 0;
            border-radius: 2rem;
        }

        .changeBg {
            width: 100%;
            background-color: #00000080;
            backdrop-filter: blur(2rem);
            padding: 1rem;
            border-radius: 2rem;

        }

        .changeImg::before {
            content: "";
            width: 100%;
            height: 100%;
            background: url("./images/bg3.jpeg") no-repeat center center/cover;
            position: absolute;
            inset: 0;
            border-radius: 2rem;
            z-index: -1;
            filter: blur(2rem);
        }

        .underline {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* gap: 5px; */
        }

        .wrap2 {
            /* background-color: #000; */
            width: fit-content;
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .circle {
            height: 0.3rem;
            width: 0.3rem;
            border-radius: 100%;
            background-color: orange;
        }

        .line {
            border-radius: 2rem;
            width: 7rem;
            height: 0.3rem;
            background-color: orange;
        }

        .clientContainer {
            width: 100%;
        }

        .userImg {
            width: 3rem;
            height: 3rem;
            border-radius: 100%;
            margin-right: 0.5rem;
        }

        .clientTile {

            margin-top: 1rem;
            padding: 1rem;
            background-color: #F7F7F7;
            border: 1px solid lightgray;
            border-radius: 1rem;
            margin: 2rem auto;
            width: 50%;
        }

        .clientRow {

            gap: 0;
            justify-content: flex-start;
            width: 100%;
        }

        .clientRow i {
            color: orange;
            ;
        }

        .clientCol {
            gap: 1px;
            align-items: flex-start;
        }

        .clientCol p {
            margin: 0;
        }

        .linebreak {
            width: 100%;
            height: 0.5px;
            background-color: lightgray;
        }

        .message {
            font-size: 0.8rem;
            color: black;
        }

        @media screen and (max-width: 602px) {
            .clientTile {
                width: 85%;
            }
        }

        .statics {
            display: flex;
            width: 100%;
            background-color: orange;
            height: 6rem;
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
                height: 100%;
            }
            .modStatics{
                height: 100% !important;
                gap:10px;
            }
            .stat {
                width: 100%;
            }
            .tileStats{
                width: 100% !important;
            }
        }
        .modStatics{
            height: 16rem;
            background-color: #fff;
        }
        .tileStats{
            display: flex;
            flex-direction: column;
            width:25%;
            align-items: center;
            justify-content: center;

        }
        .tileStats p{
            font-size: 1.1rem;
            font-weight: bold;

        }
        .tileStats h1{
            font-family: "Poppins";
            font-weight: bold;
        }
        .tileStats img{
        
            width: 5rem;
            height: 5rem;
        }
        @media screen and (max-width: 789px){

        }
        #Head2{
            font-size: 1.5rem;
            font-family: "Poppins";
            font-weight: bold;
        }
        
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <?php include '../popup.php'; ?>
    <?php include '../header/header.php'; ?>

    <div class="wrapForPadding">
        <img src="../images/home-page.png" alt="Car Image">

        <form action="../mailer.php" method="POST">
            <div class="flexRow">
                <div class="flexCol" style="font-family:'Ubuntu'">

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
                        <option value="">- Select Make -</option>
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

                    <input id="model" size="40" aria-required="true" aria-invalid="false" placeholder="Enter Model"
                        value="" type="text" name="model" required />
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

                    <input id="name" size="20" minlength="10" aria-required="true" aria-invalid="false"
                        placeholder="Enter Name" value="" type="text" name="name" required />
                </div>
                <div class="flexCol">

                    <input id="phone" size="20" maxlength="12" minlength="10" aria-required="true" aria-invalid="false"
                        placeholder="Enter Phone" value="" type="tel" name="phone" required />
                </div>
                <div class="flexCol email">

                    <input id="email" size="20" minlength="10" id="tel-915-contact-no" aria-required="true"
                        aria-invalid="false" placeholder="Enter Email" value="" type="email" name="email" required />
                </div>
                <div class="centerBtn">
                    <button>Submit</button>
                </div>
            </div>
        </form>
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
        <div class="page WrapText">


            <div class="right">
                <h1>High Quality Used Engines And Transmission - USA Auto Parts</h1>
                <p>
                    Buy used engines and transmission at <b>USA Auto Part LLC </b>has all the vehicle parts you need!
                    Whatever you’re looking for with the greatest quality,
                    as well as the performance of car components in order to improve your on-road experience.
                    USA Auto Parts is one of the most trusted used engine suppliers in usa.
                    We provide you top quality used engines and transmissions of any brand
                    like Nissan, Ford, Toyota, BMW, Mercedes, Jaguar, Kia, Jeep, Hyundai, Mazda, MINI, GMC,
                    volkswagen, Porsche, ISuzu and all at a reasonable price. We are one of the largest
                    used engines and transmission suppliers in the world. All our used motors,
                    engines and transmissions are trustworthy and reliable to give you maximum performance.

                </p>
                <p>
                    With only a few clicks on our website,
                    you can simply fulfil whatever automotive-related needs you have.
                    Shopping for auto parts online with us might be the most convenient way to get the component
                    you need is delivered to your door without the hassles of going to a physical auto store.
                    USA Auto Parts LLC is a leading supplier and installer of used engines and transmissions for sale.
                    As well as rebuilt Rear Axle, used/rebuilt Transfer Case,
                    and used/rebuilt Suspension Cross-member K Frame in the US.
                    We are experts in dealing with engine refurbishing of all makes and models.

                <p>
            </div>
            <div class="left">
                <img src="../images/design-27.png" alt="">
            </div>
        </div>

        <div class="statics modStatics">
            <div class="tileStats">
                <img src="../images/engine.png" alt="engine">
                <h1>40K</h1>
                <p>Engine Sale</p>
            </div>
            <div class="tileStats">
                <img src="../images/user.png" alt="user">
                <h1>40,000+</h1>
                <p>Satisfied Customers</p>
            </div>

            
            <div class="tileStats">
                <img src="../images/delivery-truck.png" alt="truck">
                <h1>2000+</h1>
                <p>Inventory Yards</p>
            </div>
            <div class="tileStats">
                <img src="../images/flag.png" alt="flag">
                <h1>Over 40</h1>
                <p>Million Used Engine & Transmissions</p>
            </div>
        </div>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/slide1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../images/slide2.png" class="d-block w-100" alt="...">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <h3>
            <center class="changeText">Providing All Makes And Models Of Quality Auto Parts in USA</center>
        </h3>
        <br>
       
        </div>
        <div class="WrapText">
            <h1>
                Find your Used FX Engine
            </h1><br>
          

        </div>

        <br>



            <br>
        </div>
       

        <br>

       
        <br>

        <h1 class="changeText">
            Over the top on Everything we do...
        </h1>
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
        <div class="clientContainer">
            <div class="underline">
                <p id="Head2" >What our clients
                    says!</p>

                <div class="wrap2">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="clientTile">
                            <div class="flexRow clientRow">
                                <img class="userImg" src="../images/david.jpg" alt="david">
                                <div class="flexCol clientCol">
                                    <p>Mathew</p>
                                    <div class="flexRow clientRow">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-solid fa-star-half"></i>

                                    </div>
                                    <p style="color:gray;font-size:0.9rem">@Mathew51</p>
                                </div>
                                <div class="linebreak"></div>
                            </div>
                            <p class="message">
                                Have dealt with USA Auto Parts LLC in the past and have just put in another order .
                                Thanks for the
                                great customer support and service.</p>
                        </div>
                    </div>
                    <div class="carousel-item"  data-bs-theme="dark">
                        <div class="clientTile">
                            <div class="flexRow clientRow">
                                <img class="userImg" src="../images/matthew.jpg" alt="david">
                                <div class="flexCol clientCol">
                                    <p>David</p>
                                    <div class="flexRow clientRow">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-solid fa-star-half"></i>

                                    </div>
                                    <p style="color:gray;font-size:0.9rem">@david786</p>
                                </div>
                                <div class="linebreak"></div>
                            </div>
                            <p class="message">
                                Love this website and its search function helpful on purchasing correct auto parts
                                online at affordable price. Awesome service.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="clientTile">
                            <div class="flexRow clientRow">
                                <img class="userImg" src="../images/joe.jpg" alt="david">
                                <div class="flexCol clientCol">
                                    <p>Joe</p>
                                    <div class="flexRow clientRow">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-solid fa-star-half"></i>

                                    </div>
                                    <p style="color:gray;font-size:0.9rem">@joe94</p>
                                </div>
                                <div class="linebreak"></div>
                            </div>
                            <p class="message">Best way to purchase auto parts for your car, prices are excellent. Once
                                you’ve entered your details, the website automatically brings up all available parts.
                                Thanks USA Auto Parts LLC for making Ordering very easy and simple.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" class="color:yellow;" type="button"
                    data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>

    </div>

    <?php include '../footer/footer.php'; ?>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

</html>