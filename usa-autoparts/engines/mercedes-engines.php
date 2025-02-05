<!DOCTYPE html>
<html lang="en">

<head>
    
    <?php include 'g-tag-head.php'; ?>


    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mercedes-Engines</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <link rel="stylesheet" href="../primary-parts-style.css">

<?php
  // Determine the canonical URL
  $canonicalUrl = "https://usaauto-parts.com" . $_SERVER['REQUEST_URI'];
  ?>
  <link rel="canonical" href="<?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?>" />


</head>

<body>
    
    <?php include 'g-tag-body.php'; ?>
    
  <div style="width:100%;height:100%;overflow-x:hidden;">
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

              <input id="model" size="40" aria-required="true" aria-invalid="false" placeholder="Enter Model" value=""
                type="text" name="model" required />
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

              <input id="name" size="20" aria-required="true" aria-invalid="false" placeholder="Enter Name" value=""
                type="text" name="name" required />
            </div>
            <div class="flexCol">

              <input id="phone" size="20" maxlength="12" minlength="10" aria-required="true" aria-invalid="false"
                placeholder="Enter Phone" value="" type="tel" name="phone" required />
            </div>
            <div class="flexCol email">

              <input id="email" size="20" id="tel-915-contact-no" aria-required="true" aria-invalid="false"
                placeholder="Enter Email" value="" type="email" name="email" required />
            </div>
            <div class="centerBtn">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="rightForm">
        <p>Genuine Used Mercedes-Engine Parts With Warranty</p>
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
        <h1>Used Mercedes-Benz Engines for Sale - USA Auto Parts</h1>
        </p>
        <p>USA Auto parts is your leading provider of high-quality <a href="https://usaauto-parts.com/used-engines.php">used engines</a> in the United States. We are
                specializing in providing used Mercedes-Benz engines to ensure your vehicle performance. USA Auto
                Parts is a trusted provider of used Mercedes engines in the USA. Our used Mercedes-Benz engines are
                rigorously inspected and tested to ensure their optimal performance and longevity. USA Auto Parts
                have a reliable engine with high-quality that helps to improve your on-road experience. USA Auto
                Parts engines are trustworthy and reliable to give you maximum performance. We give you a
                warranty commitment of five years. Shopping for auto parts online with us might be the most
                convenient way to get the engine you need. USA Auto Parts is a leading supplier and installer of
                used and remanufactured Mercedes engines for sale. We deliver to your door without any hassles of going to a physical auto store.
                USA Auto Parts prioritize quality and customer satisfaction by providing them nationwide shipping.
                We are experts in dealing with refurbishing of all makes and models.
            </p>
        <button>TALK TO OUR EXPERT</button>
      </div>
      <div class="rightPage">
        <img src="../images/bgEngine.jpg" alt="" style="width: 100%;">
        <!-- image is on background -->
      </div>
    </div>
    <!------------------second-section---------------------->
    <div class="TileCont" style="background-image:url('../images/jeep-bg.webp');">
            <div class="tileParent">
                <div class="tileDiv">
                    <p>
                    <h2>Benefits of choosing USA Auto Parts</h2>
                    </p>
                    <p><b>High quality standards:</b> Each second hand Mercedes engine undergoes rigorous testing to ensure
                optimal performance and reliability.</p>

            <p><b>Extensive inventory:</b> we offer a wide range of used Mercedes motors, including the sought
                after Mercedes-Benz engine.</p>

            <p><b>Expert support:</b> our knowledgeable team is here to assist you in finding the right
                engine for your Mercedes-Benz.</p>

            <p><b>Affordable prices:</b> save money without compromising on quality with our
                competitively priced used Mercedes engine.</p>
                </div>
            </div>
        </div>
           
    <!-----------------third-section------------------------->
    <div class="pageCont">
            <div class="leftPage">
                <p>
                <h3>Why Choose a Used Mercedes-Benz Engine?</h3>
                </p>
                <p>When you opt for a used Mercedes-Benz engine from USA Auto Parts, you’re investing in a product
                that combines reliability with excellent value. Each engine undergoes thorough inspection and
                testing to ensure it meets our stringent quality standards, ensuring you get the best performance
                out of your vehicle.
            </p>
            </div>
            <div class="rightPage">
                <img src="../images/engine2.webp" alt="" style="width:100%">
            </div>
        </div>
            
     <!--------------------Sub-Parts------------------------------>
     <div class="container-2">
            <div class="row models">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('CDX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        CDX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('CL-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        CL Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('CSX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        CSX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('EL-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        EL Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('GSX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        GSX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('ILX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        ILX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('Integra-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        INTEGRA Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('MDX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        MDX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('NSX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        NSX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('RDX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        RDX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('RL-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        RL Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('RLX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        RLX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('RSX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        RSX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('SLX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        SLX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('TL-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        TL Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('TLX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        TLX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('TSX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        TSX Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('Vigor-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        VIGOR Engines
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                    <div onclick="redirectToSearch('ZDX-Engines','Acura-Engine-Models')"
                        class="nav-link position-relative text-body rounded bg-white  text-center modA">
                        ZDX Engines
                    </div>
                </div>
            </div>
        </div>

    <!-- <div class="sub-parts d-flex align-items-center justify-content-center my-5">
        
            <div class="container">
                
                <div class="row g-4">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        190
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        200
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        220
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        230/4
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        230/6
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        240D
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        260E
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        280
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        300D
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        300E
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        300SL
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        380
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        420
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        560
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        600
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        A220
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        A250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        A35 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        B-CLASS Electric
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        B200
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        B250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C220
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C230
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C240
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C280
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C300
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C32 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C36 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C43 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        C63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL600
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CL65 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLA250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLA35
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLA45
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK430
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLK63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS53 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        CLS63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E280
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E300
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E300D
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E420
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E43 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E430
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E53 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        E63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        G500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        G55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        G550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        G63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        G65 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GL320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GL350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GL450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GL550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GL63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLA250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLA45
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLC300
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLC350e
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLC43 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLC63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE300D
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE350D
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE43 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE53 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE580
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLE63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLK250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLK350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLS350d
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLS450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLS550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLS580
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GLS63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        GT
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML430
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        ML63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        Metris
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        R320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        R350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        R500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        R63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S420
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S430
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S550e
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S560
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S600
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        S65 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL400
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL450
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL500
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL550
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL600
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL63 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SL65 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLC300
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLC43 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK230
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK250
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK280
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK300
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK32 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK320
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK350
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLK55 AMG
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLR Mclaren
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="child">
                        SLS AMG
                    </div>
                </div>

            </div>
        </div>
    </div> -->

    <!-- <script>
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

    </script> -->
    <?php include '../footer/footer.php'; ?>
</div>
</body>

</html>