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

  
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11152279745"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11152279745');
</script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>US Auto</title>
    
   
    
    <script>
        function redirectToSearch(url, part) {
            if (part === 'engine') {
                window.location.href = './engines/'+url+'.php';
            }

            if (part ===  'transmissions') {
                window.location.href = './transmissions/'+url+'.php';
            }

        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
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
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        body {
            width: 100vw;
            height: 100vh;

            position: relative;
            background-color: #fff;
        }

        .primaryHero {
            width: 100%;

            position: relative;
            display: flex;
            background-color: #fff;
            z-index: 1;
            min-height: 30rem;
            overflow: hidden;
            animation: slideup 1s ease forwards;
            background-color: #636363;

        }

        .primaryHero::before {
            width: 100%;
            height: inherit;
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: url("./images/banner-1.jpg") no-repeat center center/cover;
        }

        .modA {
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: center;
            height: 3rem;
            text-decoration: underline;
            cursor: pointer;
        }

        .row {
            --bs-gutter-x: 0 !important;
        }

        .right {
            width: 55%;
        }

        .left1 {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            flex: 1;
            border-radius: 4rem;
            /* backdrop-filter: brightness(0.8); */
            /* box-shadow: 0 0 10px; */
        }

        .left::before {
            width: 100%;
            height: 100%;
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: #0000008a;

        }


        @keyframes opac {
            0% {
                opacity: 0;
                transform: translateX(-200%);
            }

            100% {
                opacity: 1;
                transform: translateX(0);

            }
        }

        @keyframes opac2 {
            0% {
                opacity: 0;
                transform: translateX(200%);
            }

            100% {
                opacity: 1;
                transform: translateX(0);

            }
        }

        .right {
            width: 50%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 0.5rem;
            height: 100%;
            /* box-shadow: 0 0 5px;
            border-radius: 5px; */
            padding: 10px;


        }

        .left p {
            font-family: "Poppins";
            font-size: 3rem;

            color: #fff;
            text-align: center;
            animation: slideup 1s ease forwards;
            transition: all 1s ease;

        }

        @keyframes slideup {
            0% {
                opacity: 0;
                transform: translateY(-20%);
            }

            100% {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        #typed {
            font-size: 3rem;
            font-family: "Poppins" !important;
            color: rgb(245, 183, 84);

            text-shadow: 0;
            color: #1fa910;
            /* text-transform: uppercase; */
            text-shadow: 0 0 0.7rem #000;


        }

        #partSpan {
            color: #e40000;
            font-weight: bold;
            text-shadow: 0 0 10px black;
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



        /* img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        } */

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
            align-items: center;
            padding: 20px;
            position: relative;
            background-color: #fff;
            width: 100%;
        }

        .card-text {
            padding: 20px 20px;
            box-sizing: border-box;
            text-align: start;
            box-shadow: 0 0 10px gray;
            border-right: 5px;
        }

        .basic-card {
            border: 1px solid #636363;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
            margin: 10px;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            background: linear-gradient(#2F3967, #1d1dcf);
            transition: all 0.5s ease;
        }

        .basic-card-dark .card-title {
            color: #fff;
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .basic-card:hover {
            scale: 1.05;
            background-color: #e40000;
            background: linear-gradient(45deg, #bf1010, #db7777);
            color: #fff;
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
            color: #fff;
        }

        .service-card {
            text-align: center;
            margin: 10px;
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

        h1,
        h3 {
            width: 100%;
            text-align: center;
            align-items: center;
            justify-content: center;
        }

        .wrapForPadding {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
        }

        .form-group img {
            border-radius: 1rem;
            width: 100%;
        }



        form {
            padding: 1rem;
            width: 100%;
            border-radius: 1rem;
            background-color: #00000059;
            border-radius: 2rem;
            background-color: #00000042;
            box-shadow: 0 0 10px;
        }

        .flexRow {

            width: 50%;
            display: flex;

            justify-content: space-around;

            row-gap: 15px;
            flex-wrap: wrap;
        }

        .flexCol {
            width: 48%;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            color: #fff;
            padding: 0.5rem 1rem;
            background-color: #ffa300;
            border-radius: 1rem;
            font-family: "Poppins";
            transition: all 0.5s ease;
            cursor: pointer;
        }

        /*------------------container-2--------------------------------*/
        .container-2 {
            margin: 10px 20px;
        }

        .modA {
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: center;
            height: 3rem;
            text-decoration: underline;
            cursor: pointer;
        }

        .models .nav-link,
        .parts .nav-link,
        .series .nav-link {
            box-shadow: 0 0 5px 1px #5b5b5c8c;
            z-index: 1;
            border: 1px solid #2f3967;
            margin: 10px;
        }

        .nav-link {
            display: flex !important;
        }

        .models .nav-link:hover,
        .series .nav-link:hover,
        .parts .nav-link:hover {
            color: #2f3967 !important;
            border-bottom: 3px solid #2f3967;
        }

        .modA img {
            height: 100%;
            width: 3rem;
            object-fit: contain;
        }

        /*------------------container--------------------------------*/

        /* .container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        .child {
            text-align: center;
            padding: 0.7rem 0;
            border: 0.1px solid #000;
            font-family: "Quicksand";
            background-color: #2F3967;
            color: #fff;
            margin: 1rem;
            border-radius: 2rem;
            border: 1px solid #353dec;

        } */

        .page {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 25px;
            align-items: center;
            margin-top: 2rem;
            background-color: #FFFFFF !important;
        }

        .primaryHero .left {
            display: flex;
            width: 40%;
            padding: 1rem;
            margin-left: calc(60% - 30px);
            margin-top: 5rem;
        }

        .left img {
            align-items: flex-start;
            width: 100%;
        }

        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .right p {
            color: #040404 !important;
            font-family: Arial;
        }

        .WrapText {
            background: #FFFFFF;
            padding: 1rem;
            position: relative;
            /* box-shadow: 0 0 10px; */
            border-radius: 10px;
            /* margin: 10px; */
        }

        .WrapText p {

            font-family: 'Quicksand';
            text-align: center;
            color: #2F3967 !important;

        }

        .changeText {
            font-size: 1.5rem;
            background-color: #2F3967;
            color: #fff !important;
            padding: 0.5rem;
            font-family: "Ubuntu" !important;
            border-radius: 2rem;
            /* margin: 20px; */
        }

        .WrapText h1 {
            color: #000;
            font-family: 'Philosopher';
            font-weight: bold;
            border-radius: 2rem;
        }

        .changeBg {
            width: 100%;
            backdrop-filter: blur(2rem);
            padding: 1rem;
            border-radius: 2rem;
            /* box-shadow: 0 0 1px; */
            margin-bottom: 10px;
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
        }

        .wrap2 {
            width: fit-content;
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .circle {
            height: 0.3rem;
            width: 0.3rem;
            border-radius: 100%;
            background-color: #2F3967;
        }

        .line {
            border-radius: 2rem;
            width: 7rem;
            height: 0.3rem;
            background-color: #2F3967;
        }

        /* -----------------------------client-card ----------------------*/
        .container-3 {
            margin: 20px;
        }

        .client-card {
            text-align: center;
            /* width: 15rem; */
            height: 22rem !important;
            box-shadow: 0 0 10px;
        }

        .client-card img {
            height: 100px;
            width: 100px;
            border-radius: 100%;
            object-fit: cover;
            margin-inline: auto;
        }

        .owl-carousel .owl-item img {
            width: 80px !important;
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
        }

        .clientRow {
            gap: 0;
            justify-content: flex-start;
            width: 100%;
        }

        .clientRow i {
            color: orange;
        }

        .clientCol {
            gap: 1px;
            align-items: flex-start;
        }

        .clientCol p {
            margin: 0;
            color: #fff;
            padding-left: 10px;
        }

        .linebreak {
            width: 100%;
            height: 0.5px;
            background-color: lightgray;
        }

        .message {
            font-size: 14px;
            color: black;
        }

        .carousel-control-next-icon,
        .carousel-control-prev-icon {
            filter: brightness(0);
        }

        .statics {
            display: flex;
            width: 100%;
            height: 6rem;
            align-items: center;
        }

        .stat {
            width: 33%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 0;
            gap: 10px;
            border: 3px solid #f8f9fa;
            background: linear-gradient(45deg, #bf1010, #db7777);

        }

        .stat p {
            font-family: "Poppins";
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 0 !important;
        }

        .stat img {
            filter: invert();
            height: 4rem;
            width: 4rem;
        }

        .modStatics {
            height: 16rem;
            background-color: #2F3967;
            margin-bottom: 20px;
        }

        .tileStats {
            display: flex;
            flex-direction: column;
            width: 25%;
            align-items: center;
            justify-content: center;
            background: linear-gradient(45deg, #bf1010, #db7777);
            border: 4px solid #fff;
            text-align: center;
        }

        .tileStats p {
            font-size: 1.1rem;
            font-weight: bold;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            text-wrap: nowrap;
            width: 90%;

        }

        .tileStats h1 {
            font-family: "Poppins";
            font-weight: bold;
            color: #fff;
        }

        .tileStats img {
            filter: brightness(2);
            width: 5rem;
            height: 5rem;
        }

        #Head2 {
            font-size: 2rem;
            font-family: "Poppins";
            font-weight: bold;
            text-align: center;
        }

        .formCont {
            width: 100%;
            display: flex;
            padding: 5rem 2rem;
            position: fixed;
        }

        .leftForm,
        .rightForm {
            width: 60%;
            min-height: 6rem;

        }

        .leftForm {
            width: 40%;
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
            justify-content: space-around;
            gap: 10px;
            background-color: #0000006b;

            padding: 1rem;
            border-radius: 1rem;
        }

        .flexCol {
            width: 48%;
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
            font-size: 1.2rem;
            font-family: "Poppins";
            border: 0;
            border-radius: 0.2rem;
            cursor: pointer;
        }

        .userImg {
            width: 10rem;
            height: 10rem;
            object-fit: cover;
        }

        @media screen and (max-width: 1200px) {
            .leftForm {
                width: 50%;
            }
        }

        @media screen and (max-width: 1012px) {
            .formCont {
                flex-direction: column;
            }

            .iconTable {

                margin: auto;
            }

            .primaryHero .left {
                margin-left: 32rem;
            }
        }

        @media screen and (max-width: 903px) {

            .wrapForPadding {
                padding: 1rem;
            }

            .leftForm {
                width: 60%;
            }

            .left p {
                font-size: 2rem;
            }
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
                width: 100%;
            }

            .primaryHero .left {
                margin-left: 28rem;
            }

            .left img {
                width: 50%;
            }
        }

        @media screen and (max-width: 840px) {
            .statics {
                flex-direction: column;
                height: 100%;
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

            #typed {
                font-size: 2rem;
            }

        }

        @media screen and (max-width:779px) {
            .container {
                grid-template-columns: repeat(1, 1fr);

            }
        }

        @media (max-width: 768px) {
            /* .primaryHero .left {
                display: none;
            } */

            .basic-card {
                width: calc(50% - 40px);
                /* 2 cards per row on smaller screens */
            }

            .right {
                width: 100%;
                box-shadow: 0 0 5px;
                border-radius: 10px;
                padding: 10px 20px;
            }

            .page {
                margin-top: 0;
            }

            .WrapText p {
                text-align: start;
            }

            .left1 {
                width: 100%;
            }

            .tileStats h1 {
                font-weight: normal;
                font-size: 2rem;
            }

            .tileStats p {
                font-weight: normal;
                font-size: 1.5rem;
            }

            .changeText {
                font-size: 1.5rem;
            }

            .clientCol p {
                font-size: 2rem;
            }

            .clientRow i {
                font-size: 1.5rem;
            }


        }
        @media (max-width: 767px){
            .service-head{
                text-align:center;
            }
        } 

        @media screen and (max-width: 680px) {
            .leftForm {
                width: 70%;
            }

            .formCont {
                padding: 4rem 0 !important;
            }

            .left p {
                font-size: 1.5rem;
            }

            #typed {
                font-size: 1.5rem;
            }
        }

        @media screen and (max-width: 640px) {
            .clientTile {
                width: 85%;
            }

            /* .leftForm {
                width: 100%;
            } */
        }

        @media screen and (max-width: 602px) {
            .clientTile {
                width: 85%;
            }

            .primaryHero .left {
                display: none;
            }

            .formCont {
                flex-direction: column;
                align-items: center;
            }

            .leftForm {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .basic-card {
                width: calc(100% - 40px);
            }

            form {
                margin: 0px !important;
            }

        }


        @media screen and (max-width: 400px) {

            .primaryHero {
                width: 100%;
                z-index: 1;
                position: relative;
                display: flex;
                min-height: 10rem;
                z-index: 1;
                overflow: hidden;
                animation: slideup 1s ease forwards;
            }

            .primaryHero .left {
                display: flex;
                width: 50%;
                align-items: center;
                text-align: center;
                justify-content: center;
                padding: 1rem;
                gap: 2rem;
                margin-left: 25px;
                font-size: 7px;
                display: none;
            }

            #typed {
                font-size: 1rem;
                font-family: "Poppins" !important;
                color: rgb(245, 183, 84);
                text-shadow: 0;
                color: #1fa910;
                text-shadow: 0 0 0.7rem #000;
            }

            #partSpan {
                color: #e40000;
                font-weight: bold;
                font-size: 1rem;
                text-shadow: 0 0 10px black;
            }

            .left p {
                font-family: "Poppins";
                font-size: 1rem;

                color: #fff;
                text-align: center;
                animation: slideup 1s ease forwards;
                transition: all 1s ease;
            }

            .leftForm {
                display: flex;
                width: 100%;
            }

            .flexRow {
                display: flex;
                width: 100%;
            }

            .flexCol {
                display: flex;
                width: 100%;
            }

            .formCont {
                position: static;
                padding: 0 !important;
            }

        }

        @media screen and (max-width: 375px) {
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

            .changeText {
                font-size: 1rem;
            }

        }
        .popup form{
            box-shadow: none;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    
 

</head>

<body style="overflow-x:hidden;">
    
     <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6MDMPSG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    

   <?php
         include_once './header/header.php';
        ?>

    
    <div style="width:100%;height:100%;">

        <!--<?php include 'popup.php';?>-->
       

        <div class="primaryHero">



            <div class="formCont">
                <div class="leftForm">
                    <form action="mailer.php" method="POST">
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

            </div>

            <div class="left">
                <p>The Best <span id="partSpan">Seller</span> <br>FOR<br><span class="typed-text" id="typed"></span>
                </p>
            </div>

        </div>





        <div class="wrapForPadding">

            <div class="statics">
                <div class="stat">
                    <img src="./images/verifiedCheck.png" alt="check">
                    <p>24X7 Support</p>
                </div>
                <div class="stat">
                    <img src="./images/delivery.png" alt="check">
                    <p>Free Shipping</p>
                </div>
                <div class="stat">
                    <img src="./images/refund.png" alt="check">
                    <p>5 Years Warranty</p>
                </div>
            </div>
            <div class="page WrapText">

                <div class="right">
                    <h1>High Quality Used Engines And Transmission - USA Auto Parts</h1>
                    <p>
                        Buy used engines and transmission at <b>USA Auto Part LLC </b>has all the vehicle parts you
                        need!
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
                        USA Auto Parts LLC is a leading supplier and installer of used engines and transmissions for
                        sale.
                        As well as rebuilt Rear Axle, used/rebuilt Transfer Case,
                        and used/rebuilt Suspension Cross-member K Frame in the US.
                        We are experts in dealing with engine refurbishing of all makes and models.

                    <p>
                </div>
                <div class="left1">
                    <!-- <img src="./images/bgEngine.jpg" alt="" style="width:100%;"> -->
                     <img src="./assets/img/engine-img.png" alt="" width="100%">
                </div>

            </div>

            <div class="statics modStatics">
                <div class="tileStats">
                    <img src="./images/engine.png" alt="engine">
                    <h1>40K</h1>
                    <p>Engine Sale</p>
                </div>
                <div class="tileStats">
                    <img src="./images/user.png" alt="user">
                    <h1>40,000+</h1>
                    <p>Satisfied Customers</p>
                </div>


                <div class="tileStats">
                    <img src="./images/delivery-truck.png" alt="truck">
                    <h1>2000+</h1>
                    <p>Inventory Yards</p>
                </div>
                <div class="tileStats">
                    <img src="./images/flag.png" alt="flag">
                    <h1>Over 40</h1>
                    <p>Million Used Engine & Transmissions</p>
                </div>
            </div>

            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> -->
        </div>
        <h3>
            <center class="changeText">Providing All Makes And Models Of Quality Auto Parts in USA</center>
        </h3>
        <br>
        <div class="wrap-carousel changeBg">
            <div class="carousel-container-1">
                <img src="./images/benz.png" class="benz" alt="">
                <img src="./images/BMW.png" class="BMW" alt="">
                <img src="./images/cadillac.png" class="cadillac" alt="">
                <img src="./images/chevy.png" class="chevy" alt="">
                <img src="./images/ford.png" class="ford" alt="">
                <img src="./images/honda.png" class="honda" alt="">
                <img src="./images/hyundai.png" class="hyundai" alt="">
                <img src="./images/jeep.png" class="jeep" alt="">
                <img src="./images/kia.png" class="kia" alt="">
                <img src="./images/lexus.png" class="lexus" alt="">
                <img src="./images/mazda.png" class="mazda" alt="">
                <img src="./images/nissan-1.png" class="nissan" alt="">
                <img src="./images/toyota.png" class="toyota" alt="">
                <img src="./images/vw-1.png" class="vw-1" alt="">
            </div>
        </div>
        <div class="WrapText">
            <h1> Find your Engine </h1>
            <!-- <p>USA Auto Parts provides the widest range of 100% genuine and top-quality engines
        find all kind of car engine.
        Here you can find <b>V4 Engine, V6 Engine, V8 Engine, Used Engine, Used Motors,
            Automatic Engine, 4 Cylinder Engine, 6 Cylinder Engine, M52 Engine, M30 Engine,
            S62 Engine, V12 Engine, Acura Engine, Audi, Engine, BMW Engine, Buick Engine,
            Chevrolet Engine, Chrysler Engine, Dodge Engine, Ford Engine, Fiat Engine,
            Honda Engine, Hummer Engine, Hyundai Engine, Isuzu Engine, Jaguar Engine, Jeep Engine,
            Kia Engine, Lexus Engine, Lincoln Engine, Mazda Engine, Mercedes Engine, Mini Engine,
            Mitsubishi Engine, Nissan Engine, Oldsmobile Engine, Pontiac Engine, Porsche Engine,
            Saab Engine, Saturn Engine, Subaru Engine, Suzuki Engine, Toyota Engine, Volkswagen Engine,
            Cadillac Engine, GMC Engine, Infinite Engine, Land Rover Engine, Mercury Engine,
            Plymouth Engine, Scion Engine.</b></p> -->
        </div>
        <br>
        <!-------------------------Engine-container----------------------------->
        <div class="container-2">
            <div class="row models">
                <div class=" col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('acura-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white text-center modA">
                        <img src="assets/img/brand/15.png" alt="Acura" /> Acura Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('audi-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/12.png" alt="Audi" />
                        Audi Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('bmw-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/13.png" alt="BMW" />
                        BMW Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('buick-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/Buick-logo.png" alt="Buick" />
                        Buick Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('chevy-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/chevy.png" alt="Chevy" />
                        Chevy Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('chrysler-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/chrysler.png" alt="chrysler" />
                        Chrysler Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('dodge-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/dodge.png" alt="Dodge" />
                        Dodge Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('ford-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/ford.png" alt="ford" />
                        Ford Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('fiat-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/11.png" alt="truck" />
                        Fiat Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('honda-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/16.png" alt="Honda" />
                        Honda Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('hummer-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/hummer.png" alt="hummer" />
                        Hummer Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('hyundai-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/8.png" alt="Hyundai" />
                        Hyundai Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('isuzu-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/isuzu.png" alt="isuzu" />
                        Isuzu Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('jaguar-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/17.png" alt="Jaguar" />
                        Jaguar Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('jeep-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/jeep.png" alt="Jeep" />
                        Jeep Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('kia-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/7.png" alt="Kia" />
                        Kia Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('lexus-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/20.png" alt="Lexus" />
                        Lexus Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('lincoln-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/lin.png" alt="Lincoln" />
                        Lincoln Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mazda-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/21.png" alt="Mazda" />
                        Mazda Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mercedes-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/5.png" alt="Merceds" />
                        Mercedes Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mini-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/4.png" alt="mini" />
                        MINI Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mitsubishi-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/3.png" alt="Mitsubishi" />
                        Mitsubishi Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('nissan-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/2.png" alt="Nissan" />
                        Nissan Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('oldsmobile-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/olds.png" alt="oldsMobile" />
                        Oldsmobile Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('pontiac-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/pontiac.png" alt="Pontaic" />
                        Pontiac Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('porsche-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/1.png" alt="Porsche" />
                        Porsche Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('saab-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/saab.png" alt="Saab" />
                        Saab Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('saturn-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/27.png" alt="Saturn" />
                        Saturn Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('subaru-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/25.png" alt="Subaru" />
                        Subaru Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('suzuki-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/24.png" alt="Suzuki" />
                        Suzuki Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('toyota-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/23.png" alt="Toyota" />
                        Toyota Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('volkswagen-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/volks.png" alt="Volks" />
                        Volkswagen Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('cadillac-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/cad.png" alt="Cadillac" />
                        Cadillac Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('gmc-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/gmc.png" alt="GMC" />
                        GMC Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('infiniti-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/18.png" alt="infiniti" />
                        Infiniti Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('land-rover-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/6.png" alt="Land Rover" />
                        Land Rover Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mercury-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/Mercury.png" alt="Mercury" />
                        Mercury Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('plymouth-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/ply.png" alt="Plymouth" />
                        Plymouth Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('scion-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/26.png" alt="Scion" />
                        Scion Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('volvo-engines','engine')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/22.png" alt="Volvo" />
                        Volvo Engines
                    </div>
                </div>


            </div>
        </div>


        <!-- <div class="container">
    <div class="child">
        <a href="./Engines/Acura-Engines.php"> Acura Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Land-Rover-Engines.php"> Land Rover Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Audi-Engines.php">Audi Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/BMW-Engines.php">BMW Engines</a>
    </div>
    <div class="child">
        <a href="./Engines/Buick-Engines.php">Buick Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Chevrolet-Engines.php">Chevrolet Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Chrysler-Engines.php">Chrysler Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Dodge-Engines.php">Dodge Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Ford-Engines.php">Ford Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Fiat-Engines.php">Fiat Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Honda-Engines.php"> Honda Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Hummer-Engines.php"> Hummer Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Hyundai-Engines.php"> Hyundai Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Isuzu-Engines.php"> Isuzu Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Jaguar-Engines.php">Jaguar Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Jeep-Engines.php">Jeep Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Kia-Engines.php">Kia Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Lexus-Engines.php">Lexus Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Lincoln-Engines.php">Lincoln Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Mazda-Engines.php">Mazda Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Mercedes-Engines.php">Mercedes Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Mini-Engines.php">MINI Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Mitsubishi-Engines.php">Mitsubishi Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Nissan-Engines.php">Nissan Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Oldsmobile-Engines.php">Oldsmobile Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Pontiac-Engines.php">Pontiac Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Porsche-Engines.php">Porsche Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Saab-Engines.php">Saab Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Saturn-Engines.php">Saturn Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Subaru-Engines.php">Subaru Engines </a>
    </div>

    <div class="child">
        <a href="./Engines/Suzuki-Engines.php">Suzuki Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Toyota-Engines.php">Toyota Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Volkswagen-Engines.php">Volkswagen Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Cadillac-Engines.php">Cadillac Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/GMC-Engines.php"> GMC Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Infiniti-Engines.php"> Infiniti Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Mercury-Engines.php"> Mercury Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Plymouth-Engines.php"> Plymouth Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Scion-Engines.php"> Scion Engines </a>
    </div>
    <div class="child">
        <a href="./Engines/Volvo-Engines.php"> Volvo Engine </a>
    </div>
    <br>
</div> -->
        <!-------------------------container----------------------------->
        <div class="WrapText">
            <h1 style="margin-bottom: 1rem;">
                Find your Transmission
            </h1>

            <!-- <p>USA Auto Parts LLC provides the widest range of 100% genuine and top-quality
        engines and transmissions for sale
        find all kinds of transmission. Here you can find
        <b>4×4 Transmission, 4×2 Transmission, Used Transmission, CVT Transmission,
            AWD Transmission, FWD Trasnmission, RWD Transmission, Reman Transmission,
            4l60e Transmission, 4l80e Transmission, 5 Speed Transmission, 6 Speed Transmission,
            7 Speed Transmission, 4 Speed Transmission, 3 Speed Transmission, Acura Transmission,
            Audi Transmission, BMW Transmission, Buick Transmission, Chevrolet Transmission,
            Chrysler Transmission, Dodge Transmission, Ford Transmission, Fiat Transmission,
            Honda Transmission, Hummer Transmission, Hyundai Transmission, Isuzu Transmission, Jaguar
            Transmission, Jeep Transmission, Kia Transmission, Lexus Transmission, Lincoln Transmission,
            Mazda Transmission, Mercedes Transmission, MINI Transmission, Mitsubishi Transmission, Nissan
            Transmission, Oldsmobile Transmission, Pontiac Transmission, Porsche Transmission,
            Saab Transmission, Saturn Transmission, Cadillac Transmission, GMC Transmission,
            Infinite Transmission, Land Rover Transmission,
            Plymouth Transmission, Mercury Transmission, Volvo Transmission, Scion Transmission.</b>
    </p> -->
        </div>
        <!-----------------------------------Transmission-container-------------------------->
        <div class="container-2">
            <div class="row models">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('acura-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white text-center modA">
                        <img src="assets/img/brand/15.png" alt="Acura" /> Acura Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('audi-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/12.png" alt="Audi" />
                        Audi Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('bmw-transmission','transmissions')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/13.png" alt="BMW" />
                        BMW Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('buick-transmission','transmissions')"
                 
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/Buick-logo.png" alt="Buick" />
                        Buick Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('chevy-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/chevy.png" alt="Chevy" />
                        Chevy Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('chrysler-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/chrysler.png" alt="chrysler" />
                        Chrysler Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('dodge-transmission','transmissions')"
                 
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/dodge.png" alt="Dodge" />
                        Dodge Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('ford-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/ford.png" alt="ford" />
                        Ford Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('fiat-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/11.png" alt="truck" />
                        Fiat Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('honda-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/16.png" alt="Honda" />
                        Honda Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('hummer-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/hummer.png" alt="hummer" />
                        Hummer Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('hyundai-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/8.png" alt="Hyundai" />
                        Hyundai Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('isuzu-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/isuzu.png" alt="isuzu" />
                        Isuzu Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('jaguar-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/17.png" alt="Jaguar" />
                        Jaguar Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('jeep-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/jeep.png" alt="Jeep" />
                        Jeep Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('kia-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/7.png" alt="Kia" />
                        Kia Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('lexus-transmission','transmissions')"
                  
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/20.png" alt="Lexus" />
                        Lexus Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('lincoln-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/lin.png" alt="Lincoln" />
                        Lincoln Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mazda-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/21.png" alt="Mazda" />
                        Mazda Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mercedes-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/5.png" alt="Merceds" />
                        Mercedes Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mini-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/4.png" alt="mini" />
                        MINI Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mitsubishi-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/3.png" alt="Mitsubishi" />
                        Mitsubishi Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('nissan-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/2.png" alt="Nissan" />
                        Nissan Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('oldsmobile-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/olds.png" alt="oldsMobile" />
                        Oldsmobile Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('pontiac-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/pontiac.png" alt="Pontaic" />
                        Pontiac Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('porsche-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/1.png" alt="Porsche" />
                        Porsche Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('saab-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/saab.png" alt="Saab" />
                        Saab Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('saturn-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/27.png" alt="Saturn" />
                        Saturn Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('subaru-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/25.png" alt="Subaru" />
                        Subaru Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('suzuki-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/24.png" alt="Suzuki" />
                        Suzuki Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('toyota-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/23.png" alt="Toyota" />
                        Toyota Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('volkswagen-transmission','transmissions')"
                    
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/volks.png" alt="Volks" />
                        Volkswagen Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('cadillac-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/cad.png" alt="Cadillac" />
                        Cadillac Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('gmc-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/gmc.png" alt="GMC" />
                        GMC Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('infiniti-transmission','transmissions')"
                    
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/18.png" alt="infiniti" />
                        Infiniti Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('land-rover-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/6.png" alt="Land Rover" />
                        Land Rover Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('mercury-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/Mercury.png" alt="Mercury" />
                        Mercury Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('plymouth-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/ply.png" alt="Plymouth" />
                        Plymouth Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('scion-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/26.png" alt="Scion" />
                        Scion Transmission

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('volvo-transmission','transmissions')"
                   
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        <img src="assets/img/brand/22.png" alt="Volvo" />
                        Volvo Transmission
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container">
    <div class="child child2">
        <a href="./Transmission/Acura-Transmissions.php">Acura Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Land-Rover-Transmissions.php">Land Rover Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Audi-Transmissions.php">Audi Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/BMW-Transmissions.php">BMW Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Buick-Transmissions.php"> Buick Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Chevrolet-Transmissions.php"> Chevrolet Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Chrysler-Transmissions.php"> Chrysler Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Dodge-Transmissions.php"> Dodge Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Ford-Transmissions.php"> Ford Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Fiat-Transmissions.php"> Fiat Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Honda-Transmissions.php">Honda Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Hummer-Transmissions.php"> Hummer Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Hyundai-Transmissions.php"> Hyundai Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Isuzu-Transmissions.php"> Isuzu Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Jaguar-Transmissions.php"> Jaguar Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Jeep-Transmissions.php"> Jeep Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Kia-Transmissions.php"> Kia Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Lexus-Transmissions.php"> Lexus Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Lincoln-Transmissions.php"> Lincoln Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Mazda-Transmissions.php"> Mazda Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Mercedes-Transmissions.php"> Mercedes Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Mini-Transmissions.php"> MINI Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Mitsubishi-Transmissions.php"> Mitsubishi Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Nissan-Transmissions.php"> Nissan Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Oldsmobile-Transmissions.php"> Oldsmobile Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Pontiac-Transmissions.php"> Pontiac Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Porsche-Transmissions.php"> Porsche Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Saab-Transmissions.php"> Saab Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Saturn-Transmissions.php"> Saturn Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Subaru-Transmissions.php"> Subaru Transmissions </a>
    </div>

    <div class="child child2">
        <a href="./Transmission/Suzuki-Transmissions.php"> Suzuki Transmissions </a>
    </div>

    <div class="child child2">
        <a href="./Transmission/Toyota-Transmissions.php"> Toyota Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Volkswagen-Transmissions.php"> Volkswagen Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Cadillac-Transmissions.php"> Cadillac Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/GMC-Transmissions.php"> GMC Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Infiniti-Transmissions.php"> Infiniti Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Mercury-Transmissions.php"> Mercury Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Plymouth-Transmissions.php"> Plymouth Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Scion-Transmissions.php"> Scion Transmissions </a>
    </div>
    <div class="child child2">
        <a href="./Transmission/Volvo-Transmissions.php"> Volvo Transmissions </a>

    </div>
    <br>
</div> -->
        <!-----------------------------------Transmission-container-end-------------------------->
        <h1 class="changeText">
            Over the top on Everything we do...
        </h1>

        <!---------------Card-container-start-here------------------->
        <div class="service">
            <div class="card-container-1">
                <div class="row align-items-center justify-content-center">

                    <div class="col-lg-3 col-md-4">
                        <div class="service-head fs-1 fw-bold ms-4">Why choose Us?</div>
                    </div>

                    <div class="col-lg-9 col-md-8">
                        <div class="row">

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img//img-1.png" alt="">
                                    <div class="card-body">
                                        <h5>Customer Services</h5>
                                        <p>At Usaauto-parts we offer you 24*7 customer support. 
                                        Our dedicated team is always ready to serve you the best.
                                        our team help you to find the engines and transmission that fit your vehicle. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img//img-2.png" alt="">
                                    <div class="card-body">
                                        <h5>Fast Delivery</h5>
                                        <p>We provide you fast delivery to your doorstep. Usaauto-parts offer you free delivery.
                                             </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img//img-3.png" alt="">
                                    <div class="card-body">
                                        <h5>Warranty</h5>
                                        <p>Usaauto-parts engines comes with warranty that you can avail upto 1 year. 
                                        we also offer 5 years extended warranty on engines and transmissions. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img//img-4.jfif" alt="">
                                    <div class="card-body">
                                        <h5>Rigorously Cleaned & Tested</h5>
                                        <p>The engines and transmissions that we are selling are highly inspected and tested before delivering it to you.
                                            </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img/img-5.png" alt="">
                                    <div class="card-body">
                                        <h5>Interactive Support</h5>
                                        <p>We offer you interactive customer support always. we built our cusomter trust and provide high quality engines and transmissions.
                                             </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="card service-card">
                                    <img src="assets/img/service-img/img-6.jfif" alt="">
                                    <div class="card-body">
                                        <h5>Green State-of-the-Art Facility</h5>
                                        <p>The engines and transmissions that we sell are high inspected and tested and they are inveronment friendly. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

        <!-- <div class="card-container">
        <div class="row align-items-center">
            <div class="col-lg-6 card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi rerum magni excepturi
                impedit fugit veritatis commodi? Alias, harum enim modi exercitationem quia ut aut, ipsam earum sunt,
                similique quasi?
                Ad iusto enim omnis a, molestias deleniti maiores, animi eligendi labore earum perferendis quia
                reiciendis, ab soluta vel dolorem doloribus eius tempora. Ipsa accusantium, quod quae id repellat fugit
                modi!
                Accusantium dolorem quo possimus ea commodi ipsam necessitatibus doloribus ratione ad repudiandae
                deleniti consectetur ex enim architecto voluptatem blanditiis quasi ut nemo soluta, nostrum unde dolor
                iure sit? Reprehenderit, commodi.
                Reprehenderit labore, officiis mollitia veritatis in sequi architecto a suscipit pariatur soluta
                inventore itaque, odio consequatur aperiam rerum eligendi eveniet ad magni iusto unde, quasi odit!
                Similique fugiat in voluptate.
                Quae nobis ab vitae dolores voluptatibus, quos fugit nam iusto expedita neque commodi animi sit ipsa
                illum praesentium, cum incidunt sequi? Consectetur et aspernatur, animi adipisci maiores quisquam
                voluptas. Saepe.
                Praesentium in exercitationem laborum quibusdam, ratione, deleniti quisquam eaque architecto itaque quis
                maiores iure corrupti facilis doloremque? Corporis, voluptatum. Perspiciatis explicabo iste
                voluptatibus, ea recusandae exercitationem dolorem saepe nostrum minus.
                Quia corporis rem quidem, sint nam adipisci earum fugiat repellat asperiores provident assumenda? Amet
                odit aut rem veniam, fuga deserunt eos non repudiandae. Expedita laboriosam blanditiis, perspiciatis
                nulla dolorum voluptates.
            </div>
            <div class="col-lg-6">
                <div class="row ">
                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-1.png" alt=""
                                    style="width:100px; height:100px; border-radius:100%">
                                <span class="card-title">Customer Services</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-2.png" alt=""
                                    style="width:100px; height:100px; border-radius:100%">
                                <span class="card-title">Fast Delivery</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-3.png" alt=""
                                    style="width:100px; height:100px; border-radius:100%">
                                <span class="card-title">Warranty</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-4.jfif" alt=""
                                    style="width:100px; height:100px; border-radius:100%">
                                <span class="card-title">Rigorously Cleaned & Tested</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-5.png" alt=""
                                    style="width:100px; height:100px; border-radius:100%; object-fit:cover">
                                <span class="card-title">Interactive Support</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="basic-card basic-card-dark">
                            <div class="card-content d-flex flex-column justify-content-between align-items-center">
                                <img src="./assets/img/service-img/img-6.jfif" alt=""
                                    style="width:100px; height:100px; border-radius:100%">
                                <span class="card-title">Green State-of-the-Art Facility</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div> -->

        <!---------------Card-container-end-here------------------->

        <!----------------client-card------------------------------->
        <div class="underline">
            <p id="Head2">What our clients
                says!</p>

            <div class="wrap2">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="container-3">
            <div class="row  owl-theme owl-carousel">

                <div class="col-">
                    <div class="card client-card">
                        <img src="./images/david.jpg" alt="david" />
                        <div class="card-body">
                            <p>Mathew</p>
                            <div class="text-warning">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>@Mathew51</p>
                            <p class="message">
                                Have dealt with USA Auto Parts LLC in the past and have just put
                                in another order . Thanks for the great customer support and
                                service.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="col-">
                    <div class="card client-card">
                        <img src="./images/matthew.jpg" alt="david" />
                        <div class="card-body">
                            <p>David</p>
                            <div class="text-warning">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>@david786</p>
                            <p class="message">
                                Love this website and its search function helpful on purchasing correct auto parts
                                online at affordable price. Awesome service.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="col-">
                    <div class="card client-card">
                        <img src="./images/joe.jpg" alt="david" />
                        <div class="card-body">
                            <p>Joe</p>
                            <div class="text-warning">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>@joe94</p>
                            <p class="message">
                                Best way to purchase auto parts, prices are excellent. Once
                                you’ve entered your details, the website automatically brings up all available parts.
                                Thanks USA Auto Parts LLC for making Ordering very easy and simple.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-">
                    <div class="card client-card">
                        <img src="assets/img/service-img/testim-4.jpg" alt="david" />
                        <div class="card-body">
                            <p>Maria Romero</p>
                            <div class="text-warning">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>@maria43</p>
                            <p class="message">
                                The selection of car parts and accessories is amazing! You will
                                find anything and everything for any type of vehicle. I loved shopping
                                with AutoParts .
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-">
                    <div class="card client-card">
                        <img src="assets/img/service-img/testim-5.jpg" alt="david" />
                        <div class="card-body">
                            <p>Chris Parker</p>
                            <div class="text-warning">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>@chris</p>
                            <p class="message">
                                After ordering from this company, I am definitely going to stay and become
                                a regular. Loved the service and the quality of products that look amazing
                                on my car! the website is super easy to navigate.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!----------------client-card------------------------------->

       
        <?php include './footer/footer.php'; ?>



    </div>

</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
<script>
    var typed = new Typed('#typed', {
        strings: ['Engines', 'Transmissions'],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 30, // backspacing speed in milliseconds
        loop: true // loop indefinitely
    });
    const list = Array.from(document.getElementsByClassName("child"));
    let row = 1;
    for (let i = 0; i < list.length; i++) {
        console.log(row, i)
        if (row % 2 === 1) {
            if (i % 2 !== 0) {
                list[i].style.backgroundColor = "#000";
                list[i].style.color = "#fff";
                list[i].style.borderColor = "#fff"
            }
        }
        else {
            if (i % 2 === 0) {
                list[i].style.backgroundColor = "#000";
                list[i].style.borderColor = "#fff"
                list[i].style.color = "#fff";
            }
        }
        if ((i + 1) % 4 === 0) {
            row++;
        }
    }
    mediaQuery1.addListener(hadndleMedia1)

    hadndleMedia1(mediaQuery1)

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>$(function () {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1000,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },

                600: {
                    items: 2
                },
                750: {
                    items: 3
                },
                1024: {
                    items: 4
                },

                1366: {
                    items: 5
                }
            }
        });
    });
</script>

</html>