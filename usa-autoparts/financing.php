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

    .box-1 {
        width: 100%;
        background: linear-gradient(45deg, #5d5555, #0000009e);
        font-family: Roboto;
        padding: 1rem;
    }

    .box-1 h1 {
        color: #2f3967;
        padding: 0.5rem;
        margin: 0.5rem;
        letter-spacing: 0;
        font-weight: bold;
    }

    .box-1 p {
        color: #fff;
        padding: 0.5rem;
        margin: 0.5rem;
        letter-spacing: 0;
        line-height: 1.6rem;
    }

    .box-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* Optional: Centers items horizontally */
        margin-top: 2rem;
        margin-bottom: 2rem;
        /* border: 1px solid #000; */
        align-items: center;
        gap: 10px;
        padding: 0 1rem;
    }

    /* .card{
        margin-top: 2rem;
        margin-bottom: 2rem;
       
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;


    } */


    .card img {
        height: 50%;
        object-fit: none;
        border-radius: 0.375rem 0.375rem 0 0 ;
    }
    .card-body{
        text-align: center;
    }
    .card button {
        background-color: #2f3967;
        color: #fff;
        /* border-radius: 1rem;
        border: 1px solid; */
        width: 120px;
        height: 40px;
        font-size: 1rem;
        margin-top: 1rem;
       
    }

    .card button:hover {
        background-color: #2f3967 !important;
        color: #fff !important;
    }

    .box p {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: center;
        /* Optional: Centers items horizontally */
        margin-top: 1rem;
        font-family: Lora;


        align-items: center;
    }

    .paypal {
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: #111111;
    }

    .paypal h2 {
        color: #fff;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        font-size: 2rem;
    }

    .paypal p {
        color: #fff;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        font-size: 1.2rem;
    }

    .paypal button {
        background-color: #2f3967;
        width: 100%;
        border-radius: 1rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 2rem;
        font-family: poppins;
    }

    .paypal img {
        width: 100%;

    }

    .content {
        width: 100%;
        background-color: #000;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;


    }

    .content p {
        width: 100%;
        color: #fff;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        .box-container {
            display: flex;
            flex-direction: column;

        }
    }

    @media (max-width: 1200px) {
        .box-container {
            display: flex;
            flex-direction: column;

        }
    }

    @media (max-width: 500px) {
        .box-container {
            display: flex;
            flex-direction: column;

        }
        .box-1 p{
            font-size: 14px;
        }
        .content p {
            font-size: 14px;
        }
        .left p {
            font-size: 14px;
        }
    }

    .mainCont {
        width: 100%;
        height: 100%;
    }

    .main {

        background-color: #111111;
        width: 100%;
        padding: 2rem;
        background: linear-gradient(45deg, #231111, #00000047);
    }

    .main button {
        background-color: #2f3967;
        width: 100%;
        border-radius: 1rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 1.5rem;
        font-family: lora;
        color: #fff;
    }

    .inner {
        width: 100%;
        display: flex;
    }

    .main h1 {

        color: #fff;
        border-bottom: 1px solid #fff;

    }

    .left {
        width: 50%;
        padding: 1rem;
        line-height: 1.5rem;
        letter-spacing: 0;
        font-family: lora;
        font-size: 1.2rem;
    }

    .left p {
        color: #fff;
    }

    .right {
        display: flex;
        width: 50%;
        padding: 1rem;
        align-items: center;
        text-align: center;
        justify-content: center;

    }

    .right img {
        width: 100%;

    }

    @media screen and (max-width: 1075px) {
        .inner {
            flex-direction: column;
        }

        .right,
        .left {
            width: 100%;
        }

        .right img {
            width: 60%;
        }
    }

    @media screen and (max-width: 569px) {
        .right img {
            width: 100%;
        }

        .left {
            padding: 0.4rem 0;
        }
    }
</style>

<body>
    <?php include ("./header/header.php"); ?>


    <div class="container box-1">
        <h1>USA Financing</h1>
        <p>
            Usa Auto Parts offers multiple financing options to help get your vehicle back on the road. You can even get
            pre-approved over the phone by calling us at +1800-2131-371. To ease our customers minds, inquiries for most
            of our financing options do not affect your credit score.
        </p>
        <p>
            <b> PLEASE NOTE: </b> Our sales and finance team will do everything they can to help you process your
            financing
            application. When you are approved, the financing company pays USA AUTO PARTS. If you decide to cancel the
            transaction, but the financing company has already made payment to USA AUTO PARTS, there will be a
            TRANSACTION CANCELLATION FEE assessed.
        </p>



    </div>
    <div class="box-container">
        <div class="container">
            <div class="row g-4">

                <div class="col-lg-4 col-md-4">
                    <div class="card h-100">
                        <img src="./images/affirm.png" alt="Affirm">
                        <div class="card-body">
                            <p>Buy now and pay later with affirm - get approved up to $6500.00</p>
                            <button type="submit" class="btn">Apply Here</button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="card h-100">
                        <img src="./images/approved.png" alt="Approved">
                        <div class="card-body">
                            <p>Buy now and pay later with SNAP - get approved up to $5000.00</p>
                            <button type="submit" class="btn">Apply Here</button>
                        </div>

                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="card h-100">
                        <img src="./images/paytomorrow.png" alt="paytomorrow">
                        <div class="card-body">
                        <p>Buy now and pay later with PAY TOMORROW - get approved up to $6500.00</p>
                        <button type="submit" class="btn card-btn">Apply Here</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- <div class="box">
            <img src="./images/affirm.png" alt="Affirm">
            <p>Buy now and pay later with affirm - get approved up to $6500.00</p>
            <button type="submit">Apply Here</button>
        </div>


        <div class="box">
            <img src="./images/approved.png" alt="Approved">
            <p>Buy now and pay later with SNAP - get approved up to $5000.00</p>
            <button type="submit">Apply Here</button>
        </div>

        <div class="box">
            <img src="./images/paytomorrow.png" alt="paytomorrow">
            <p>Buy now and pay later with PAY TOMORROW - get approved up to $6500.00</p>
            <button type="submit">Apply Here</button>
        </div> -->


    <div class="paypal">
        <img src="./images/pay.png" alt="Paypal-image">
        <h2>PAY PAL CREDIT</h2>
        <p>Pay at your own pace with your PAY PAL account</p>
        <button>Click Here</button>
    </div>

    <div class="content">
        <p>We’re thrilled to announce that we now offer PayPal as a payment option! Please note that all transactions
            processed through PayPal will be subject to a 2.9% processing fee. Feel free to give us a call for more
            information and details.
        </p>
    </div>

    <div class="main">
        <h1>USA AUTO PARTS PRICE FREEZE PLAN</h1>
        <div class="inner">
            <div class="left">
                <p>Introducing the Vander Engine Freeze Plan, an exclusive opportunity for our valued customers. With
                    the
                    Vander Engine Freeze Plan, you can secure current pricing on our premium Vander Engine Products.
                    This
                    plan allows you to lock in the current price and make convenient payments towards your selected
                    product,
                    whether it’s an engine, transmission, transfer case, rear differential, or cylinder heads. The
                    Vander
                    Plan provides you with the flexibility to pay for your chosen product at your own pace until it’s
                    fully
                    paid off. Once your product is completely paid for, USA AUTO PARTS will promptly ship the item to
                    you,
                    ensuring you benefit from the exceptional value of the vander engine price. This unique offering
                    allows
                    you to take advantage of the great prices USA AUTO PARTS offers while providing a flexible payment
                    option tailored to your needs. Experience the convenience and peace of mind with the Vander Engine
                    Freeze Plan, securing your desired product at a locked-in price. Embrace this opportunity to invest
                    in
                    top-quality products from USA AUTO PARTS with ease and confidence. For further details and to enroll
                    in
                    the Vander Freeze Plan, please contact our dedicated team.
                </p>
            </div>
            <div class="right">
                <img src="./images/us-auto-logo.png" alt="usa-logo">
            </div>
        </div>
        <button>Apply for Plan Usa Auto Parts</button>
    </div>






    <?php include ("./footer/footer.php") ?>

</body>

</html>