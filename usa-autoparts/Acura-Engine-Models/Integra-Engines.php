<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acura-Integra-Engines</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        /*-------------------------primary-hero----------------------*/
        .primaryHero {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../images/bgEngine.jpg) no-repeat center center /cover;
            min-height: 30rem;
        }

        .container {
            height: 100%;
        }

        form {
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            border-radius: 20px;
        }

        .form-control {
            border-radius: 5px !important;

        }

        .form-control:hover {
            box-shadow: none !important;
        }

        .submit .btn {
            background-color: #2F3967;
            color: #fff !important;
            border-radius: 10px;
        }

        .submit .btn:hover {
            background-color: #ff9600 !important;
            color: #000 !important;
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
            font-size: calc(16px + 1rem);
            font-family: "Poppins" !important;
            color: rgb(245, 183, 84);
            text-shadow: 0;
            color: #1fa910;
            text-shadow: 0 0 0.7rem #000;
        }

        #partSpan {
            color: #e40000;
            font-weight: bold;
            text-shadow: 0 0 10px black;
        }

        /*-------------WRAPTEXT-----------------------*/
        .WrapText p {
            font-family: 'Quicksand';
        }

        .WrapText h1 {
            color: #000;
            font-family: 'Philosopher';
            padding: 0 0.5rem;
            border-radius: 2rem;
        }

        .WrapText h1 {
            border-bottom: 1px dashed #000;
            box-shadow: 0.1rem 0.1rem 0.4rem #0000004d;
        }

        .WrapText h3 {
            background-color: #2F3967 !important;
            color: #fff;
            border-radius: 1rem;
            font-family: 'Philosopher';
            width: fit-content;
            padding: 0.5rem;
        }

        /*---------------------sub-childs----------------*/
        .child {
            text-align: center;
            padding: 1rem;
            border: 0.1px solid #000;
            font-family: "Quicksand";
            background-color: #2F3967;
            color: #fff;
            border-radius: 2rem;

        }

        .child a {
            color: inherit;
        }

        @media screen and (max-width:768px) {
            .left p {
                font-size: 2rem;
            }
        }

        @media screen and (max-width:300px) {
            .left {
                display: none;
            }

        }
    </style>
</head>

<?php include '../header/header.php'; ?>

 <!-----------primaryHero-start-------------------------------->
 <div class="primaryHero d-flex align-items-center justify-content-center ">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center ">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <form action="mailer.php" method="POST" class="p-3 my-2">
                        <div class="row g-3">
                            <div class="col-lg-6 col-sm-12">
                                <select id="year" class="form-control" aria-required="true" aria-invalid="false"
                                    name="select-year" required>
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
                            <div class="col-lg-6 col-sm-12">

                                <select id="make" class="form-control" aria-required="true" aria-invalid="false"
                                    name="make" required>
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
                            <div class="col-lg-6 col-sm-12">

                                <input id="model" class="form-control" aria-required="true" aria-invalid="false"
                                    placeholder="Enter Model" value="" type="text" name="model" required />
                            </div>
                            <div class="col-lg-6 col-sm-12">

                                <select id="part" class="form-control" aria-required="true" aria-invalid="false"
                                    name="part" required>
                                    <option value="">- Select Part -</option>
                                    <option value="Engine">Engine</option>
                                    <option value="Transmission">Transmission</option>
                                    <option value="Reman Engine">Reman Engine</option>
                                    <option value="Reman Transmission">Reman Transmission</option>
                                    <option value="Turbo">Turbo</option>
                                </select>
                            </div>
                            <div class="col-lg-6 col-sm-12">

                                <input id="name" class="form-control" size="20" aria-required="true"
                                    aria-invalid="false" placeholder="Enter Name" value="" type="text" name="name"
                                    required />
                            </div>
                            <div class="col-lg-6 col-sm-12">

                                <input id="phone" class="form-control" size="20" maxlength="12" minlength="10"
                                    aria-required="true" aria-invalid="false" placeholder="Enter Phone" value=""
                                    type="tel" name="phone" required />
                            </div>
                            <div class="col-sm-12 email">

                                <input id="email" class="form-control" size="20" id="tel-915-contact-no"
                                    aria-required="true" aria-invalid="false" placeholder="Enter Email" value=""
                                    type="email" name="email" required />
                            </div>
                            <div class="d-grid submit">
                                <button class="btn btn-block">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="left">
                        <p>The Best <span id="partSpan">Seller</span> <br>FOR<br><span class="typed-text"
                                id="typed"></span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-----------Wrap-text-------------------------------->
    <div class="WrapText my-3">
        <div class="container-fluid text-start">
            <!------------------first-head-------------------------------->

            <h1 class="text-center">
            Acura Integra Engines: Elaborate Models and Options
            </h1><br>
            <p>
            We specialize in high-quality Acura Integra engines suited to the requirements of drivers as well as enthusiasts at USA Auto Parts. 
            From classics being restored to cars needing better performance, 
            our stock has a variety of engines for all kinds of different models of the Integra. 
            Here are some details about each variant to help you choose right match for your own Acura Integra:

            </p>
                    <h2>ACURA INTEGRA GS</h2>
                   
                    <p>The Acura Integra GS is a mix of sportiness and luxury that gives a comfortable ride with the pinch of sport. 
                        Here are some important points about the Acura Integra GS:

Engine Options: Typically, it would have a 1.8-liter inline-4 engine which enables a good blend of
 power as well as fuel efficiency.

Features: Known for its luxurious interior amenities with some models that come with leather upholstery
 (depending on the model year), high-end audio systems, and innovative comfort features.

Performance: Delivers smooth driving experience to everyday rides including those spirited drives.</p>

        <h3>ACURA INTEGRA LS</h3>
        <p>The main focus of Acura Integra LS is to offer reliable and practical driving experience combined with a sporty look. Here is what you need to know about Acura Integra LS:

Engine Options: Frequently, the engine will be the same 1.8-liter inline-4 GS 
variant having improved efficiency and durability.

Features: Delivering such things as comfort cloth seats, 
basic stereos or convenient items can make it strike a balance between performance and comfort vehicles.

Performance : This one works well for daily drives making it an appealing option among people 
who love integra vehicles for their practical nature yet retaining some sportness in them.</p>

<h3>Acura Integra RS
</h3>
<p>This model underscores the values of lightness, agility, and outright performance that matter to driving enthusiasts. Here are some highlights of the Acura Integra RS:

Engine Options: Normally powered by a 1.8-litre four-cylinder engine that is tuned for responsive and high-performance cars.

Features: It has a stripped-down cabin, manual gearbox choices and sport suspension for better handling.

Performance: The Integra RS is famous for its agile handling and sharp steering which makes it a car built specifically for twisty roads or track days favored by motoring enthusiasts.
</p>

<h3>Acura Integra GSR</h3>
<p>The Acura Integra GSR is well known among car lovers as highly proficient in terms of 
    performance with sporty styling points. What differentiates the Acura Integra GSR from other models?

Engine Options: Its powertrain includes an influential 1.8-liter DOHC VTEC inline-4 motor 
known for its high-revving nature and strong power delivery.

Features: The car boasts sportier interior and exterior styling components, racing seats for spirited driving, and advanced sound systems.

Performance: It gives out more horsepower and torque to provide exhilarating 
performances making it an all-round favorite among people looking for usable daily driver’s 
cars mixed with race-ready machines favorite amongst fervent supporters.

The Acura Integra Type R is the ultimate in performance and precision engineering from the Integra line of
 vehicles made by Acura. Below are the key points in this regard.

Engine Options: It comes with a modified 1.8-liter DOHC VTEC inline-4 engine, which offers maximum performance and makes it track ready.

Features: This includes lightweight materials, aggressive aerodynamics, 
sport-tuned suspension, Recaro seats and minimalist interior focused on performance.

Performance: With its remarkable handling capabilities blistering acceleration and pin point steering feedback 
it is a car that driving enthusiasts and collectors seek to acquire.</p>


<p>If you are looking for practicality in GS type, reliability in LS type or agility in RS type or even better
     yet performance in GSR type or the ultimate driving experience In Type R Integra then USA Auto Parts can
      be your trusted dealer for second hand good quality engines. Check out our inventory today to find a 
      suitable variant of Acura Integra engine according to your preferences when driving as well as
       performance needs. To make further enquiries or place an order please contact 
    our competent team that is willing to help you upgrade your Acura Integra experience with superior engines.
</p>

    </div>
</div>

   


<script>
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

</script>
<?php include '../footer/footer.php'; ?>
</body>

</html>