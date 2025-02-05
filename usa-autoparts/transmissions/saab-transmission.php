<!DOCTYPE html>
<html lang="en">

<head>
    
    <?php include 'g-tag-head.php'; ?>


    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saab-Transmissions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <link rel="stylesheet" href="../primary-parts-style.css">
    <style>
        .rightPage img {
            width: 75%;
            margin-left: 5rem;
        }

        @media screen and (max-width:540px) {
            .rightPage img {
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
                <p>Genuine Used Saab-Transmissions With Warranty</p>
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
                <h1>Used Saab Transmissions For Sale - USA Auto Parts</h1>
                </p>
                <p>At USA Auto Parts, we specialize in providing high-quality used Saab transmissions across the United
                    States. Our extensive inventory ensures you get reliable, tested, and affordable transmissions to
                    keep
                    your Saab running smoothly. Whether you’re restoring a classic or maintaining a daily driver, we
                    have
                    the parts you need. At USA Auto Parts, we understand how crucial a reliable transmission is to the
                    performance and longevity of your vehicle. Our knowledgeable and friendly staff is dedicated to
                    helping
                    you find the perfect transmission for your specific model, ensuring compatibility and optimal
                    performance. We leverage our extensive network and inventory to offer competitive prices without
                    compromising quality. Additionally, we provide comprehensive product information and support to make
                    your buying experience smooth and satisfying. Choosing USA Auto Parts means not only getting a
                    top-quality product but also benefiting from our exceptional customer service and industry
                    expertise.
                </p>
                <button>TALK TO OUR EXPERT</button>
            </div>
            <div class="rightPage">
                <img src="../images/banner-img-1 (1).png" alt="">
                <!-- image is on background -->
            </div>
        </div>
        <!------------------second-section---------------------->
        <div class="TileCont" style="background-image:url('../images/honda-bg.png')">
            <div class="tileParent">
                <div class="tileDiv">
                    <p>
                    <h2>Benefits of Buying Used Saab Transmissions from USA Auto Parts</h2>
                    </p>
                    <p> <b> Cost-Effective Solution: </b> Save money without compromising on quality. Our used Saab
                        transmissions offer significant savings compared to buying new parts, making repairs more
                        affordable.

                    </p>

                    <p> <b> Quality Assurance:</b>Each transmission undergoes rigorous testing and inspection processes
                        to
                        ensure reliability and performance, giving you peace of mind with every purchase.

                    </p>

                    <p> <b>Wide Selection:</b>Explore a wide range of Saab transmission models, including popular and
                        rare
                        variants, ensuring you find the exact part you need for your vehicle.
                    </p>
                    <p> <b>Expert Support: </b>Our knowledgeable team is dedicated to helping you find the right
                        transmission
                        for your Saab vehicle, providing expert advice and support throughout your purchase journey.



                    </p>

                    <p> <b>Nationwide Availability: </b> With nationwide shipping, we deliver your used Saab
                        transmission
                        quickly and efficiently, no matter where you are in the USA.



                    </p>

                    <p> <b>Eco-Friendly Choice: </b> Choosing a used transmission reduces environmental impact by
                        recycling
                        functional parts, contributing to sustainable practices in automotive maintenance.
                    </p>
                </div>
            </div>
        </div>
        <!-------------------Third-section------------------------>
        <div class="pageCont" style="margin:2rem 0;">

            <div class="leftPage">
                <p>
                <h3>Available Saab Models:</h3>
                </p>
                <p>Saab 9-2X | Saab 9-3 | Saab 9-5 | Saab 9-7X | Saab 900 | Saab 9000 | Saab 93 Viggen | Saab 95</p>
            </div>
            <div class="rightPage">
                <img src="../images/banner-img-2.png" alt="">
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