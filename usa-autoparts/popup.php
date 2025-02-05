
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
    rel="stylesheet" />
    
    <link rel="stylesheet" href="popup.css">
    
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      width: 100vw;
      height: 100vh;
    }

    .Area {
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #ffffff10;
      backdrop-filter: blur(0.7rem);
      justify-content: center;
      align-items: center;
      animation: fromTop 1s ease forwards;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2000;
    }

    .popup {
      width: 60%;
      height: fit-content;
      background-color: #252b37;
      display: flex;
      position: relative;
      /* opacity: 0; */
      position: relative;
      animation: opaque 2s ease forwards;
      z-index: 3000;
      z-index: 1;

    }

    .popup::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      /* opacity: 0.5; */
      background: url(../images/popup.webp) no-repeat center center/cover;
      z-index: -1;

    }

    #close1 {
      position: absolute !important;
      top: -0.5rem !important;
      right: -1rem !important;
      background-color: #9E9E9E !important;
      color: #000 !important;
      font-weight: bold !important;
      width: 2rem !important;
      height: 2rem !important;
      font-size: 1.2rem !important;
      font-family: "Poppins" !important;
      border: 0 !important;
      border-radius: 100% !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      text-align: center;
      align-items: center !important;
      margin: 0 !important;
    }

    #close1:hover {
      color: #fff !important;
    }

    /* left pop */
    .leftPop {
      padding: 1rem 1.4rem;
      display: flex;
      flex-direction: column;
      width: 30%;
      height: fit-content;
    }

    .rightPop {
      /* border: 1px solid #000; */
      /* background-color: #000; */
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .salePart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;




    }

    .salePart img {
      width: 100%;
      filter: invert(1);
    }

    .salePart span {
      color: rgb(226, 90, 92);
      font-size: 1.8rem;
      /* border: 1px solid #fff; */
      font-family: "Arial Narrow";
    }

    .salePart span:nth-child(2) {
      font-weight: bold;
      font-size: 4rem;

    }

    .discountPart {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }

    #getupto {
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      letter-spacing: 0.1rem;
      text-align: center;
      font-weight: bold !important;
    }

    .disVal {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Arial Narrow";
      gap: 2px;
    }

    .percentOff {
      display: flex;
      flex-direction: column;


    }

    .percentOff span {
      color: #fff;
      font-size: 2rem;
      font-style: italic;

    }

    #num {
      font-size: 5rem;
      color: #fff;
    }

    #carPart {
      color: #f3e5f5;
      border-top: 3px solid #071a7f;
      font-weight: bold !important;
      border-bottom: 3px solid #071a7f;
      font-family: "Arial Narrow";
      padding: 0.2rem;
      text-align: center;
    }

    .popup form {
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      background-color: transparent !important;

    }

    .popup form input {
      font-size: 1.2rem;
      padding: 0.3rem;
      border-radius: 10px;
      border: 0;
      outline: 0;
      font-family: "Poppins";
      text-indent: 20px;
      border-bottom: 1px dashed darkred;
      opacity: 0.8;
    }

    .popup #name,
    .popup #phone {
      width: 48%;
    }

    #email {
      width: 100%;
    }

    .textArea {
      display: flex;
      flex-direction: column;
      width: 100%;
      
    }

    .textArea p {
      font-size: 1.2rem;
      font-family: "Poppins";
      color: #fff;
    }

    .textArea textarea {
      font-size: 1.2rem;
      border-radius: 10px;
      padding: 0.5rem 20px;
      font-family: "Poppins";
      outline: 0;
      border-bottom: 1px dashed darkred;
      opacity: 0.8;
    }
    .textArea label{
      font-size: 18px;
      font-weight: 500;
    }
    .popup input::placeholder,
    .textArea textarea::placeholder {
      color: #000;
    }

    .btnsPop {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 20px;
    }

    .btnsPop button,
    .btnsPop p:nth-child(3) {
      font-size: 1.2rem;
      padding: 0.5rem;
      border: 0;
      border-radius: 4px;
      font-family: "Poppins";
      color: #000;
      background-color: #F3E5F5;
      transition: all 0.5s ease;
      margin: 0 !important;
    }

    .btnsPop p:nth-child(2) {
      padding: 0.5rem;
      margin: 0 !important;

    }

    .btnsPop button:hover {
      background-color: rgb(248, 173, 35);
    }

    .btnsPop p {
      color: #fff;
      font-family: "Poppins";
    }

    @media screen and (max-width:1134px) {
      .popup {
        width: 70%;
      }

      .btnsPop button,
      .btnsPop p:nth-child(3) {
        font-size: 1rem;
      }

      .salePart span:nth-child(2) {
        font-size: 3.5rem;
      }
    }

    @media screen and (max-width: 874px) {
      .popup {
        width: 80%;
      }
    }

    @media screen and (max-width: 759px) {
      .popup {
        width: 90%;
      }
    }

    @media screen and (max-width: 680px) {

      .popup input,
      .popup textarea {
        font-size: 1rem !important;
        padding: 0.2rem !important;
      }

      .Area {
        padding: 1rem !important;
      }

      .popup {

        flex-direction: column;
      }

      .leftPop {
        width: 100%;
        flex-direction: row;

      }

      .salePart img {
        width: 10rem;
      }

      .rightPop {
        width: 100%;
      }

      .salePart,
      .discountPart {
        width: 50%;

        height: 100%;
      }

      .btnsPop button,
      .btnsPop p:nth-child(3) {
        padding: 0.3rem;
        font-size: 0.8rem;
      }

    }

    @media screen and (max-width: 466px) {
      .popup {
        width: 98%;
      }

      .leftPop {
        flex-direction: column;
      }

      .discountPart {
        display: none;
      }

      .salePart {
        width: 100%;
      }

      .popup form {
        padding: 0.5rem;
      }

      .btnsPop p:nth-child(2) {
        display: none;
      }

      .btnsPop {
        flex-direction: column;
        gap: 4px;
      }

      .btnsPop * {
        width: 100%;
        text-align: center;
      }
    }

    @media screen and (max-width: 306px) {
      .popup input {
        width: 100% !important;
      }
    }

    /* animation */
    @keyframes fromTop {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;

      }

    }

    @keyframes opaque {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }

      100% {
        opacity: 1;
        transform: translateX(0);

      }
    }
    /*pop is done none to remove it from all the pages to show it again remove below propery*/
    .Area {
  display: none !important;
}

  </style>



  <div class="Area">
    <div class="popup">
      <span id="close1">X</span>
      <div class="leftPop">
        <div class="salePart">
          <img src="../images/sale.png" alt="sale">
        </div>
        <div class="discountPart">
          <span id="getupto">Get Discount Up to </span>
          <div class="disVal">
            <span id="num">50</span>
            <div class="percentOff">
              <span>%</span>
              <span>OFF</span>
            </div>
          </div>
          <span id="carPart">ON CAR PARTS</span>
        </div>
      </div>
      <div class="rightPop">
        <form action="popup-mail.php" method="POST">
          <input type="text" id="name" placeholder="Enter Name" name="name" required />
          <input type="tel" id="phone" minlength="10" maxlength="12" name="phone" placeholder="Enter Phone" required />
          <input type="email" id="email" placeholder="Enter Email" name="email" required />

          <div class="textArea">
            <label for="textarea">Additional Details</label>
            <textarea name="message" id="textarea" required
              placeholder="Type here Model/Part/Make/Year/VIN etc."></textarea>
          </div>
          <div class="btnsPop">
            <button>ACTIVATE NOW</button>

          </div>
        </form>
      </div>
    </div>
  </div>

<script>
  const btn1 = document.getElementById("close1");
  btn1.onclick = () => {
    const Area = document.querySelector(".Area");
    Area.style.display = "none"
  }
</script>

