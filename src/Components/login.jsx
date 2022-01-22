import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./login.scss";
import "../App.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    
    <div className="main" >
      <div
        className="login" id="login"
        style={{
          height: "14.5cm",
          width: "10cm",
          marginTop: "3.1cm",
          marginLeft: "37%",
        }}
      >
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
          alt=""
        />

        <p
          style={{
            color: "rgb(66,69,83)",
            fontSize: "20px",
            marginLeft: "35px",
          }}
        >
          {" "}
          <b>Login</b> or <b>SignUp</b>{" "}
        </p>
        <input
          type="text"
          placeholder="   +91 | Mobile Number *"
          className="phno"
        />
        <p class="para">
          By continuing, I agree to the
          <span> Terms of Use </span> & <span>Privacy policy</span>
        </p>
        <button
          id="btn1"
          onClick={() => {
            let z = "5876";
            try {
             let x = document.getElementById("login");
             x.style.display = "none";

             let y = document.getElementById("otp-container");
             y.style.display = "block";

             alert(z);
            } catch {
              //
            }
          }}
        >
          CONTINUE
        </button>
        <p className="para">
          Have trouble logging in?<span>Get help</span>
        </p>
      </div>
      <div id="otp-container">
      <div>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"
          alt=""
        />
      </div>
      <div>
        <h2>Verify with OTP</h2>
        <input type="number" name="otp" id="otp" placeholder="OTP" />
        <p id="error1"></p>
        <br />
        <br />
        <button id="btn2" onClick={() => {
        try{
          let z = "5876"
          let a = document.getElementById("otp").value;
          if(a === z){
            handleToken("1256348");
          navigate(-1);
          }else{
            alert("wrong_otp")
          }
          
        }catch{
          //
        }
          
      }}>Send</button>
      </div>
    </div>
    </div>
  );
};
