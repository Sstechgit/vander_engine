<!DOCTYPE html>
<html lang="en">

<head>
    
    <?php include 'g-tag-head.php'; ?>


    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audi-Transmissions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <link rel="stylesheet" href="../primary-parts-style.css">
    <style>
        .rightPage img{
            width: 75%;
            margin-left: 5rem;
        }
        @media screen and (max-width:540px) {
            .rightPage img{
            width: 75%;
            margin-left: 2rem;
        } 
        }
    </style>
    
 <?php
  // Determine the canonical URL
  $canonicalUrl = "https://usaauto-parts.com" . $_SERVER['REQUEST_URI'];
  ?>
  <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>" />
  
</head>

<body>
    
    <?php include 'g-tag-body.php'; ?>
    
    <div style="width:100%;height:100%;overflow-x:hidden;">
        <?php
        // include 'popup.php'
        ; ?>
        <!------------------------------------header-------------------------->
        <?php include '../header/header.php'; ?>
        <!-----------------formSection----------------------->
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
            <div class="rightForm">
                <p>Genuine Used Audi-Transmissions With Warranty</p>
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
                                <span>Order now</span>
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
                            <span>+1800-213-1371</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------stats----------------------------------->
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
        <!-----------------first-section----------------------->
        <div class="pageCont">
            <div class="leftPage">
                <p>
                <h1>Used Audi Transmission for Sale-USA Auto Parts</h1>
                </p>
                <p>USA Auto Parts is your leading provider of high-quality used Transmission in the United States. We
                    specialize in providing used Audi transmissions to ensure your vehicle's performance. USA Auto Parts
                    is
                    a trusted provider of used engines in the USA. Our used Audi transmissions are rigorously inspected
                    and
                    tested to ensure their optimal performance and longevity. USA Auto Parts has a reliable engine with
                    high
                    quality that helps to improve your on-road experience. USA Auto Parts transmissions are trustworthy
                    and
                    reliable to give you maximum performance. We give you a warranty commitment of five years. Shopping
                    for
                    auto parts online with us might be the most convenient way to get the transmissions you need. USA
                    Auto
                    Parts LLC is a leading supplier and installer of used transmissions for sale. We deliver to your
                    door
                    without any hassles of going to a physical auto store. USA Auto Parts prioritizes quality and
                    customer
                    satisfaction by providing them with nationwide shipping. We are experts in dealing with refurbishing
                    of
                    all makes and models.
                </p>
                <button>TALK TO OUR EXPERT</button>
            </div>
            <div class="rightPage">
                <img src="../images/banner-img-1 (1).png" alt="" >
                <!-- image is on background -->
            </div>
        </div>
        <!------------------section-section---------------------->
        <div class="TileCont" style="background-image:url('../images/honda-bg.png')">
            <div class="tileParent">
                <div class="tileDiv">
                    <p>
                    <h2>Benefits of choosing USA Auto Parts</h2>
                    </p>
                    <p> <b> High-quality standards:</b> Each used transmission undergoes rigorous testing to ensure
                        optimal
                        performance and reliability.
                    </p>
                    <p> <b> Extensive inventory:</b> we offer a wide range of used transmissions, including the
                        sought-after
                        Audi transmission.
                    </p>
                    <p> <b>Expert support:</b> our knowledgeable team is here to assist you in finding the right
                        transmission
                        for your Audi.
                    </p>
                    <p> <b> Affordable prices: </b> save money without compromising on quality with our competitively
                        priced
                        used transmission.
                    </p>
                </div>
            </div>
        </div>
        <!-------------------Third-section------------------------>
        <div class="pageCont" style="margin:2rem 0;">
            <div class="leftPage">
                <p>
                <h3>Why Choose a Used Audi Transmission?</h3>
                </p>
                <p>When you opt for a used Audi
                    transmission from USA Auto Parts, you’re investing in a product that combines reliability with
                    excellent
                    value. Each transmission undergoes thorough inspection and testing to ensure it meets our stringent
                    quality standards, ensuring you get the best performance out of your vehicle.
                </p>
            </div>
            <div class="rightPage">
                <img src="../images/banner-img-2.png" alt="" >
            </div>
        </div>
        <!--------------------footer------------------------------->
        <?php include '../footer/footer.php'; ?>
    </div>

        <!-- <script>
    var typed = new Typed('#typed', {
        strings: ['Engines', 'Transmissions'],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 30, // backspacing speed in milliseconds
        loop: true // loop indefinitely
    });

</script>

    <script>
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

    </script> -->

</body>

</html>