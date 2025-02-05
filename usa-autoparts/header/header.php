
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    


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

        .header {
            width: 100%;
            height: 12rem;
            background: #fff;
            display: flex;
            border-top: 2px solid #2F3967;
            border-bottom: 2px solid #EE3131;
        }

        .leftH {
            /* width: 20%; */
            padding: 1rem 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .rightH {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .header-phone-number {
            font-size: 1rem !important;
        }

        .leftH img {
            width: 100%;
            margin: auto;
            height: 5rem;
            object-fit: contain;
        }

        .top {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 11% 100%);
            background: #2F3967;
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .top p {
            margin: 0;
            color: #fff;
        }

        .top p i {
            margin-right: 0.5rem;
        }

        .bottom {

            width: 100%;
            height: 4rem;

            /* background-color: #FFBB00; */
            z-index: 10;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;

        }

        .bottom::before {
            content: "";
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background-color: #2F3967;
            clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
            z-index: -1;

        }

        .middle {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            flex: 1;
        }

        .hTile {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

        }

        .hIcon {
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .hIcon i {
            color: #FFBB00;
            font-size: 2rem;
        }

        .hInfo {
            display: flex;
            flex-direction: column;

        }

        .hInfo span {
            text-align: left;
            font-weight: bold;
        }

        .hInfo h5 {
            color: #857d7d;
        }
       
        .bottom ul {
            display: flex;
            gap: 15px;
            list-style: none;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 0;
            padding: 1.5rem;

        }

        .bottom li {
            color: #fff;
            font-family: "Poppins";
            margin: 0;
            position: relative;
            cursor: pointer;
        }

        .bottom li ul {
            position: absolute;
            height: fit-content;
            /* min-height: 5rem; */
            max-height: 0;
            background-color: #fff;
            top: 25px;
            left:-5px;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            align-items: flex-start;
            overflow: hidden;
            padding: 0;
            transition: all 0.5s ease;
        }

        .bottom li ul li {
            width: 100%;
            text-wrap: nowrap;
            color: #000;
            font-family: "Poppins";
            border-bottom: 1px solid #000;

        }

        
        .dropdown:hover {
            color: #EE3131;
        }

        .dropdown:hover ul {
            max-height: 50rem;
            padding: 1rem;
        }

        .specificDisplay {
            font-size: 1.4rem;
            color: #fff;
            display: none !important;

        }


        /* .mainmenu li a {
            color: #fff !important;
        } */
        @media screen and (max-width: 1275px) {
            .specificDisplay {
                display: block !important;
                margin-right: 1.5rem;
            }

            .mainmenu {
                flex-direction: column;
                position: fixed;
                background-color: #2F3967;
                height: 100vh;
                top: 0;
                right: -162%;
                z-index: 2000;
                transition: all 0.5s ease;
                min-width: 20rem;
                justify-content: flex-start !important;
            }
            
            .bottom ul {
                align-items: flex-start;
            }

            .bottom li ul {
                top: 0px;
                left: 100px;
            }
            .bottom li ul li{
                font-size: 14px;
            }
        }

        @media screen and (max-width: 1179px) {
            .specificDisplay {
                display: block !important;
                margin-right: 1rem;
            }

            body {
                position: relative;
            }

            .mainmenu {
                flex-direction: column;
                position: fixed;
                background-color: #2F3967;
                height: 100vh;
                top: 0;
                right: -162%;
                z-index: 2000;
                transition: all 0.5s ease;
                min-width: 20rem;
                justify-content: flex-start !important;
            }

            .mainmenu li {
                color: #fff;
            }
        }

        .mainmenu li a {
            color: #fff !important;
        }

        @media screen and (max-width:768px) {
            .middle {
                padding-left: 50px;
            }

            .hIcon i {
                font-size: 1.5rem;
            }

            .hInfo span {
                font-size: 0.8rem !important;
            }

            .header-phone-number {
                font-size: 0.8rem !important;
            }
        }

        @media screen and (max-width:576px) {
            .middle {
                padding-left: 20px;
            }

            .header-phone-number {
                font-size: 0.7rem !important;
            }

            .hIcon {
                width: 2rem !important;
            }
        }

        @media screen and (max-width:550px) {
            .header {
                height: auto;
            }

            .leftH {
                padding: 0;
            }

            .bottom {
                height: 5rem;
            }
        }

        @media screen and (max-width: 530px) {

            .middle {
                padding-left: 20px;
            }

            .top p {
                margin: 0;
                color: #fff;
                font-size: 0.8rem;
            }

            .top p i {
                margin-right: 0.5rem;
            }

            .hInfo span {
                font-size: 0.5rem !important;
            }

            .header-phone-number {
                font-size: 0.5rem !important;
            }

            .hIcon i {
                font-size: 1rem;
            }

            .hInfo h5 {
                font-size: 0.5rem;
            }

        }

        @media screen and (max-width: 636px) {

            .middle {
                padding-left: 30px;
            }

            .hIcon i {
                font-size: 1.2rem;
            }

            .hInfo span {
                font-size: 0.7rem !important;
            }

            .header-phone-number {
                font-size: 0.7rem !important;
            }
        }

        @media screen and (max-width: 527px) {


            .middle {
                padding-left: 20px;
            }

            .hIcon i {
                font-size: 1rem;
            }

            .hInfo span {
                font-size: 0.5rem !important;
            }

            .header-phone-number {
                font-size: 0.5rem !important;
            }
        }


        @media screen and (max-width:440px) {
            .header {
                height: auto;
            }

            .leftH {
                padding: 0;
            }

            .top {
                display: none;
            }

            .middle {
                display: none;
            }

            .bottom {
                height: 5rem;
            }
        }

        .dropdown ul li a {
            color: #000 !important;
        }

        a {
            text-decoration: none;
        }
    </style>



    
    
    
   

    <div class="header">
        <div class="leftH">
            <img src="../images/us-auto-logo.png" alt="logo">
        </div>
        <div class="rightH">
            <div class="top">
                <p><i class="fa-solid fa-clock"></i> We'are Open: Mon - Sat 8:00 - 18:00</p>

            </div>
            <div class="middle">

                <div class="hTile">
                    <div class="hIcon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="hInfo">
                        <span>Send Us Email</span>
                        <h5 class="header-phone-number">usaautopartsllc01@gmail.com</h5>
                    </div>
                </div>


                <div class="hTile">
                    <div class="hIcon">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="hInfo">
                        <span>Contact Us</span>
                        <h5 class="header-phone-number">+1800-213-1371</h5>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <i class="fa-solid fa-bars specificDisplay" onclick="DoToogle(false)"></i>
                <ul class="mainmenu">
                    <li class="mainlist"><a href="../index.php">Home</a></li>
                    <li><a href="../used-engines.php">Engines</a></li>
                    <li><a href="../used-transmissions.php">Transmissions</a></li>

                    <li class="dropdown">Reach Out
                        <ul>
                            <li><a href="../About-us.php">About Us</a></li>
                            <li><a href="../contact-us.php">Contact Us</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">Our Policy
                        <ul>
                            <li><a class="dropdown-item" href="../shipping-policy.php">Shipping
                                    Policy</a></li>
                            <li><a class="dropdown-item" href="../return-cancellation.php">Return and
                                    Cancellation
                                    Policy</a>
                            </li>
                            <li><a class="dropdown-item" href="../warranty-policy.php">Warranty
                                    Policy</a></li>
                            <li><a class="dropdown-item" href="../terms-of-services.php">Terms of
                                    Services</a></li>
                            <li><a class="dropdown-item" href="../privacy-policy.php">Privacy Policy</a>
                            </li>
                        </ul>
                    </li>
                    <!--<li class="dropdown">Brands<ul>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Toyota.php">TOYOTA PARTS</a>-->
                    <!--        </li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/jeepPart.php">JEEP PARTS</a>-->
                    <!--        </li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Honda.php">HONDA PARTS</a></li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Ford.php">FORD PARTS</a></li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Audi.php">AUDI PARTS</a></li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Hyundai.php">HYUNDAI PARTS</a>-->
                    <!--        </li>-->
                    <!--        <li><a class="dropdown-item" href="../Brands/Volkswagen.php">VOLKSWAGEN-->
                    <!--                PARTS</a></li>-->
                            <!-- <li><a class="dropdown-item" href="Benz.php">BENZ PARTS</a></li> -->
                    <!--    </ul>-->
                    <!--</li>-->
                    <li class="mainlist"><a href="../financing.php">Financing</a></li>
                    <li class="mainlist"><a href="../blog">Blogs</a></li>
                    <!--<li class="mainlist"><a href="../search-car-parts.php">Search Car Parts</a></li>-->
                    <!--<li class="mainlist"><a href="../order-now.php">Order Now</a></li>-->
                    <i class="fa-solid fa-x specificDisplay"
                        style="position: absolute; color:#fff; margin-left: 15rem; top:20px; right:10px;"
                        onclick="DoToogle(true)"></i>


                </ul>
            </div>
        </div>
    </div>



<script>

    let DoToogle = (toogle) => {
        let menu = document.getElementsByClassName("mainmenu")[0]

        if (toogle) {
            menu.style.right = "-162%"
        }
        else {
            menu.style.right = "0"

        }
        toogle = !toogle
    }
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>


