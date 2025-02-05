<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .footernav {
        width: 100%;
        /* min-height: 20rem; */
    background: linear-gradient(45deg, #2f3967eb, #000);
        display: flex;
        flex-direction: column;
    }

    .blocks {
        flex: 1;
        width: 100%;
        
        display: flex;
    }

    .wrapTile {
        height: 100%;
        width: 25%;
    }

    .tile {
        min-height: 6rem;
        width: 100%;
        padding: 1rem;
        display: flex;
        gap: 20px;
        background-color: #d3d3d3;
        color: #2F3967;
        align-items: center;
        border-right: 1px solid #fff;
        justify-content: center;
        font-family: Arial !important;
    }

    .tile i {
        font-size: 2rem
    }

    .tile:last-child {
        border: 0;
    }

    .tile p {
        margin: 0;
        font-size: 1.1rem;
        text-align: center;
        color: #d95e49;
        font-weight: bold;
        font-family: Arial !important;
        
    }

    .Star {
        display: flex;
        gap: 5px;
        color: #f38422;
        align-items: center;
        justify-content: center;


    }

    .Star p {
        margin: 0;
        font-size: 0.9rem;
        color: #fff;
        padding: 0 0.3rem;
        font-family: Arial !important;
        
        /* background-color: #fff; */
    }

    .detailsFooter {
        padding: 2rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
    }

    .Star i {

        font-size: 0.8rem;
    }

    .detailsFooter ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .subHeadFooter {
        font-size: 1.5rem;
        font-weight: bold;
        color: #d95e49;
        font-family: Arial !important;

    }

    .detailsFooter li {
        width: fit-content;
        display: flex;
        gap: 10px;
        font-size: 0.9rem;
        transition: all 0.4s ease;
        cursor: pointer;
        font-family: Arial;
        color: #fff;


    }
    .detailsFooter li a {
        color: #fff;
    }

    .detailsFooter li:hover {
        color: rgb(202, 54, 128);
        border-color: rgb(202, 54, 128);
        scale: 1.1;
        
    }

    .detailsFooter li:hover i {
        color: rgb(202, 54, 128);
        border-color: rgb(202, 54, 128);
    }

    .detailsFooter ul li i {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: 2px solid #fff;

        width: 1.5rem;
        height: 1.5rem;
    }

    .contact {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-family: Arial;
    }

    .emailContact,
    .phoneContact {
        display: flex;
        gap: 10px;
    }
    .emailContact i,.phoneContact i{
        color: #2F3967;
    }

    .icons {
        display: flex;
        gap: 10px;
        font-size: 1.2rem;
    }

    .icons i {
        background-color: #2F3967;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        color: #fff;
    }
    .icons i:hover{
        color: #fff;
        background-color: rebeccapurple;
    }
    .pay p{
        margin-top: 20px;

        color:gray
    }
    .pay img{
        width:100%;
    }
    .copyrightF{
        width:100%;
        border-top: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    .copyrightF p{
        padding: 0;
        margin: 0;
        width: 100%;
        font-family: Arial;
        text-align: center;
        color:white;
    }
   .copyrightF b{
        color:  #d95e49;
    }
    @media screen and (max-width: 1080px) {
        .blocks{
            flex-direction: column;
            width: 100%;
        }
        .wrapTile{
            width: 100%;
        }
        .wrapTile p{
            width: 100%;
            text-align: center;
            font-size: 1rem;
            font-family: Arial !important;
        }
        .tile p{
            width: fit-content;
            font-size: 1rem;
        }
        .Star p{
            font-size: 1.1rem;
            width: fit-content;
        }
        .wrapTile ul{
            margin: auto;
        }
        .subHeadFooter {
            font-size: 2rem;
        }
        .contact{
            align-items: center;
        }
    }
    @media screen and (max-width:370px) {
        .tile p {
            font-size: 0.8rem;
        }
    }
    @media screen and (max-width:350px) {
        .tile p {
        font-size: 0.6rem;
    }
    .wrapTile p {
        font-size: 0.8rem;
    }
    .Star p {
        font-size: 0.8rem;
    }
    .detailsFooter li{
        font-size: 0.8rem;
    }
    .emailContact span{
        font-size: 0.8rem;
    }
    .phoneContact span{
        font-size: 0.8rem;
    }
    }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="footernav">
    <div class="blocks">
        <div class="wrapTile">
            <div class="tile">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                <p> UP TO 5 YEARS UNLIMITED MILE WARRANTY</p>
            </div>
            <div class="detailsFooter">
                <p>Welcome to USA Auto Parts – the one stop shop for used/rebuilt Engines/Transmission.</p>
                <div class="Star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <p>50,000+ Happy Customer</p>
                </div>
            </div>
        </div>
        <div class="wrapTile">
            <div class="tile">
                <i class="fa-solid fa-truck-fast"></i>
                <p> FREE SHIPPING</p>
            </div>
            <div class="detailsFooter">
                <p class="subHeadFooter">Quick Link</p>
                <ul>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../index.php"> Home</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../About-us.php"> About us</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../search-car-parts.php"> Search Car Parts</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../contact-us.php"> Contact us</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../order-now.php"> Order now</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../used-engines.php">Engines</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../used-transmissions.php">Transmissions</a></li>
                </ul>

            </div>
        </div>
        <div class="wrapTile">
            <div class="tile">
                <i class="fa-solid fa-chart-line"></i>
                <p> NO CORE CHARGE</p>
            </div>
            <div class="detailsFooter">
                <p class="subHeadFooter">Useful Links</p>
                <ul>
                    <li><i class="fa-solid fa-arrow-right"></i> <a href="../return-cancellation.php">Return and Cancellation policy</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../warranty-policy.php"> Warranty Policy</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../terms-of-services.php"> Terms of Services</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../privacy-policy.php"> Privacy Policy</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="../shipping-policy.php"> Shipping Policy</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="#">Brands</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i><a href="https://new.usaautopartsllc.com/">Blogs</a></li>
                </ul>

            </div>
        </div>
        <div class="wrapTile">
            <div class="tile">
                <i class="fa-solid fa-handshake"></i>
                <p> EXCELLENT CUSTOMER SUPPORT</p>
            </div>
            <div class="detailsFooter">
                <p class="subHeadFooter">Contact Us</p>
                <div class="contact">
                    <div class="emailContact"><i
                            class="fa-solid fa-envelope-open"></i><span>usaautopartsllc01@gmail.com</span></div>
                    <div class="phoneContact">
                        <i class="fa-solid fa-phone-volume"></i>
                        <span>+1800-213-1371</s>
                    </div>
                    <div class="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div class="pay">
                        <p>Pay Securely with</p>
                        <img src="../images/cardList.png" alt="pay">
                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class="copyrightF">
        <p>© Copyright 2020 <b>USA Auto Parts</b>.. All rights reserved.</p>
    </div>
</div>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/644bc9704247f20fefee4dfe/1gv40locm';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
</script>
<!--End of Tawk.to Script-->